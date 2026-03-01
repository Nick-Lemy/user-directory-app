import { BsEnvelope, BsGeoAlt, BsBuilding, BsArrowUpRight } from "react-icons/bs";

const avatarGradients = [
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

const users = [
  { name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", city: "Gwenborough", company: "Romaguera-Crona" },
  { name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", city: "Wisokyburgh", company: "Deckow-Crist" },
  { name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", city: "McKenziehaven", company: "Romaguera-Jacobson" },
  { name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", city: "South Elvis", company: "Robel-Corkery" },
  { name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", city: "Roscoeview", company: "Keebler LLC" },
  { name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", city: "South Christy", company: "Considine-Lockman" },
  { name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", city: "Howemouth", company: "Johns Group" },
  { name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", city: "Aliyaview", company: "Abernathy Group" },
  { name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", city: "Bartholomebury", company: "Yost and Sons" },
  { name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", city: "Lebsackbury", company: "Hoeger LLC" },
];

function getInitials(name: string) {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function HomeSection2() {
  return (
    <section className="max-w-300 mx-auto mt-8 px-8 pb-20 max-md:px-5 max-md:pb-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 max-md:grid-cols-1">
        {users.map((user, i) => (
          <div
            key={user.username}
            tabIndex={0}
            className="group relative bg-white border border-[#e8e3db] rounded-[20px] p-6 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden hover:border-[#d4cec4] hover:shadow-[0_4px_16px_rgba(26,23,20,0.06)] hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#c8553d] before:scale-x-0 before:origin-left before:transition-transform before:duration-350 before:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:before:scale-x-100"
            style={{ animationDelay: `${i * 0.03}s` }}
          >
            {/* Header */}
            <div className="flex items-start gap-3.5 mb-4.5">
              <div
                className={`w-12 h-12 rounded-[14px] grid place-items-center font-serif font-semibold text-lg text-white shrink-0 bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`}
              >
                {getInitials(user.name)}
              </div>
              <div>
                <div className="font-serif font-medium text-[17px] tracking-tight text-[#1a1714] leading-tight">
                  {user.name}
                </div>
                <div className="text-[13px] text-[#9c9590] mt-0.5">
                  @{user.username}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[13.5px] text-[#6b6560]">
                <BsEnvelope className="w-[15px] h-[15px] text-[#9c9590] shrink-0" />
                <a href="#" className="text-[#6b6560] no-underline transition-colors duration-200 hover:text-[#c8553d]">
                  {user.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[13.5px] text-[#6b6560]">
                <BsGeoAlt className="w-[15px] h-[15px] text-[#9c9590] shrink-0" />
                <span>{user.city}</span>
              </div>
            </div>

            {/* Company tag */}
            <div className="inline-flex items-center gap-1 mt-3.5 px-2.5 py-1 rounded-full bg-[#ede8e0] text-xs font-medium text-[#6b6560] tracking-wide">
              <BsBuilding className="w-3 h-3" />
              {user.company}
            </div>

            {/* Arrow */}
            <div className="absolute bottom-5 right-5 w-7 h-7 rounded-lg bg-[#f6f3ee] grid place-items-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
              <BsArrowUpRight className="w-3.5 h-3.5 text-[#9c9590]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
