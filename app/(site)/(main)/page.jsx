import { redirect } from "next/navigation";
import getSession from "@/app/actions/getSession";

export default async function Home() {
  const session = await getSession();
  if (session == null) {
    return redirect("/login");
  } else {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        m
      </main>
    );
  }
}
