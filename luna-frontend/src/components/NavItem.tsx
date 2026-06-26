import { Link } from "@tanstack/react-router";
type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <li>
      <Link
        to={to}
        className="relative pb-1 transition text-white/80 hover:text-white"
      >
        {children}

        <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-[#c9a38d] transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    </li>
  );
};

export default NavItem;
