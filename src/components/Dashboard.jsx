import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import FetchCoin from "./FetchCoin";
import { HandCoins } from "lucide-react";
import { Moon } from "lucide-react";
import { SunMoon } from "lucide-react";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currency, setCurrency] = useState("usd"); // State for selected currency

  // form input change handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on keyup
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  // dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // dark mode effect
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
    <div className="my-6 lg:mx-8 mx-2">
      <div className="flex justify-between space-x-4 lg:space-x-0">
        <h2 className="text-2xl font-semibold dark:text-darktheme-text">
          Dashboard
        </h2>
        <form
          className="relative flex items-center w-[45%]"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            className="w-full px-[50px] py-2 rounded-lg border-[1px] border-primary dark:border-darktheme-accent dark:bg-darktheme-primary outline-secondary"
            placeholder="Enter Name, Symbol or Address"
            value={searchTerm}
            onChange={handleSearchChange} // Trigger filtering on keyup
          />
          <button className="absolute mx-6">
            <FaSearch />
          </button>
        </form>

        <div className="lg:hidden block">
          <button
            className={
              "flex items-center  cursor-pointer hover:bg-purple-800 rounded-lg font-semibold bg-purple-600 p-2 text-white dark:bg-purple-800 dark:text-darktheme-text"
            }
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <SunMoon className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="lg:block hidden">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg dark:bg-purple-800 flex space-x-1">
            <HandCoins className="w-6 h-6" />
            <p className="font-semibold">USD</p>
          </button>
        </div>
      </div>

      {/* Dark mode button for mobile*/}

      {/* Pass search term and selected currency to FetchCoin component */}
      <FetchCoin searchTerm={searchTerm} currency={currency} />
    </div>
  );
}

export default Dashboard;
