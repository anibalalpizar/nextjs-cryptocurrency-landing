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
    <div className="relative z-10 w-full px-4 py-3">
      <nav className="bg-black/70 backdrop-blur-sm rounded-full px-8 py-3 flex items-center max-w-6xl mx-auto">
        <div className="flex-1 flex justify-start">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={40}
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
          <button className="bg-[#AFAFAF] text-black hover:bg-[#9F9F9F] rounded-full px-6 py-2 text-sm">
            Launch App
          </button>
        </div>
      </nav>
    </div>
  )
}
