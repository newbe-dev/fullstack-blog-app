import Link from "next/link";
import LogoutButton from "./LogoutButton";
import getSession from "@/app/actions/getSession";

const Nav = async () => {
  const navigation = [
    { title: "공지사항", path: "/notice" },
    { title: "자유게시판", path: "/board" },
    { title: "탐활서", path: "/activity" },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center border-b border-b-gray-500/30 bg-white py-5 text-sm font-medium leading-6  dark:bg-gray-800">
      <nav className="w-full px-4 lg:px-0">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
              <img
                src="https://jshsus.kr/resources/icon/lIcon.png"
                width={50}
                height={50}
                alt="JSHS LOGO"
              />
            </Link>
          </div>
          <div className="flex-1 items-center mt-8 md:mt-0 md:flex block">
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-gray-900">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <Link href={"/profile"}>마이페이지</Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
