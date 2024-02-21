"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const AccountForm = ({ user }) => {
  if (!user) return <div></div>;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nickname: user.nickname || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/user/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }
      router.push("/");
    } catch (error) {
      setError(error);
    }
    setLoading(false);
    setFormData({ nickname: "" });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="divide-y divide-gray-500/30 lg:col-span-9 dark:divide-gray-500/70">
      <div className="my-10 lg:my-0 lg:pl-20">
        <h2 className="text-xl font-semibold leading-6">회원정보</h2>
        <div className="my-10 flex flex-col lg:flex-row">
          <div className="flex-grow space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                이름
              </label>
              <div className="mt-1 flex">
                <input
                  type="text"
                  id="username"
                  autoComplete="username"
                  placeholder="이름을 입력해주세요."
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base dark:bg-gray-500/20"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                닉네임
              </label>
              <div className="mt-1 flex">
                <input
                  type="text"
                  id="nickname"
                  autoComplete="nickname"
                  placeholder="닉네임을 입력해주세요."
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base dark:bg-gray-500/20"
                  name="nickname"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex-grow lg:ml-52 lg:mt-0 lg:shrink-0 lg:grow-0">
            <p
              className="text-sm font-medium text-gray-700 sm:hidden dark:text-gray-300"
              aria-hidden="true"
            >
              프로필 사진
            </p>
            <div className="relative" data-headlessui-state="">
              <div className="mt-1 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                    aria-hidden="true"
                  >
                    <img
                      className="h-full w-full rounded-full border-2 border-gray-200"
                      src="https://avatars.githubusercontent.com/u/83263410?v=4"
                      alt="프로필 사진"
                    />
                  </div>
                  <div className="ml-5 rounded-md shadow-sm">
                    <div className="group relative flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:bg-gray-50">
                      <button
                        id="headlessui-popover-button-:rp:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <label
                          htmlFor="mobile-user-photo"
                          className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700 dark:text-gray-300"
                        >
                          <span>변경</span>
                          <span className="sr-only">프로필 사진</span>
                        </label>
                        <input
                          id="mobile-user-photo"
                          name="user-photo"
                          type="file"
                          className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative my-1 hidden overflow-hidden rounded-full lg:block">
                <img
                  className="h-40 w-40 rounded-full border-2 border-gray-200"
                  src="https://avatars.githubusercontent.com/u/83263410?v=4"
                  alt="프로필 사진"
                />
                <button
                  className="absolute inset-0"
                  id="headlessui-popover-button-:rp:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <label
                    htmlFor="desktop-user-photo"
                    className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-75 text-sm font-medium text-gray-100 opacity-0 focus-within:opacity-100 hover:opacity-100"
                  >
                    <span>변경</span>
                    <span className="sr-only">프로필 사진</span>
                    <input
                      id="desktop-user-photo"
                      name="user-photo"
                      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                    />
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
