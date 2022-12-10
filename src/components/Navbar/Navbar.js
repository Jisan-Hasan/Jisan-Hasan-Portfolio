import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
    FaBars,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/jh-logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="w-full h-[82px] fixed flex justify-between items-center px-4 text-gray-300 bg-[#0a192f]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={logo} alt="logo" className="w-[80px]" />
                </div>
                {/* desktop menu */}
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
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
                <div className="hidden md:flex fixed flex-col top-[35%] right-0">
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
                            <a
                                className="w-full text-gray-300 flex justify-between items-center"
                                href="https://www.facebook.com/jisan027/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook size={30} /> Facebook
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#6fc2b0]">
                            <a
                                className="w-full text-gray-300 flex justify-between items-center"
                                href="https://www.linkedin.com/in/jisan027/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={30} />
                                LinkedIn
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]">
                            <a
                                className="w-full text-gray-300 flex justify-between items-center"
                                href="https://github.com/Jisan-Hasan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={30} /> GitHub
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#565f69]">
                            <a
                                className="w-full text-gray-300 flex justify-between items-center"
                                href="https://drive.google.com/file/d/17w953yATcp5tAUkkhpujJnkhQqbhiRrk/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <BsFillPersonLinesFill size={30} /> Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
