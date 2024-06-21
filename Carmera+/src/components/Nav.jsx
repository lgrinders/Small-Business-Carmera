import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ScrollToAnchor } from "./ScrollToAnchor";

export function Nav() {
  const [hamburgerShow, setHamburgerShow] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToAnchor />
      <div
        id="home"
        className="sticky top-0 z-30 flex w-full items-center justify-between bg-white px-8 py-8 font-rubik shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] md:px-16 xl:absolute xl:px-24"
      >
        <div className="flex items-center justify-center xl:w-1/3">
          <div className="text-4xl font-black">
            <div className="inline text-pagani-orange">
              <a href="#home">CAR</a>
            </div>
            <Link to="/">
              MERA<div className="inline text-orange-400">+</div>
            </Link>
          </div>
        </div>
        <div className="hidden w-1/3 xl:block">
          <ul className="flex items-center justify-center gap-5 font-bold">
            <li>
              <Link to="/" className="duration-200 hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#estimate"
                className="duration-200 hover:text-orange-400"
              >
                Estimate
              </Link>
            </li>
            <li>
              <Link
                to="/#locations"
                className="duration-200 hover:text-orange-400"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="duration-200 hover:text-orange-400"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/#whyus" className="duration-200 hover:text-orange-400">
                Why
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="duration-200 hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 items-center justify-center font-semibold xl:w-1/3 xl:gap-5">
          <div className="hidden md:block">
            <Link
              to="/SignIn"
              className="hidden duration-200 hover:text-orange-400 xl:block"
            >
              Sign in
            </Link>
          </div>
          <div className="hidden xl:block xl:h-[50px] xl:w-[120px]">
            <Link to="/register">
              <button className="hidden h-full w-full bg-pagani-orange font-semibold text-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-200 hover:bg-orange-400 xl:block ">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="relative z-50 flex justify-end xl:hidden">
          {hamburgerShow ? (
            <GrClose
              size={30}
              onClick={() => setHamburgerShow(!hamburgerShow)}
              className="text-white"
            />
          ) : (
            <FaBars
              size={30}
              onClick={() => setHamburgerShow(!hamburgerShow)}
            />
          )}
        </div>
        {hamburgerShow ? (
          <div className="fixed right-0 top-0 flex h-full w-80 translate-x-0 items-center justify-center transition-all duration-500">
            <ul className="flex h-full w-full flex-col justify-evenly bg-pagani-orange text-center text-2xl font-bold text-white">
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/#home">Home</Link>
              </li>
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/#estimate">Estimate</Link>
              </li>
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/#locations">Locations</Link>
              </li>
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/portfolio" onClick={() => scrollUp()}>
                  Portfolio
                </Link>
              </li>
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/#whyus">Why</Link>
              </li>
              <li className="flex h-full items-center justify-center hover:bg-orange-400">
                <Link to="/contact" onClick={() => scrollUp()}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="translate-all fixed right-0 top-0 h-full translate-x-full bg-white transition-all"></div>
        )}
      </div>
    </>
  );
}
