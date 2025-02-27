"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl,
      });

      setLoading(false);
      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              로그인
            </h3>
            <p className="">
              혹시 신입생이신가요?{" "}
              <Link
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                회원가입하기
              </Link>
            </p>
          </div>
          {error ? (
            <div role="alert">
              <div className="border border-red-400 rounded-b bg-red-100 px-4 py-1 text-red-700">
                <p>{error}</p>
              </div>
            </div>
          ) : null}
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            로그인
          </button>
          <div className="text-center">
            <Link href="/auth/register" className="hover:text-indigo-600">
              비밀번호 찾기
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
