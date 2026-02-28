import { BsSearch } from "react-icons/bs";

export default function HomeSection1() {
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

      {/* Search */}
      <div className="max-w-300 mx-auto mt-8 px-8 max-md:px-5">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by name…"
            className="w-full py-3.5 pl-12 pr-5 text-[15px] border-[1.5px] border-[#e8e3db] rounded-[14px] bg-white text-[#1a1714] shadow-sm transition-all duration-250 placeholder:text-[#9c9590] hover:border-[#d4cec4] focus:outline-none focus:border-[#c8553d] focus:shadow-[0_0_0_3px_#f9eeeb,0_4px_16px_rgba(26,23,20,0.06)]"
          />
          <BsSearch className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#9c9590] pointer-events-none" />
        </div>
      </div>
    </>
  );
}
