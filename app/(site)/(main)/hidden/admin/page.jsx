import { redirect } from "next/navigation";
import getSession from "@/app/actions/getSession";
import getUsers from "@/app/actions/getAllUsers";
import { AdminForm } from "@/components/AdminForm";

export default async function Home() {
  const { session, token } = (await getSession()) || {};

  if (!session || session.user?.role != "ADMIN") {
    return redirect("/login");
  }

  const users = await getUsers();
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
      <div>
        <AdminForm users={users} />
        {/* {users.map((user, index) => (
          <div key={index} className="">
            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{user.studentId}</div>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    {user.role === "STUDENT"
                      ? "학생"
                      : user.role === "TEACHER"
                      ? "선생님"
                      : "관리자"}
                  </div>
                </div>
                <div className="text-xs font-medium">{user.name}</div>
              </div>
            </button>
          </div>
        ))} */}
      </div>
    </main>
  );
}
