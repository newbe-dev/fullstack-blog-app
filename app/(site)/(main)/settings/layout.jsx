import Nav from "@/components/Nav";
import SettingsNav from "@/components/SettingsNav";

export default async function Layout({ children }) {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="mt-6 px-4 lg:mt-10 lg:px-0">
        <div className="divide-y divide-gray-500/30 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0 dark:divide-gray-500/70">
          <SettingsNav />
          {children}
        </div>
      </div>
    </main>
  );
}
