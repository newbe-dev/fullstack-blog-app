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
      <div className="flex lg:space-x-10">
        <div className="hidden w-[180px] shrink-0 lg:block"></div>
        <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <BoardNav />
          <ul className="divide-y divide-gray-500/30 dark:divide-gray-500/70 w-1/2">
            {posts.map((post, index) => {
              return <Post key={index} {...post} />;
            })}
          </ul>
        </div>

        <div className="hidden w-[180px] shrink-0 lg:block"></div>
      </div>
    </main>
  );
}
