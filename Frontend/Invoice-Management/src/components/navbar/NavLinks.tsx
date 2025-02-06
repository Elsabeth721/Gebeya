import React from "react"
import {links} from '../navbar/nav_types'

const NavLinks:React.FC= () => {
   
  return (
    <ul className="flex space-x-6">
        {links.map((link) => {
            return (
                <li key={link.name} className="nav-link">
                    <a href={link.href} className="text-gray-800 hover:text-gray-900">{link.name}</a>
                </li>
            );
        })}
    </ul>
   
  );
};

export default NavLinks;
