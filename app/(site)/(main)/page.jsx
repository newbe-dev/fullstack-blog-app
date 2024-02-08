import { redirect } from "next/navigation";
import styles from "./page.module.css";
import getSession from "@/app/actions/getSession";

export default async function Home() {
  const session = await getSession();
  if (session == null) {
    return redirect("/login");
  } else {
    return (
      <main className={styles.main}>
        <h1>240128 HomePage</h1>
      </main>
    );
  }
}
