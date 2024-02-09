import Activity from "@/components/Activity";
//import BoardNav from "@/components/BoardNav";
import getActivities from "@/app/actions/getActivities";

export default async function Home() {
  const activities = await getActivities();
  return (
    <main className="my-10 mx-48 px-4 sm:px-6 xl:px-0">
      <div className="flex flex-col w-full gap-4">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
              탐활서
            </h3>
            <p className="text-sm text-muted-foreground">탐활서 목록</p>
          </div>
          <div className="p-6">
            <div className="flex flex-col h-[300px]">
              <div className="flex-1">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          활동주제
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          활동일시
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          활동내용
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          대표학생
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          참여학생
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          지도교사
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      {activities.map((activity, index) => {
                        return <Activity key={index} {...activity} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
