import { useState } from "react";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <HomeSection1 search={search} onSearchChange={setSearch} />
      <HomeSection2 search={search} />
    </div>
  );
}
