import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  console.log(user);
  return user ? (
    <>
      <div>{user.email}</div>
      <div>{user.password}</div>
      <div>{user.name}</div>
    </>
  ) : null;
}
