import { useState } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import logo from "../../assets/Logo2.png";
import { ROUTES } from "../../routes/paths";
import NavItem from "./NavItem";
import { CartModal } from "../cart/CartModal";
import { useCartStore } from "../../store/cartStore";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { useScrollDirection } from "../../api/api /hooks/useScrollDirection";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);

  const navigate = useNavigate();
  const visible = useScrollDirection();

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const handleLogoClick = () => {
    if (pathname === ROUTES.home) {
      window.location.reload();
    } else {
      navigate({ to: ROUTES.home });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 shadow-lg bg-gradient-to-r from-[#2b1b16] via-[#1a0f0c] to-black text-white transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Luna logo"
          className="h-8 cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm tracking-wide list-none">
            <NavItem to={ROUTES.home}>Home</NavItem>
            <NavItem to={ROUTES.ourStory}>Our Story</NavItem>
            <NavItem to={ROUTES.shop}>Shop</NavItem>
            <NavItem to={ROUTES.contact}>Contact</NavItem>
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <User className="w-5 h-5 cursor-pointer hover:opacity-70" />

          {/* Cart */}
          <div className="relative">
            <ShoppingCart
              className="w-5 h-5 cursor-pointer hover:opacity-70"
              onClick={() => setOpenCart(true)}
            />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#825444] text-xs rounded-full px-1.5 py-0.5">
                {cart.length}
              </span>
            )}
          </div>

          {/* Mobile Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition">
                <Menu className="h-6 w-6" />
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="end"
              className="w-56 mt-3 bg-[#111] border border-white/10 text-white rounded-xl p-6"
            >
              <nav className="flex flex-col items-center gap-5 text-base list-none">
                <NavItem to={ROUTES.home}>Home</NavItem>
                <NavItem to={ROUTES.ourStory}>Our Story</NavItem>
                <NavItem to={ROUTES.shop}>Shop</NavItem>
                <NavItem to={ROUTES.contact}>Contact</NavItem>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </header>

      <CartModal open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};
