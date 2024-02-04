import { getServerSession } from "next-auth";
import { authOptions as options } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Nav = async () => {
  const session = await getServerSession(options);
  //console.log(session);

  const navigation = [
    { title: "게시판", path: "/board" },
    { title: "ㅇㅇ", path: "/board" },
    { title: "ㅇㅇ", path: "/board" },
    { title: "ㅇㅇ", path: "/board" },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center border-b border-b-gray-500/30 bg-white py-5 text-sm font-medium leading-6  dark:bg-gray-800">
      <nav className="w-full max-w-7xl px-4 lg:px-0">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
              <img
                src="https://www.floatui.com/logo.svg"
                width={120}
                height={50}
                alt="Float UI logo"
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
              {session ? (
                <LogoutButton></LogoutButton>
              ) : (
                // <Link
                //   href="/auth/logout"
                //   className="block text-gray-700 hover:text-gray-900"
                // >
                //   로그아웃
                // </Link>
                <Link
                  href="/auth/login"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  로그인
                </Link>
              )}

              <Link
                href="/auth/register"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
