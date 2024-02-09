import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import { ProfileForm } from "@/components/ProfileForm";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  console.log(user);
  return <ProfileForm user={user} />;
}
