import { getCoin } from "../data";
import { useEffect, useState } from "react";

function FetchCoin({ searchTerm }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);

  const fetchCoin = async (page) => {
    setLoading(true);
    const data = await getCoin(page);
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoin(currentPage);
  }, [currentPage]);

  // Filter the coins based on the search term
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPageNumbers = () => {
    const pages = [];
    const totalPageButtons = 6;

    let startPage = Math.max(1, currentPage - Math.floor(totalPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + totalPageButtons - 1);

    if (endPage - startPage < totalPageButtons - 1) {
      startPage = Math.max(1, endPage - totalPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mt-6 px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? "bg-purple-600 text-white dark:bg-purple-800"
              : "bg-gray-200 dark:bg-darktheme-accent"
          }`}
        >
          {i}
        </button>
      );
    }

    return <div className="flex justify-center m-4">{pages}</div>;
  };

  return (
    <div className="h-screen mt-10 bg-white rounded-2xl px-10 py-6 dark:bg-darktheme-primary dark:text-darktheme-text">
      <div className="grid grid-cols-custom-layout gap-4 bg-primary px-6 py-3 rounded-lg font-semibold items-center border-b-[1px] border-primary dark:bg-darktheme-background">
        <p>#</p>
        <p>Token</p>
        <p>Price</p>
        <p>Market Cap</p>
        <p>Vol(24H)</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredCoins.map((coin, index) => (
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
        ))
      )}
      {renderPageNumbers()}
    </div>
  );
}

export default FetchCoin;
