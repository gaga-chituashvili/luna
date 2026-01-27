
import { Search, User, ShoppingCart } from 'lucide-react'
import logo from '../../assets/Logo2.png'
import { ROUTES } from '../../routes/paths'
import NavItem from './NavItem'

export const Header = () => {
  return (
    <header className=" w-full
        flex items-center justify-between
        px-16 py-6
        shadow-lg
        bg-gradient-to-r
      from-[#2b1b16]
      via-[#1a0f0c]
      to-black
      text-white
        ">
        <img src={logo} alt="Luna logo" className="h-8 cursor-pointer" />
        <nav>
          <ul className="flex items-center gap-10 text-sm tracking-wide">
            <NavItem to={ROUTES.home}>Home</NavItem>
            <NavItem to={ROUTES.ourStory}>Our Story</NavItem>
            <NavItem to={ROUTES.shop}>Shop</NavItem>
            <NavItem to={ROUTES.contact}>Contact</NavItem>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-70" />
        </div>
     
    </header>
  )
}
