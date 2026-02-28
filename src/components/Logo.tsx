import { PiUsersBold } from "react-icons/pi";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 no-underline shrink-0">
      <div className="w-9 h-9 rounded-[10px] bg-[#c8553d] grid place-items-center relative overflow-hidden">
        <div className="absolute w-4.5 h-4.5 rounded-full bg-white/20 -top-1 -right-1" />
        <PiUsersBold size={18} className="text-white relative z-10" />
      </div>
      <span className="font-serif font-medium text-lg tracking-tight text-[#1a1714]">
        Directory
      </span>
    </a>
  );
}
