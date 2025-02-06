import React from "react";
import { NavMobileProps, links } from "../navbar/nav_types";
const NavMobile: React.FC<NavMobileProps> = ({ isMenuOpen }) => {
  return (
    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
      <ul className="px-4 py-2 bg-white">
        {links.map((link) => {
          return (
            <li key={link.name} className="nav-link">
              <a href={link.href} className="block py-2 text-gray-800 ">
                {link.name}
              </a>
            </li>
          );
        })}
        <li className="py-2">
          <button className="w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Sign in{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
