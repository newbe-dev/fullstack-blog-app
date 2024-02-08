import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import Link from "next/link";
export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-10 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            탐활서
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            탐활서 신청 및 발급
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <div className="md max-w-[544px] p-4 md:w-1/2">
              <Link
                href="/activity/list"
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  탐활서 확인 / 승인
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  발급된 탐활서를 확인하거나 탐활서 신청을 승인
                </p>
              </Link>
            </div>
            <div className="md max-w-[544px] p-4 md:w-1/2">
              <Link
                href="/activity/write"
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  탐활서 신청 / 발급
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  탐활서 신청하거나 발급(선생님 전용)
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
