import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoImg, routes } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <Link
            aria-label="Home"
            smooth={true}
            to="/"
            className="cursor-pointer"
          >
            <img
              src={logoImg}
              width="150"
              height="100"
              className="h-[3rem] md:h-[3.75rem] scale-125 object-contain"
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {routes
              .filter((option) => option.name !== "Contact Us")
              .map((option) =>
                option.name === "Services" ? (
                  <div
                    key={option.path}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={`${option.path}`}
                      className={`text-sm link ${
                        option.path === pathname
                          ? "text-primary font-medium"
                          : ""
                      } hover:text-primary`}
                    >
                      {option.name}
                    </Link>

                    <div
                      className={`absolute top-full left-0 mt-5 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen
                          ? "max-h-56 opacity-100"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      {option.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={option.path}
                    to={`${option.path}`}
                    className={`text-sm link ${
                      option.path === pathname ? "text-primary font-medium" : ""
                    } hover:text-primary`}
                  >
                    {option.name}
                  </Link>
                )
              )}

            <Link
              to="/contact-us"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10 bg-white"
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
            {routes.map(({ name, path, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-black font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
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

export default WebsiteHeader;
