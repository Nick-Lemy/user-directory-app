import { useEffect } from "react";
import {
  BsX,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsBuilding,
} from "react-icons/bs";
import type { User } from "../../../api/users";
import { getInitials, getGradient } from "../../../utils/avatar";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const rows = [
    { icon: BsEnvelope, label: "Email", value: user.email },
    { icon: BsTelephone, label: "Phone", value: user.phone },
    { icon: BsGeoAlt, label: "Address", value: user.address },
    { icon: BsBuilding, label: "Company", value: user.company },
  ];

  return (
    <div
      className="fixed inset-0 z-200 bg-[#1a1714]/35 backdrop-blur-[8px] flex items-center justify-center p-6 animate-[fadeIn_0.25s_ease]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-[28px] w-full max-w-[560px] max-h-[90vh] overflow-y-auto shadow-[0_12px_40px_rgba(26,23,20,0.1)] animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)] relative max-md:mx-3 max-md:rounded-[20px]">
        {/* Header */}
        <div className="relative pt-8 px-8 max-md:pt-6 max-md:px-6">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-[10px] border border-[#e8e3db] bg-white grid place-items-center cursor-pointer transition-all duration-200 hover:bg-[#f6f3ee] hover:border-[#d4cec4] z-10"
          >
            <BsX className="w-4 h-4 text-[#6b6560]" />
          </button>

          <div
            className={`w-[72px] h-[72px] rounded-[20px] grid place-items-center font-serif font-semibold text-[28px] text-white mb-5 bg-linear-to-br ${getGradient(user.name)}`}
          >
            {getInitials(user.name)}
          </div>
          <div className="font-serif text-[28px] font-medium tracking-tight leading-tight max-md:text-2xl">
            {user.name}
          </div>
          <div className="text-sm text-[#9c9590] mt-1">@{user.username}</div>
        </div>

        {/* Body */}
        <div className="pt-7 px-8 pb-9 max-md:pt-6 max-md:px-6 max-md:pb-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9c9590] mb-3">
            Contact & Details
          </div>
          {rows.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-3 py-2.5 border-b border-[#e8e3db] last:border-b-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f6f3ee] grid place-items-center shrink-0 mt-0.5">
                <Icon className="w-3.75 h-3.75 text-[#9c9590]" />
              </div>
              <div>
                <div className="text-xs text-[#9c9590] mb-0.5">{label}</div>
                <div className="text-[14.5px] font-medium text-[#1a1714] leading-snug">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
