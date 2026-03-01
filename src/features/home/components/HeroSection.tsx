import { BsSearch, BsSortDown, BsSortUp } from "react-icons/bs";

interface HeroSectionProps {
  search: string;
  onSearchChange: (value: string) => void;
  sorted: boolean;
  onSortToggle: () => void;
}

export default function HeroSection({ search, onSearchChange, sorted, onSortToggle }: HeroSectionProps) {
  return (
    <>
      {/* Hero */}
      <section className="max-w-300 mx-auto pt-12 px-8 max-md:pt-8 max-md:px-5">
        <div className="flex items-end justify-between gap-8 flex-wrap max-md:flex-col max-md:items-start max-md:gap-4">
          <div>
            <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-light tracking-tighter leading-[1.15] text-[#1a1714]">
              Team{" "}
              <em className="italic font-normal text-[#c8553d]">Directory</em>
            </h1>
            <p className="mt-2 text-[15px] text-[#6b6560] max-w-100 leading-relaxed">
              Browse the team, find contact details, and connect with colleagues
              across the organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Sort */}
      <div className="max-w-300 mx-auto mt-8 px-8 max-md:px-5">
        <div className="flex gap-3 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name…"
              className="w-full py-3.5 pl-12 pr-5 text-[15px] border-[1.5px] border-[#e8e3db] rounded-[14px] bg-white text-[#1a1714] shadow-sm transition-all duration-250 placeholder:text-[#9c9590] hover:border-[#d4cec4] focus:outline-none focus:border-[#c8553d] focus:shadow-[0_0_0_3px_#f9eeeb,0_4px_16px_rgba(26,23,20,0.06)]"
            />
            <BsSearch className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#9c9590] pointer-events-none" />
          </div>
          <button
            onClick={onSortToggle}
            className={`flex items-center gap-1.5 px-3.5 py-3.5 rounded-[14px] border-[1.5px] text-[13px] font-medium cursor-pointer transition-all duration-200 shrink-0 ${
              sorted
                ? "border-[#c8553d] bg-[#f9eeeb] text-[#c8553d]"
                : "border-[#e8e3db] bg-white text-[#6b6560] hover:border-[#d4cec4] hover:text-[#1a1714] hover:shadow-sm"
            }`}
            title={sorted ? "Remove sort" : "Sort A–Z"}
          >
            {sorted ? <BsSortUp className="w-3.5 h-3.5" /> : <BsSortDown className="w-3.5 h-3.5 opacity-60" />}
            <span className="max-md:hidden">{sorted ? "Sorted A–Z" : "Sort A–Z"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
