import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, SunMoon } from "lucide-react";

import {
  LayoutDashboard,
  Activity,
  ChartNoAxesCombined,
  ArrowRightLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/Bitlytic.png";
import icon from "../assets/Bitlytic-icon.png";

// navigation bar component
const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Activity,
  },
  {
    name: "Analytics",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
];

// framer motion
const variants = {
  expanded: {
    width: "20%",
  },
  collapsed: {
    width: "5%",
  },
};

const NavigationBar = () => {
  // framer motion state
  const [activeLink, setActiveLink] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  // dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <motion.header
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={variants}
      className={
        "py-12 lg:flex lg:flex-col hidden border border-r-1 w-1/5  relative dark:text-darktheme-text dark:bg-darktheme-background" +
        (isExpanded ? " px-10" : " px-[16px] duration-500")
      }
    >
      {/* sidebar icon */}
      <div
        className="w-6 h-6 bg-purple-600 rounded-full absolute top-14 -right-3 dark:bg-purple-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight className=" text-white font-extrabold px-1" />
      </div>

      {/* logo */}
      <div className="flex items-center">
        {isExpanded ? (
          <img src={logo} alt="Bitlytic logo" className="w-[120px]" />
        ) : (
          <img src={icon} alt="Bitlytic logo" className="w-[35px]" />
        )}
      </div>

      {/* desktop view */}
      {/* navigation links */}
      <ul className="mt-10 flex-col space-y-8">
        {navLinks.map((link, index) => (
          <Link to={"/"} key={index}>
            <li
              className={
                "flex items-center mt-4 cursor-pointer space-x-2" +
                (activeLink === index
                  ? " bg-purple-600 text-white rounded-lg font-semibold dark:bg-purple-800"
                  : "") +
                (isExpanded ? " p-2" : "p-3 duration-500")
              }
              onClick={() => setActiveLink(index)}
            >
              <link.icon className="w-6 h-6" />
              <span className={isExpanded ? "block" : "hidden"}>
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>

      {/* dark mode */}
      <button
        className={
          "flex items-center space-x-2 mt-5 cursor-pointer hover:bg-primary dark:hover:text-black rounded-lg hover:font-semibold " +
          (isExpanded ? "p-2" : "p-1")
        }
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <SunMoon className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
        <p className={isExpanded ? "block" : "hidden"}>Dark Mode</p>
      </button>
    </motion.header>
  );
};

export default NavigationBar;
