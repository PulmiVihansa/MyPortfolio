"use client";

import { NavLinks } from "../constant/constant";
import React, { useEffect, useState } from "react";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  /* ================= NAV BACKGROUND ON SCROLL ================= */
  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ================= FIXED SCROLL SPY ================= */
  useEffect(() => {
    const sections = NavLinks
      .map(link => document.getElementById(link.url.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // ⭐ KEY FIX
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ================= SMOOTH SCROLL ================= */
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight = window.innerHeight * 0.12;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 h-[10vh] md:h-[12vh] transition-all duration-300
        ${navBg ? "bg-[#262525]/80 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center h-full w-[90%] mx-auto">

        {/* ================= LOGO ================= */}
        <div className="flex items-center space-x-2 pl-3 md:pl-6 lg:pl-20">
          <div className="w-9 h-9 rounded-full flex items-center justify-center
            bg-[linear-gradient(135deg,#6D4AA8,#8B6FD6,#B79CED)]
            shadow-[0_0_15px_rgba(139,111,214,0.45)]
          ">
            <FaCode className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
            Pulmi Vihansa
          </h1>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-10 flex-1 justify-center">
          {NavLinks.map((link) => {
            const sectionId = link.url.replace("#", "");

            return (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleSmoothScroll(e, link.url)}
                className="relative group whitespace-nowrap"
              >
                <span
                  className={`text-xs lg:text-sm xl:text-base font-medium transition-colors duration-300
                    ${
                      activeSection === sectionId
                        ? "text-[#8B6FD6]"
                        : "text-white group-hover:text-[#8B6FD6]"
                    }
                  `}
                >
                  {link.Label}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                    bg-[linear-gradient(90deg,#6D4AA8,#8B6FD6,#B79CED)]
                    transition-transform duration-300 origin-left
                    ${
                      activeSection === sectionId
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="hidden md:flex items-center space-x-3 pr-3 md:pr-6 lg:pr-20">
          <a
            href="https://github.com/pulli27"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B6FD6]
              transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/pulmi-vihansa-4450872a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B6FD6]
              transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* ================= MOBILE ICON ================= */}
        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
