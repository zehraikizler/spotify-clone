import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "Icons";

export default function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs hover:underline font-semibold uppercase text-link tracking-wider"
            }
            to={more}
          >
            HEPSİNİ GÖR
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active group"}
          >
            <div className="pt-[100%] relative">
              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button className="w-10 h-10 rounded-full bg-primary group-hover:flex group-focus:flex hidden absolute bottom-2 right-2 items-center justify-center">
                <Icon name="play" />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
