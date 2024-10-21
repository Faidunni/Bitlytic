import { getCoin } from "../data";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function FetchCoin() {
  // fetch data
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  //   Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(8);

  const lastPage = currentPage * coinsPerPage;
  const firstPage = lastPage - coinsPerPage;
  const currentCoins = coins.slice(firstPage, lastPage);

  useEffect(() => {
    // Fetch the coin data when the component mounts
    const fetchData = async () => {
      try {
        const data = await getCoin(currentPage);
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  return (
    <div className="h-screen mt-20 bg-white rounded-2xl px-10 py-6">
      <div className="grid grid-cols-custom-layout gap-4  bg-primary px-6 py-3 rounded-lg font-semibold items-center border-b-[1px] border-primary">
        <p>#</p>
        <p>Token</p>
        <p>Price</p>
        <p>Market Cap</p>
        <p>Vol(24H)</p>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentCoins.map((coin, index) => (
            <div
              key={coin.id}
              className="grid grid-cols-custom-layout gap-4 px-6 py-3 rounded-lg items-center border-b-[1px] border-primary"
            >
              <p>{index + 1}</p>
              <div className="flex space-x-3">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8 rounded-full"
                />
                <p>{coin.name}</p>
              </div>

              <p>${coin.current_price.toLocaleString()}</p>
              <p>${coin.market_cap.toLocaleString()}</p>
              <p>${coin.total_volume.toLocaleString()}</p>
            </div>
          ))}
        </>
      )}
      {/* <Pagination totalPosts={coins.length} postsPerPage={postsPerPage} /> */}
    </div>
  );
}

export default FetchCoin;
