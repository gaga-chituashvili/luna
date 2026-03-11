import { useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import logo from "../../assets/Logo2.png";
import { ROUTES } from "../../routes/paths";
import NavItem from "./NavItem";
import { CartModal } from "../cart/CartModal";
import { useCartStore } from "../../store/cartStore";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === ROUTES.home) {
      window.location.reload();
    } else {
      navigate(ROUTES.home);
    }
  };
  return (
    <>
      <header className="w-full flex items-center justify-between px-16 py-6 shadow-lg bg-gradient-to-r from-[#2b1b16] via-[#1a0f0c] to-black text-white">
        <img
          src={logo}
          alt="Luna logo"
          className="h-8 cursor-pointer"
          onClick={handleLogoClick}
        />

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
        </div>
      </header>

      <CartModal open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};
