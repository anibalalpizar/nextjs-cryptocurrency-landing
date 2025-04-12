import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  photo: string
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Isabella Wilson",
      role: "Owner",
      photo: "/profile-photo.jpg",
    },
    {
      name: "Peter Parker",
      role: "UI & UX",
      photo: "/profile-photo.jpg",
    },
    {
      name: "Avery Anderson",
      role: "Developer",
      photo: "/profile-photo.jpg",
    },
  ]

  return (
    <section className="relative mt-32 px-4">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(185, 28, 28, 0.25) 0%, rgba(120, 10, 10, 0.15) 25%, rgba(80, 5, 5, 0.1) 40%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-5xl font-bold text-white mb-12">Our team</h2>

        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#0D0D0D]/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-xl mb-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-white/60 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
