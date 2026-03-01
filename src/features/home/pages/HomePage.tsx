import { useState } from "react";
import HeroSection from "../components/HeroSection";
import UserGrid from "../components/UserGrid";
import { useUsers } from "../hooks/useUsers";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);
  const { users, loading, error, retry } = useUsers();

  return (
    <div>
      <HeroSection
        search={search}
        onSearchChange={setSearch}
        sorted={sorted}
        onSortToggle={() => setSorted((s) => !s)}
      />
      <UserGrid
        users={users}
        loading={loading}
        error={error}
        search={search}
        sorted={sorted}
        onRetry={retry}
      />
    </div>
  );
}
