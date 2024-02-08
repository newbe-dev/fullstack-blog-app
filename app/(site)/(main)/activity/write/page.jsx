import React from "react";
import { ApplicationForm } from "@/components/ApplicationForm";
import getSession from "@/app/actions/getSession";

export default async function Home() {
  const { session } = await getSession();
  console.log(session);
  const isStudent = session.user?.role === "STUDENT";
  return <ApplicationForm isStudent={isStudent} />;
}
