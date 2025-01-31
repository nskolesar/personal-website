import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">
                    Nathan Kolesar
                </div>
                <div className="space-x-6">
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        About Me
                    </Link>
                    <Link
                        to="education"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Education
                    </Link>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Experience
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
