import React from "react";
import { ApplicationForm } from "@/components/ApplicationForm";
import getSession from "@/app/actions/getSession";

export default async function Home() {
  const { session } = await getSession();
  console.log(session);
  const isTeacher =
    session.user?.role === "TEACHER" || session.user?.role === "ADMIN";
  return <ApplicationForm isTeacher={isTeacher} name={session.user?.name} />;
}
