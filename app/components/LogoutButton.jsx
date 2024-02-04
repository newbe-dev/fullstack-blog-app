"use client";
import { signOut } from "next-auth/react";

export default () => (
  <button
    onClick={() => signOut()}
    className="block text-gray-700 hover:text-gray-900"
  >
    로그아웃
  </button>
);
