/** @format */

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Menus } from "../Data/utils";
import DesktopMenu from "./Header/DesktopMenu";
import MobMenu from "./Header/MobMenu";

const Navbar = () => {
  return (
    <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#0F214D] z-50">
      <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
        <div>
          <a href="/home" className="flex items-center gap-x-2">
            <img
              src="https://i.ibb.co/d4GwD8s6/logo-remove.png"
              alt="Logo"
              className="w-10 rounded-full"
            />
            <h1 className="text-[18px] font-bold text-[#ecd9d9]">
            SR.<span className="text-[#00D47E]">CLEAN</span>
          </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-x-1 lg:flex-center hidden">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className="flex-center gap-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-400 hover:text-white transition"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
