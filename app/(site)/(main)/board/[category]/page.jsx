import Post from "@/components/Post";
import BoardNav from "@/components/BoardNav";
import getPosts from "@/app/actions/getPosts";

export default async function Home({ category }) {
  let posts = await getPosts();
  if (category) {
    posts = posts.filter((post) => post.category === category);
  }

  return (
    <main className="mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0">
      <BoardNav />
      <ul className="divide-y divide-gray-500/30 dark:divide-gray-500/70 w-1/2">
        {posts.map((post) => {
          return <Post {...post} />;
        })}
      </ul>
    </main>
  );
}
