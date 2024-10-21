import { FaSearch } from "react-icons/fa";
import FetchCoin from "./FetchCoin";

function Dashboard() {
  return (
    <div className="my-6 mx-8">
      <div className="flex justify-between">
        <form className="relative flex items-center w-[45%]">
          <input
            type="text"
            className="w-full px-[50px] py-2 rounded-lg  outline-gray-300"
            placeholder="Enter Name, Symbol or Address"
          />
          <button className="absolute mx-6">
            <FaSearch />
          </button>
        </form>

        <div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Add Token
          </button>
        </div>
      </div>

      {/* coin table */}
      <FetchCoin />
    </div>
  );
}

export default Dashboard;
