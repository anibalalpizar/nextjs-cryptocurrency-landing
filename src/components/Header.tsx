import Image from "next/image"

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a href={href} className="text-white hover:text-white/80 transition">
    {children}
  </a>
)

export function Header() {
  return (
    <div className="relative z-10 w-full px-4 py-6">
      <nav className="bg-zinc-900/50 backdrop-blur-sm rounded-full px-8 py-4 flex items-center max-w-6xl mx-auto">
        <div className="flex-1 flex justify-start">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={36}
            height={50}
            className="brightness-0 invert"
            priority
          />
        </div>

        <div className="flex items-center gap-12 justify-center">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Career</NavLink>
        </div>

        <div className="flex-1 flex justify-end">
          <button className="bg-[#AFAFAF] text-black hover:bg-[#9F9F9F] rounded-full px-6">
            Launch App
          </button>
        </div>
      </nav>
    </div>
  )
}
