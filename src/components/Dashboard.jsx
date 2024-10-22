import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import FetchCoin from "./FetchCoin";
import { HandCoins } from "lucide-react";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currency, setCurrency] = useState("usd"); // State for selected currency

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on keyup
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value); // Update currency when an option is selected
  };

  return (
    <div className="my-6 mx-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold dark:text-darktheme-text">
          Dashboard
        </h1>
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

        <div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg dark:bg-purple-800 flex space-x-1">
            <HandCoins className="w-6 h-6" />
            <p className="font-semibold">USD</p>
          </button>
        </div>
      </div>

      {/* Pass search term and selected currency to FetchCoin component */}
      <FetchCoin searchTerm={searchTerm} currency={currency} />
    </div>
  );
}

export default Dashboard;
