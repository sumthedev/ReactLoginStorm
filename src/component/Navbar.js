import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="py-4">
        <div className="container flex items-center justify-between">
          <ul className="flex space-x-20">
            <li>
              <a href="#home" className="text-black hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#feature" className="text-white hover:text-blue-500">
                Feature
              </a>
            </li>
            <li>
              <a
                href="#developer"
                className="text-black hidden hover:text-blue-500"
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
