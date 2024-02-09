import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import { AccountForm } from "@/components/AccountForm";

export default async function AccountPage() {
  const user = await getCurrentUser();
  console.log(user);
  return <AccountForm user={user} />;
}
