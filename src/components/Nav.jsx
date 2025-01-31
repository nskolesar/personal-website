import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">
                    Nathan Kolesar
                </div>
                <div className="space-x-6">
                    <a href="#about" className="hover:text-gray-400">
                        About Me
                    </a>
                    <a href="#education" className="hover:text-gray-400">
                        Education
                    </a>
                    <a href="#experience" className="hover:text-gray-400">
                        Experience
                    </a>
                    <a href="#project" className="hover:text-gray-400">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
