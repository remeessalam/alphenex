import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { logoImg } from "../../constant";
import { X, Info } from "lucide-react";
import { Helmet } from "react-helmet";
import { TiInfoLarge } from "react-icons/ti";

const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-tertiary/60 backdrop-blur-md z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <div className="flex items-center gap-4">
            <Link
              aria-label="Home"
              smooth={true}
              to="banner"
              className="cursor-pointer"
            >
              <img
                width="150"
                height="100"
                src={logoImg}
                className="h-[3rem] md:h-[3.75rem] scale-125 object-contain"
                alt="logo"
              />
            </Link>
          </div>

          <div className="lg:flex items-center gap-10 hidden">
            {options
              .filter((option) => option.path !== "contact")
              .map((option) => (
                <Link
                  to={`${option.path}`}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Link>
              ))}
            <Link
              href="/"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Link>
            {/* Info Button */}
            <div className="relative">
              <a
                href="/"
                // smooth={true}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-white"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                aria-label="Information"
              >
                <TiInfoLarge className="text-xl" />
              </a>

              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute left-1/2 transform -translate-x-3/4 mt-4 p-2 bg-white text-tertiary rounded shadow-lg text-xs w-64 z-10">
                  Click to visit our main pages to check out other services
                </div>
              )}
            </div>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-black text-[2.2rem]"
            >
              <X size={35} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map(({ name, path }, id) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-black font-medium transition-colors duration-300 link"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {name}
              </Link>
            ))}
            {/* Info Button */}
            {/* <div className="relative">
              <a
                href="/"
                // smooth={true}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-black cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-white"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                aria-label="Information"
              >
                <TiInfoLarge className="text-xl text-black" />
              </a>

              {showTooltip && (
                <div className="absolute left-1/2 transform -translate-x-3/4 mt-4 p-2 bg-white text-tertiary rounded shadow-lg text-xs w-64 z-10">
                  Click to visit our main pages to check out other services
                </div>
              )}
            </div> */}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
          aria-label="toggle drawer"
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
