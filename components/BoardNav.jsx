import Link from "next/link";
const BoardNav = async () => {
  const navigation = [
    { title: "자유", path: "/board/community" },
    { title: "질문", path: "/board/question" },
    { title: "정보", path: "/board/tip" },
    { title: "전체", path: "/board/" },
  ];

  return (
    <div className="relative my-6 flex items-center justify-between">
      <div className="hidden flex-none sm:inline">
        <Link
          className="flex h-9 items-center space-x-1 rounded-md bg-blue-500 px-3 py-2 text-white shadow-sm hover:bg-blue-400 sm:pr-4"
          href="/board/write"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
          </svg>
          <span className="inline text-sm font-medium hover:no-underline sm:leading-5">
            작성하기
          </span>
        </Link>
      </div>
      <div className="flex grow flex-col gap-y-4">
        <div className="flex sm:justify-center">
          <nav
            className="scroll-hidden flex space-x-3 lg:space-x-8"
            aria-label="Tabs"
          >
            {navigation.map((item) => (
              <Link
                href={item.path}
                className={
                  item.isActive
                    ? "bg-gray-100 dark:bg-gray-700 flex shrink-0 rounded-md px-3 py-2 text-sm font-medium sm:text-base sm:leading-5"
                    : "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 flex shrink-0 rounded-md px-3 py-2 text-sm font-medium sm:text-base sm:leading-5"
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-between sm:hidden">
          <Link
            className="flex h-9 items-center space-x-1 rounded-md bg-blue-500 px-3 py-2 text-white shadow-sm hover:bg-blue-400 sm:pr-4"
            href="/board/write"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
            </svg>
            <span className="inline text-sm font-medium hover:no-underline sm:leading-5">
              질문하기
            </span>
          </Link>
          <div className="flex gap-x-2">
            <div className="inline-flex h-9 items-center justify-center rounded-md border border-gray-500/30 bg-white px-4 py-2 shadow-sm hover:border-gray-900 focus:outline-none sm:hidden sm:pr-4 dark:border-gray-500/70 dark:bg-gray-700 dark:hover:border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
            <div className="flex -space-x-0.5">
              <div
                className="relative inline-block text-left"
                data-headlessui-state=""
              >
                <div>
                  <button
                    className="inline-flex h-9 items-center justify-center space-x-0.5 rounded-r-md border border-gray-500/30 bg-white px-3.5 py-2 text-gray-700 shadow-sm hover:border-gray-500/70 sm:px-3 sm:pr-4 dark:bg-gray-700 dark:text-gray-300"
                    id="headlessui-menu-button-:r4h:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                      ></path>
                    </svg>
                    <span className="hidden text-sm font-medium sm:inline">
                      최신순
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden -space-x-0.5 sm:flex">
        <div
          className="relative inline-block text-left"
          data-headlessui-state=""
        >
          <div>
            <button
              className="inline-flex h-9 items-center justify-center space-x-0.5 rounded-l-md border border-gray-500/30 bg-white px-3.5 py-2 text-gray-700 shadow-sm hover:border-gray-500/70 sm:px-3 dark:bg-gray-700 dark:text-gray-300"
              id="headlessui-menu-button-:r4i:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="text-sm font-medium">전체</span>
            </button>
          </div>
        </div>
        <div
          className="relative inline-block text-left"
          data-headlessui-state=""
        >
          <div>
            <button
              className="inline-flex h-9 items-center justify-center space-x-0.5 rounded-r-md border border-gray-500/30 bg-white px-3.5 py-2 text-gray-700 shadow-sm hover:border-gray-500/70 sm:px-3 sm:pr-4 dark:bg-gray-700 dark:text-gray-300"
              id="headlessui-menu-button-:r4j:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                ></path>
              </svg>
              <span className="hidden text-sm font-medium sm:inline">
                최신순
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardNav;
