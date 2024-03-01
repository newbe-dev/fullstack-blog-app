"use client";

import { useRef, useState } from "react";

export const AdminForm = ({ users }) => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    nickname: "",
    role: "",
  });
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleClick = (e, user) => {
    // const { id } = e.target;
    // console.log(e);
    // if (isNaN(id) || parseInt(id) >= users.length || parseInt(id) < 0) return;

    // console.log(users);
    // setUser(users[parseInt(id)]);
    // setFormData({
    //   ...formData,
    //   ...user,
    // });

    setUser(user);
    setFormData({
      name: user.name,
      studentId: user.studentId,
      nickname: user.nickname,
      role: user.role,
    });
  };

  return (
    <div className="grid min-h-[600px] gap-0 grid-cols-3 border-t dark:border-gray-800 mt-10">
      <div className="flex flex-col col-span-2 border-b lg:border-b-0 lg:border-r">
        <div className="flex items-center p-4 border-b lg:px-6 lg:py-4 lg:border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mr-2.5"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h2 className="text-lg font-semibold leading-none">Users</h2>
        </div>
        <div className="grid grid-cols-6 border-b">
          {users.map((user, index) => (
            <button
              key={index}
              id={index}
              className="flex text-left items-center p-4 space-x-4 cursor-pointer transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800"
              onClick={(e) => handleClick(e, user)}
            >
              <div className="flex-1 grid gap-1">
                <h3 className="text-sm font-semibold">
                  {user?.studentId}
                  {"  "}
                  {user?.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.role === "STUDENT"
                    ? "학생"
                    : user?.role === "TEACHER"
                    ? "선생님"
                    : "관리자"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex p-4 border-b lg:px-6 lg:py-4 lg:border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mr-2.5"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h2 className="text-lg font-semibold leading-none">User</h2>
        </div>
        <div className="p-4 gap-8">
          <div className="space-x-4">
            <div className="flex items-center mb-6">
              <span className="flex shrink-0 overflow-hidden rounded-full w-12 h-12 border">
                <img
                  src="/placeholder.svg"
                  width="56"
                  height="56"
                  className="rounded-full"
                  alt="Avatar"
                />
              </span>
              <h3 className="text-base font-semibold ml-4">
                {user?.studentId || ""} {user?.name || ""}
              </h3>
            </div>

            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="studentId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  학번
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    id="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base dark:bg-gray-500/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  이름
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={formData.nickname}
                    autoComplete="nickname"
                    placeholder="닉네임을 입력해주세요."
                    className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base dark:bg-gray-500/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 border-t dark:border-gray-800">
          <button
            type="button"
            className="inline-flex items-center space-x-2 rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-40"
          >
            수정
          </button>
          <button
            type="button"
            className="inline-flex items-center space-x-2 rounded-md bg-red-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 disabled:bg-red-500 disabled:opacity-40"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};
