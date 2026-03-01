interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  company: { name: string };
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  company: string;
}

function mapUser(u: ApiUser): User {
  return {
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    phone: u.phone,
    city: u.address.city,
    address: `${u.address.suite}, ${u.address.street}, ${u.address.city}, ${u.address.zipcode}`,
    company: u.company.name,
  };
}

export async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  const data: ApiUser = await res.json();
  return mapUser(data);
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  const data: ApiUser[] = await res.json();
  return data.map(mapUser);
}
