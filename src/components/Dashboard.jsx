import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import FetchCoin from "./FetchCoin";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on keyup
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <div className="my-6 mx-8 ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
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
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg dark:bg-purple-800">
            Add Token
          </button>
        </div>
      </div>

      {/* Pass search term to FetchCoin component */}
      <FetchCoin searchTerm={searchTerm} />
    </div>
  );
}

export default Dashboard;
