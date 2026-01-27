import { NavLink } from "react-router-dom"
type NavItemProps = {
  to: string
  children: React.ReactNode
}

const  NavItem = ({ to, children }: NavItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative pb-1 transition
           ${isActive ? 'text-[#c9a38d]' : 'text-white/80 hover:text-white'}`
        }
      >
        {children}

        {/* underline */}
        <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-[#c9a38d] transition-transform duration-300 group-hover:scale-x-100" />
      </NavLink>
    </li>
  )
}

export default NavItem