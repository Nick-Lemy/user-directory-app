export const avatarGradients = [
  "from-[#c8553d] to-[#e07a5f]",
  "from-[#3d7068] to-[#5c9a8f]",
  "from-[#8b6e4e] to-[#b89a78]",
  "from-[#5a5480] to-[#7e76a8]",
  "from-[#3b6b8c] to-[#5a9ebf]",
  "from-[#8c6b3b] to-[#bfa05a]",
  "from-[#6b3b5a] to-[#a05a8c]",
  "from-[#3b8c6b] to-[#5abfa0]",
  "from-[#8c3b3b] to-[#bf5a5a]",
  "from-[#3b5a8c] to-[#5a8cbf]",
];

export function getInitials(name: string): string {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getGradient(name: string): string {
  let hash = 0;
  for (const ch of name) hash = (hash + ch.charCodeAt(0)) % avatarGradients.length;
  return avatarGradients[hash];
}
