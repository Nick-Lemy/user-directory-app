import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BsX,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsBuilding,
  BsArrowLeft,
  BsExclamationTriangle,
} from "react-icons/bs";
import { fetchUser, type User } from "../../../api/users";
import { getInitials, getGradient } from "../../../utils/avatar";

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const numId = Number(id);
    if (!id || isNaN(numId)) {
      setError("Invalid user ID");
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchUser(numId)
      .then(setUser)
      .catch((e) => setError(e instanceof Error ? e.message : "Something went wrong"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-5">
        <div className="w-9 h-9 border-3 border-[#e8e3db] border-t-[#c8553d] rounded-full animate-spin" />
        <span className="text-sm font-medium text-[#9c9590]">Loading user…</span>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-center py-20 px-8">
        <div className="w-14 h-14 rounded-2xl bg-[#f9eeeb] inline-grid place-items-center mb-4">
          <BsExclamationTriangle className="w-6 h-6 text-[#c8553d]" />
        </div>
        <div className="font-serif text-xl font-medium text-[#1a1714] mb-1.5">
          User not found
        </div>
        <p className="text-sm text-[#9c9590] mb-5">{error}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8553d] text-white text-sm font-medium no-underline transition-all duration-200 hover:bg-[#b34832] hover:shadow-md"
        >
          <BsArrowLeft className="w-3.75 h-3.75" />
          Back to directory
        </Link>
      </div>
    );
  }

  const rows = [
    { icon: BsEnvelope, label: "Email", value: user.email },
    { icon: BsTelephone, label: "Phone", value: user.phone },
    { icon: BsGeoAlt, label: "Address", value: user.address },
    { icon: BsBuilding, label: "Company", value: user.company },
  ];

  return (
    <div className="max-w-[560px] mx-auto mt-12 px-8 pb-20 max-md:mt-8 max-md:px-5">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[#9c9590] no-underline mb-8 transition-colors duration-200 hover:text-[#1a1714]"
      >
        <BsArrowLeft className="w-3.5 h-3.5" />
        Back to directory
      </Link>

      <div className="bg-white rounded-[28px] shadow-[0_12px_40px_rgba(26,23,20,0.1)] animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)] max-md:rounded-[20px]">
        <div className="relative pt-8 px-8 max-md:pt-6 max-md:px-6">
          <Link
            to="/"
            className="absolute top-5 right-5 w-9 h-9 rounded-[10px] border border-[#e8e3db] bg-white grid place-items-center no-underline transition-all duration-200 hover:bg-[#f6f3ee] hover:border-[#d4cec4] z-10"
          >
            <BsX className="w-4 h-4 text-[#6b6560]" />
          </Link>

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
