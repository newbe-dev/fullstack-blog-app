import Nav from "@/components/Nav";

export default async function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
