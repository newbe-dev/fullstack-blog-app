"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TagInput from "./TagInput";

export const ApplicationForm = ({ isStudent }) => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    location: "",
    teacherName: "",
    date: "",
  });
  const [tags, setTags] = useState([]);
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, studentIds: tags }),
      });
      if (response.ok) {
        router.push("/activity");
      } else {
        // error
      }
    } catch (error) {
      console.error(error);
    }

    setFormData({
      subject: "",
      description: "",
      location: "",
      teacherName: "",
      date: "",
    });
  };

  return (
    <main className="mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0">
      <div className="flex lg:space-x-10">
        <div className="hidden w-[180px] shrink-0 lg:block"></div>
        <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="mb-7 sm:hidden"></div>
          <div className="space-y-10">
            <div className="space-y-2">
              <h3 className="text-xl font-medium sm:text-3xl sm:leading-10">
                탐활서 신청
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                탐활서 신청 페이지
              </p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="space-y-12 sm:space-y-14">
                <div className="grid grid-cols-1 gap-y-7">
                  <div className="space-y-1"></div>
                  <div className="space-y-1">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      활동명
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="활동 주제를 입력해주세요."
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      교사 ID
                    </label>
                    <input
                      type="text"
                      id="teacherName"
                      placeholder="지도교사분의 성명을 입력해주세요."
                      value={formData.teacherName}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                    />
                  </div>

                  <div className="space-y-1 grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        일자
                      </label>
                      <input
                        type="text"
                        id="date"
                        placeholder="일자를 입력해주세요."
                        value={formData.date}
                        onChange={handleInputChange}
                        className="block w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        장소
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder="장소를 입력해주세요."
                        value={formData.location}
                        onChange={handleInputChange}
                        className="block w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      학번
                    </label>

                    <TagInput tags={tags} setTags={setTags} />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      활동 내용을 간략하게 작성해주세요.
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-5 flex justify-center gap-x-3 sm:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/activity");
                    }}
                    className="w-20 rounded-md border border-gray-500/30 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    취소
                  </button>

                  {isStudent ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center space-x-2 rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-40"
                    >
                      신청
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center space-x-2 rounded-md bg-red-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 disabled:bg-red-500 disabled:opacity-40"
                    >
                      발급
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden w-[180px] flex-none space-y-4 lg:block"></div>
      </div>
    </main>
  );
};
