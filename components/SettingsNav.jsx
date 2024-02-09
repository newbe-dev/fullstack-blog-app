import Link from "next/link";
const SettingsNav = async () => {
  return (
    <aside className="lg:col-span-3 lg:pr-16">
      <nav className="my-4 space-y-3.5 divide-y divide-gray-200 sm:my-0">
        <div className="space-y-1.5">
          <div className="font-medium">내 계정</div>
          <div>
            <Link
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              aria-current="page"
              href="/settings/profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-600 dark:text-gray-400 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">프로필</span>
            </Link>
            <Link
              className="text-gray-500 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="/settings/account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-400 dark:text-gray-600 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">계정 관리</span>
            </Link>
          </div>
        </div>
        <div className="space-y-1.5 pt-5">
          <div className="font-medium">내 활동</div>
          <div>
            <a
              className="text-gray-500 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="https://jobs.okky.kr/settings/career-management"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-400 dark:text-gray-600 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">좋아요한 글</span>
            </a>
            <a
              className="text-gray-500 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="https://jobs.okky.kr/settings/talents"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-400 dark:text-gray-600 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">
                구직 내역 관리
              </span>
            </a>
            <a
              className="text-gray-500 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="https://jobs.okky.kr/settings/bookmarks"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-400 dark:text-gray-600 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">관심 포지션</span>
            </a>
            <a
              className="text-gray-500 group flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-200 hover:text-gray-800 hover:no-underline dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="https://jobs.okky.kr/settings/contract/applications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="text-gray-400 dark:text-gray-600 -ml-1 mr-3 h-6 w-6 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                ></path>
              </svg>
              <span className="truncate hover:no-underline">
                포지션 지원이력
              </span>
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SettingsNav;
