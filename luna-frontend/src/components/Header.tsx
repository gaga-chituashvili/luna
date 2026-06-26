import { useState } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import logo from "@/assets/Logo2.png";
import { ROUTES } from "@/lib/paths";
import NavItem from "@/components/NavItem";
import { CartModal } from "@/features/cart/CartModal";
import { useCartStore } from "@/store/cartStore";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuthStore } from "@/store/authStore";
import { Wrapper } from "@/components/Wrapper";

export const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const visible = useScrollDirection();
  const user = useAuthStore((state) => state.user);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const handleLogoClick = () => {
    if (pathname === ROUTES.home) window.location.reload();
    else navigate({ to: ROUTES.home });
  };

  const handleUserClick = () => {
    if (user) navigate({ to: ROUTES.profile });
    else navigate({ to: ROUTES.register });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 shadow-lg bg-gradient-to-r from-[#2b1b16] via-[#1a0f0c] to-black text-white transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <Wrapper className="flex items-center justify-between py-6">
          <img src={logo} alt="Luna logo" className="h-8 cursor-pointer" onClick={handleLogoClick} />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 text-sm tracking-wide list-none">
              <NavItem to={ROUTES.home}>Home</NavItem>
              <NavItem to={ROUTES.ourStory}>Our Story</NavItem>
              <NavItem to={ROUTES.shop}>Shop</NavItem>
              <NavItem to={ROUTES.contact}>Contact</NavItem>
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <div className="relative flex items-center">
              {!openSearch && <Search className="w-5 h-5 cursor-pointer hover:opacity-70" onClick={() => setOpenSearch(true)} />}
              {openSearch && (
                <input autoFocus type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { navigate({ to: ROUTES.shop, search: { q: query } }); setOpenSearch(false); } }}
                  placeholder="Search coffee..."
                  className="w-44 bg-transparent text-sm text-white placeholder:text-gray-400 border-b border-[#825444]/60 focus:border-[#c48a6a] transition-colors duration-200 outline-none px-2 py-1 ml-1"
                />
              )}
            </div>

            <div className="relative cursor-pointer" onClick={handleUserClick}>
              <User className="w-5 h-5 hover:opacity-70" />
              {user && <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-[#c87941]" />}
            </div>

            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-70" onClick={() => setOpenCart(true)} />
              {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-[#825444] text-xs rounded-full px-1.5 py-0.5">{cart.length}</span>}
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition">
                  <Menu className="h-6 w-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 mt-3 bg-[#111] border border-white/10 text-white rounded-xl p-6">
                <nav className="flex flex-col items-center gap-5 text-base list-none">
                  <NavItem to={ROUTES.home}>Home</NavItem>
                  <NavItem to={ROUTES.ourStory}>Our Story</NavItem>
                  <NavItem to={ROUTES.shop}>Shop</NavItem>
                  <NavItem to={ROUTES.contact}>Contact</NavItem>
                </nav>
              </PopoverContent>
            </Popover>
          </div>
        </Wrapper>
      </header>

      <CartModal open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};
