import { useState, useEffect } from "react";
import { BsExclamationTriangle, BsArrowClockwise } from "react-icons/bs";
import UserCard from "./UserCard";

interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { city: string };
  company: { name: string };
}

interface User {
  name: string;
  username: string;
  email: string;
  city: string;
  company: string;
}

export default function HomeSection2() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data: ApiUser[] = await res.json();
      setUsers(
        data.map((u) => ({
          name: u.name,
          username: u.username,
          email: u.email,
          city: u.address.city,
          company: u.company.name,
        }))
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
          onClick={fetchUsers}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8553d] text-white text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[#b34832] hover:shadow-md"
        >
          <BsArrowClockwise className="w-3.75 h-3.75" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-300 mx-auto mt-8 px-8 pb-20 max-md:px-5 max-md:pb-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 max-md:grid-cols-1">
        {users.map((user, i) => (
          <UserCard
            key={user.username}
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
