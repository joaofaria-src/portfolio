import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const socials = [
  { icon: faGithub, url: "https://github.com/joaofaria-src" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/joaofariawork/" },
];

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) setScrollDirection("down");
      else if (currentScrollY < prevScrollY) setScrollDirection("up");
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    if (scrollDirection === "up") headerRef.current.style.transform = "translateY(0)";
    else if (scrollDirection === "down") headerRef.current.style.transform = "translateY(-200px)";
  }, [scrollDirection]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={headerRef} className="header">
      <div className="header-content">
        <nav className="socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </nav>
        <nav className="nav-links">
          <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
          <a href="/#contactme" onClick={handleClick("contactme")}>Contact Me</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;