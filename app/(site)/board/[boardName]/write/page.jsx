"use client";

import styles from "@/app/page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
// async function getCategories(boardName) {
//   const categories = await prisma.category.findMany({
//     where: {
//       board: {
//         name: boardName,
//       },
//     },
//   });
//   return posts;
// }

export default function Home({ params }) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "question",
    },
    {
      id: 2,
      name: "question",
    },
    {
      id: 3,
      name: "question",
    },
  ]);
  //const categories = await getCategories(boardName);

  // State to store form data
  const [formData, setFormData] = useState({
    category: "0",
    title: "",
    content: "",
  });
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, title, content } = formData;
    try {
      await fetch("/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, category }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setFormData({ title: "", content: "", category: "" });
  };

  return (
    <main className={styles.main}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
