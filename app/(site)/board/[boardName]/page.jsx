import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "@/app/components/Post";
import Link from "next/link";

async function getPosts(boardName) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      category: {
        board: {
          name: boardName,
        },
      },
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home({ params }) {
  const boardName = params.boardName;
  const posts = await getPosts(boardName);
  return (
    <main className={styles.main}>
      <Link href={`/board/${boardName}/write`}>글쓰기</Link>
      <h1>feed</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            category={post.category}
          />
        );
      })}
    </main>
  );
}
