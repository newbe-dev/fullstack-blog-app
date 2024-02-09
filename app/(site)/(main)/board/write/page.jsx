"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home({ params }) {
  const [categories, setCategories] = useState([
    {
      id: "community",
      name: "자유",
    },
    {
      id: "question",
      name: "질문",
    },
    {
      id: "tip",
      name: "정보",
    },
  ]);
  //const categories = await getCategories(boardName);

  // State to store form data
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    content: "",
  });
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
      const response = await fetch("/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/board");
      } else {
        // error
      }
    } catch (error) {
      console.error(error);
    }

    setFormData({ title: "", content: "", category: "" });
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
                글 작성
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                글을 작성해보세요
              </p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="space-y-12 sm:space-y-14">
                <div className="grid grid-cols-1 gap-y-7">
                  <div className="space-y-1">
                    <select
                      id="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    >
                      <option value="">카테고리를 선택해주세요.</option>;
                      {categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      제목
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="글의 제목을 입력해주세요."
                      value={formData.title}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="content"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      본문
                    </label>
                    <textarea
                      id="content"
                      value={formData.content}
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
                      router.push("/board");
                    }}
                    className="w-20 rounded-md border border-gray-500/30 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    취소
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center space-x-2 rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-40"
                  >
                    등록
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden w-[180px] flex-none space-y-4 lg:block"></div>
        {/* <form className="grid grid-cols-1 gap-y-7">
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            <option value="">카테고리를 선택해주세요.</option>;
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="content">본문</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="mt-5 flex justify-center gap-x-3 sm:justify-end">
            <button
              type="button"
              onClick={() => {
                router.push("/board");
              }}
              className="w-20 rounded-md border border-gray-500/30 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              취소
            </button>
            <button
              type="button"
              className="inline-flex items-center space-x-2 rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-40"
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
          {/* <div className="hidden w-[180px] shrink-0 lg:block"></div> */}
        {/* </form> */}
      </div>
    </main>
  );
}
