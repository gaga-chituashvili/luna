import lunalogo from "../../assets/Logo2.png"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../routes/paths"
import { Youtube, Instagram, Facebook, Linkedin,Copyright } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-[#1a0f0a] to-[#2b1a12] text-white  px-12 py-14">
      
      <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
       
        <div className="flex flex-col gap-4">
          <img src={lunalogo} alt="Luna Logo" className="w-28" />
          <p className="text-2xl text-gray-300">
            Crafted with care. <br /> Enjoyed in calm.
          </p>
        </div>

       
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <NavLink className="text-[#D9D6D6] text-xl" to={ROUTES.home}>Home</NavLink>
            <NavLink className="text-[#D9D6D6] text-xl" to={ROUTES.ourStory}>Our Story</NavLink>
            <NavLink className="text-[#D9D6D6] text-xl" to={ROUTES.shop}>Shop</NavLink>
            <NavLink className="text-[#D9D6D6] text-xl" to={ROUTES.contact}>Contact</NavLink>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <NavLink className="text-[#D9D6D6] text-xl" to="mailto:hello@luna.coffee">hello@luna.coffee</NavLink>
            <NavLink className="text-[#D9D6D6] text-xl" to="tel:+995555123456">+995 555 123 456</NavLink>
            <span className="text-[#D9D6D6] text-xl">Tbilisi, Georgia</span>
          </ul>
        </div>

        
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-4 font-semibold">Info</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <NavLink className="text-[#D9D6D6] text-xl" to="">Shipping & Returns</NavLink>
              <NavLink className="text-[#D9D6D6] text-xl" to="">Privacy Policy</NavLink>
              <NavLink className="text-[#D9D6D6] text-xl" to="">Terms & Conditions</NavLink>
            </ul>
          </div>

          <div className="flex gap-3">
            {[Youtube, Instagram, Facebook, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

      </section>

      <div className="mt-12 text-center text-sm text-gray-400">
         <Copyright size={14} className="inline mb-1 mr-1" />
         {new Date().getFullYear()} Luna Coffee. All rights reserved.
      </div>
    </footer>
  )
}
