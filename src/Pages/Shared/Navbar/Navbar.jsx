import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "../../../../public/brokers-imgs/image 32.png";
import { Link } from "react-router-dom";
import Container from "../../../Components/Ui/Container/Container";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 pb-6 md:pb-0">
      <ul className="bg-[#FEFEFF] border-2 border-[#000000] shadow-lg rounded-[40px] py-5 px-[22px] md:flex gap-4 md:gap-[27px] lg:gap-[27px] text-base md:text-lg lg:text-[21px] font-medium items-center">
        <li className="font-medium text-[16px] leading-[19.2px]">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            About us
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[19.2px]">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Projects
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[19.2px]">
          <Link
            to="agents"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Agents
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[19.2px]">
          <Link
            to="services"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Services
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[19.2px]">
          <Link
            to="listings"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Listings
          </Link>
        </li>
        <li className="flex justify-center items-center text-5xl md:text-[24px] md:ml-5 text-black md:py-0">
          <CiSearch />
        </li>
      </ul>

      <span className="font-medium text-[16px] leading-[120%]">
        Other services
      </span>
      <button className="py-1 px-3 md:px-8 lg:px-8 md:py-3 lg:py-3 text-sm md:text-[16px] lg:text-[16px] border-2 font- md:leading-[19.2px] rounded-[64px]">
        Contact us
      </button>
    </div>
  );

  return (
    <Container>
      <div className="navbar rounded-[70px] ps-[40px] pr-[24px] bg-[#FAFAFA] py-[35px] text-[16px] mt-[13px] mb-[32px] text-[#1F1F1F]">
        <div className="w-full flex items-center justify-between lg:justify-start">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden relative">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="absolute z-50 p-3 shadow-green-light menu bg-[#1a301a] shadow-md rounded-lg mt-2">
                {navMenu}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="w-full flex  justify-center items-center content-between">
            <div className="flex flex-col text-center md:mr-[112px] lg:mr-[112px]">
              <img src={logo} alt="logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-auto shrink-0">{navMenu}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
