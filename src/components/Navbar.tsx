import Logo from "./Logo";
import { BsSortDown } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#f6f3ee]/85 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-[#e8e3db]">
      <div className="max-w-300 mx-auto px-8 py-4 flex items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#e8e3db] bg-white text-[13px] font-medium text-[#6b6560] cursor-pointer transition-all duration-200 hover:border-[#d4cec4] hover:text-[#1a1714] hover:shadow-sm"
            title="Sort by name"
          >
            <BsSortDown className="w-3.5 h-3.5 opacity-60" />
            <span className="max-md:hidden">Sort A–Z</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
