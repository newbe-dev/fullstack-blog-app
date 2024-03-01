export default async function Post({
  id,
  title,
  content,
  author,
  category,
  view,
  like,
}) {
  return (
    <li key={id} className="py-3.5 sm:py-4">
      <div className="flex gap-x-4">
        <div className="flex w-full flex-col">
          <div className="flex items-center">
            <div className="flex flex-1 shrink-0 items-center gap-x-1">
              <a href={`#`}>
                <img
                  className="h-5 w-5 rounded-full"
                  src="//www.gravatar.com/avatar/a4bb56363fb15c3510701b9c1af81daa?d=identicon&amp;s=96"
                />
              </a>
              <a
                className="truncate pl-1 text-xs font-normal text-gray-700 hover:text-blue-500 sm:text-sm dark:text-gray-300 dark:hover:text-blue-200"
                href="#"
              >
                {author?.name}
              </a>
              <span className="text-xs text-gray-700 sm:text-sm dark:text-gray-300">
                ·
              </span>
              <span className="text-xs text-gray-700 sm:text-sm dark:text-gray-300">
                42분 전
              </span>
            </div>
            <div className="relative flex items-center -space-x-2.5 sm:hidden">
              <div className="border-gray-500 dark:border-gray-300 shrink-0 space-x-0.5 rounded-md border p-1.5 text-center text-xs leading-3">
                <span className="text-gray-500 dark:text-gray-400">답변</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <a
              className="line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-lg dark:text-gray-100 dark:hover:text-blue-200"
              href={`/articles/${id}`}
            >
              {title}
            </a>
          </div>
          <div className="mb-4">
            <a
              className="line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 sm:text-sm dark:text-gray-100 dark:hover:text-blue-200"
              href={`/articles/${id}`}
            >
              {content}
            </a>
          </div>
          <div className="flex">
            <div className="flex flex-1 items-center gap-x-3">
              <a
                className="shrink-0 rounded bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500 hover:text-blue-300 dark:bg-gray-500 dark:text-gray-100 dark:hover:text-blue-200"
                href={`/board/${category?.name}`}
              >
                {category?.name}
              </a>
            </div>
            <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
              <div className="inline-flex items-center space-x-0.5 text-xs sm:text-sm">
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="font-medium">{view}</span>
              </div>
              <div className="inline-flex items-center -space-x-0.5 text-xs sm:text-sm">
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
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
                <span className="font-medium">{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
