import { PiUserCircleDuotone } from "react-icons/pi";

export default function Logo() {
  return (
    <div className="flex items-center">
      <PiUserCircleDuotone size={30} className="text-red-300" />
      <h1 className="text-[14px] font-semibold text-red-300">User Directory</h1>
    </div>
  );
}
