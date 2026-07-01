import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-leaf-950 border-t border-leaf-900/40 text-leaf-100/80 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Column */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-2xl text-white font-bold tracking-wide">
            Daun Jati <span className="font-cursive text-honey-400 font-normal">Cafe</span>
          </h3>
          <p className="text-xs leading-relaxed text-leaf-200/80">
            A quiet sanctuary Binjai where time slows down between sips and soft conversations. Enjoy our artisan brews, delicious local dishes, and cozy corners.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-3 md:items-center">
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-honey-400 font-bold transition-colors" : "hover:text-white transition-colors"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className={({ isActive }) => isActive ? "text-honey-400 font-bold transition-colors" : "hover:text-white transition-colors"}>
                  Menu List
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-honey-400 font-bold transition-colors" : "hover:text-white transition-colors"}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className={({ isActive }) => isActive ? "text-honey-400 font-bold transition-colors" : "hover:text-white transition-colors"}>
                  Order Online
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Cafe Info Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">Opening Hours</h4>
          <p className="text-xs text-leaf-200/80">
            Everyday: 10:00 AM - 11:00 PM
          </p>
          <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mt-2 mb-1">Contact</h4>
          <p className="text-xs text-leaf-200/80">
            +62 822-9412-2418
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-leaf-900/40 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-leaf-300/60 font-bold">
        <p>&copy; {new Date().getFullYear()} Daun Jati Cafe. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="https://instagram.com/daunjatibinjai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://tiktok.com/@DaunJatiidn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
          <a href="https://wa.me/6282294122418" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
