import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1a1714] font-sans leading-relaxed antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
