import Logo from "../../../components/shared/Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#f6f3ee]/85 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-[#e8e3db]">
      <div className="max-w-300 mx-auto px-8 py-4 flex items-center justify-between gap-6">
        <Logo />
      </div>
    </nav>
  );
}
