import React, { useCallback, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function navbar() {
  const [activeState, setactiveState] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const MenuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.screenY < 10);
      console.log(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);
  const stateChange = useCallback(
    (sectionId) => {
      setactiveState(sectionId);
      setOpen(false);
    },
    [setactiveState, setOpen]
  );
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transperent"
      }`}
    >
      {/** logo */}
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg cursor-pointer font-semibold ">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Akash Gupta</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/** Desktop Menu Items */}

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {MenuItems.map((item, key) => {
            return (
              <li
                key={item.id}
                className={`cursor-pointer hover:bg-gray-400 hover:text-[#8245ec] p-2 rounded-full text-base ${
                  activeState === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <a href={`#${item.id}`} onClick={() => stateChange(item.id)}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/akash-cq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://leetcode.com/u/akash_Cq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-gupta-06b0a6280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/** Mobile Menu curisal */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-[#8245ec] text-3xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-black/2 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {MenuItems.map((item, key) => {
              return (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#8245ec] ${
                    activeState === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                    <a href={`#${item.id}`} onClick={() => stateChange(item.id)}>
                    {item.label}
                  </a>
                </li>
              );
            })}
            <div className="flex space-x-4">
              <a
                href="https://github.com/akash-cq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://leetcode.com/u/akash_Cq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <SiLeetcode size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-gupta-06b0a6280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
