import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/jh-logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="w-full h-[82px] fixed flex justify-between items-center px-4 text-gray-300 bg-[#0a192f]">
            <div>
                <img src={logo} alt="logo" className="w-[60px]" />
            </div>
            {/* desktop menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            {/* Hamburger */}
            <div onClick={() => setNav(!nav)} className="md:hidden z-10">
                {nav ? <FaTimes /> : <FaBars />}
            </div>
            {/* Mobile view */}
            <ul
                className={
                    nav
                        ? "absolute w-full h-screen flex flex-col justify-center items-center top-0 left-0 bg-[#0a192f]"
                        : "hidden"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* social icons */}
            <div className="hidden"></div>
        </div>
    );
};

export default Navbar;
