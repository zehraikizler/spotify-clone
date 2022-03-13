import React from "react";
import { Icon } from "./../../Icons";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "h-10 gap-x-4 flex items-center text-sm font-semibold bg-active text-white rounded px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white rounded px-4"
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "h-10 gap-x-4 flex items-center text-sm font-semibold bg-active text-white rounded px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white rounded px-4"
            }
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive
                ? "h-10 gap-x-4 flex items-center text-sm font-semibold bg-active text-white rounded px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white rounded px-4"
            }
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığım
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
