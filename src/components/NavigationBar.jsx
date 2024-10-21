import { useState } from "react";
import logo from "../assets/logo.png";
import DarkMode from "./DarkMode";
import {
  LayoutDashboard,
  Activity,
  ChartNoAxesCombined,
  ArrowRightLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

// navigation bar component
const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    // <LayoutDashboard />
  },
  {
    name: "Activity",
    icon: Activity,
    // <Activity />
  },
  {
    name: "Analytics",
    icon: ChartNoAxesCombined,
    // <ChartNoAxesCombined />
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
    // <ArrowRightLeft />
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
  const [activeLink, setActiveLink] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.header
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={variants}
      className={
        "py-12 flex flex-col border border-r-2 w-1/5 h-screen relative" +
        (isExpanded ? " px-10" : " px-[16px] duration-500")
      }
    >
      {/* sidebar icon */}
      <div
        className="w-6 h-6 bg-purple-600 rounded-full absolute top-14 -right-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight className=" text-white font-extrabold px-1" />
      </div>

      {/* logo */}
      <div className="flex items-center ">
        <img src={logo} alt="Bitlytic logo" className="w-[40px]" />
        <span className={isExpanded ? "block" : "hidden"}> Bitlytic</span>
      </div>

      {/* navigation link */}
      <ul className="mt-10 flex-col space-y-8 ">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={
              "flex items-center mt-4 cursor-pointer space-x-2" +
              (activeLink === index
                ? " bg-purple-600 text-white rounded-lg font-semibold "
                : "") +
              (isExpanded ? " p-2" : "p-1")
            }
            onClick={() => setActiveLink(index)}
          >
            <link.icon className="w-6 h-6" />
            <span className={isExpanded ? "block" : "hidden"}>{link.name}</span>
          </li>
        ))}
      </ul>

      {/* dark mode */}
      <DarkMode />
    </motion.header>
  );
};

export default NavigationBar;
