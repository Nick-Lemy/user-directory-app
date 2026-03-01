import { useDeferredValue, useMemo } from "react";
import { BsExclamationTriangle, BsArrowClockwise, BsSearch } from "react-icons/bs";
import type { User } from "../../../api/users";
import UserCard from "./UserCard";

interface UserGridProps {
  users: User[];
  loading: boolean;
  error: string | null;
  search: string;
  sorted: boolean;
  onRetry: () => void;
}

export default function UserGrid({
  users,
  loading,
  error,
  search,
  sorted,
  onRetry,
}: UserGridProps) {
  const deferredSearch = useDeferredValue(search);

  const filteredUsers = useMemo(() => {
    const query = deferredSearch.toLowerCase().trim();
    let result = query ? users.filter((u) => u.name.toLowerCase().includes(query)) : [...users];
    if (sorted) result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [users, deferredSearch, sorted]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-5">
        <div className="w-9 h-9 border-3 border-[#e8e3db] border-t-[#c8553d] rounded-full animate-spin" />
        <span className="text-sm font-medium text-[#9c9590]">
          Loading users…
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-8">
        <div className="w-14 h-14 rounded-2xl bg-[#f9eeeb] inline-grid place-items-center mb-4">
          <BsExclamationTriangle className="w-6 h-6 text-[#c8553d]" />
        </div>
        <div className="font-serif text-xl font-medium text-[#1a1714] mb-1.5">
          Unable to load users
        </div>
        <p className="text-sm text-[#9c9590] mb-5">{error}</p>
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8553d] text-white text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[#b34832] hover:shadow-md"
        >
          <BsArrowClockwise className="w-3.75 h-3.75" />
          Try again
        </button>
      </div>
    );
  }

  if (filteredUsers.length === 0) {
    return (
      <div className="text-center py-20 px-8">
        <div className="w-14 h-14 rounded-2xl bg-[#ede8e0] inline-grid place-items-center mb-4">
          <BsSearch className="w-6 h-6 text-[#9c9590]" />
        </div>
        <div className="font-serif text-xl font-medium text-[#1a1714] mb-1.5">
          No users found
        </div>
        <p className="text-sm text-[#9c9590]">
          No results match "{search}". Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-300 mx-auto mt-8 px-8 pb-20 max-md:px-5 max-md:pb-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 max-md:grid-cols-1">
        {filteredUsers.map((user, i) => (
          <UserCard
            key={user.username}
            id={user.id}
            index={i}
            name={user.name}
            username={user.username}
            email={user.email}
            city={user.city}
            company={user.company}
          />
        ))}
      </div>
    </section>
  );
}
