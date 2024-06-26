import { useState } from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

interface HamburgerProps {
  toggled: boolean;
  onClick: () => void;
}

interface MobileNavProps {
  toggled: boolean;
  navlist: {
    title: string;
    href: string;
  }[];
}

const navitems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

function Hamburger({ toggled, onClick }: HamburgerProps) {
  return (
    <div className="absolute z-50 space-y-0.5 cursor-pointer" onClick={onClick}>
      <span className="block h-0.5 w-4 bg-white-main rounded-sm" />
      <span
        className={`block h-0.5 w-4 bg-white-main rounded-sm transition-transform ${
          toggled ? "translate-x-0.5" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-4 bg-white-main rounded-sm transition-transform  ${
          toggled ? "translate-x-1" : ""
        }`}
      />
    </div>
  );
}

function MobileNav({ navlist, toggled }: MobileNavProps) {
  return (
    <nav
      className={`absolute top-0 left-0 flex items-center justify-center w-1/3 h-screen px-6 bg-black-nav backdrop-blur-lg transition-transform ${
        toggled ? "" : "-translate-x-[130%]"
      }`}
    >
      <ul className="flex flex-col gap-8">
        {navlist.map((nav) => (
          <li key={nav.href} className="group text-xs">
            <a href={nav.href}>
              {nav.title}
              <span className="text-lg pl-1 transition-opacity opacity-0 group-hover:opacity-100">
                •
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="fixed w-screen bg-black-nav/80 z-50 ">
      <header className="relative flex items-center justify-between backdrop-blur-lg py-4 px-6 lg:px-[120px] max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4">
          {!matches && (
            <Hamburger
              toggled={toggled}
              onClick={() => setToggled((prevToggled) => !prevToggled)}
            />
          )}
          <a href="/">
            <span className={`font-bold text-2xl ${!matches && "pl-8"}`}>
              carvey.
            </span>
          </a>
        </div>
        {!matches && <MobileNav toggled={toggled} navlist={navitems} />}
        {matches && (
          <nav>
            <ul className="flex gap-20">
              {navitems.map((nav) => (
                <li key={nav.href} className="group text-sm lg:text-base">
                  <a href={nav.href}>
                    {nav.title}
                    <span className="text-lg pl-1 transition-opacity opacity-0 group-hover:opacity-100">
                      •
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
