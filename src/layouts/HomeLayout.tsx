import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <>
      <header className="max-w-3xl mx-auto p-5">
        <Navbar />
      </header>
      <main className="max-w-3xl mx-auto p-5">
        <Outlet />
      </main>
    </>
  );
}
