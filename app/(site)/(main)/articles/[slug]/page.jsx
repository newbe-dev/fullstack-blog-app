import prisma from "@/lib/prisma";

async function getPost(id) {
  const post = await prisma.post.findFirst({
    where: {
      published: true,
      id: id,
    },
    include: {
      author: {
        select: { name: true },
      },
      category: {
        select: { name: true },
      },
    },
  });
  return post;
}

export default async function Home({ params }) {
  const post = await getPost(parseInt(params.slug));
  const { id, title, content, like, createdAt, category, author } = post;
  console.log(post);

  return (
    <main className="mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0">
      <div className="flex lg:space-x-10">
        <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="min-w-0 flex-auto">
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500/30 dark:border-gray-500/70"></div>
              </div>
              <div className="relative ml-2 flex text-sm font-normal sm:ml-5">
                <div className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <a
                    className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-200"
                    href={`/board/${category.name}`}
                  >
                    {category.name}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-x-3.5 sm:mt-9 sm:gap-x-4">
              <div className="relative shrink-0">
                <div className="sticky top-16">
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      className="group relative flex h-6 w-6 items-center justify-center rounded-t-lg border border-gray-500/30 bg-white text-gray-700 hover:border-gray-500/70 focus:z-10 focus:outline-none focus:ring-0 sm:h-8 sm:w-8 dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500/30"
                    >
                      <span className="sr-only">추천</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="hover:text-blue-500 group-hover:text-blue-500 h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        ></path>
                      </svg>
                    </button>
                    <span className="my-0.5 flex items-center justify-center text-sm font-medium text-gray-700 sm:my-1 sm:text-lg dark:text-gray-300">
                      {like}
                    </span>
                    <button
                      type="button"
                      className="group relative flex h-6 w-6 items-center justify-center rounded-b-lg border border-gray-500/30 bg-white text-gray-700 hover:border-gray-500/70 focus:z-10 focus:outline-none focus:ring-0 sm:h-8 sm:w-8 dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500/30"
                    >
                      <span className="sr-only">비추천</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="hover:text-red-500 group-hover:text-red-500 h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-x-hidden">
                <div className="mb-16 w-full">
                  <div className="mb-8 flex flex-wrap sm:mb-9">
                    <div className="flex items-center justify-center">
                      <a href="#">
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://ssl.pstatic.net/static/pwe/address/img_profile.png"
                          alt="프로필 사진"
                        />
                      </a>
                      <div className="ml-2 flex flex-1 flex-col text-base font-normal">
                        <a
                          className="pl-0.5 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200"
                          href="#"
                        >
                          {author.name}
                        </a>
                        <div className="flex items-center gap-x-1 text-sm font-normal text-gray-700 dark:text-gray-300">
                          <span>·</span>
                          <span>{}</span>
                          <span>·</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="block break-all text-xl font-semibold leading-7 sm:text-3xl sm:leading-10">
                    {title}
                  </h1>
                  <div className="my-6 text-sm text-gray-700 sm:my-8 sm:text-base dark:text-gray-300">
                    <div className="remirror-theme">
                      <div className="remirror-editor-wrapper">
                        <div
                          contenteditable="false"
                          role="textbox"
                          aria-multiline="true"
                          aria-readonly="true"
                          translate="no"
                          className="ProseMirror remirror-editor remirror-a11y-dark"
                        >
                          <p column-span="none">{content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-wrap items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
