import { ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";

function Coin() {
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const { coinId } = useParams();
  const apiKey = "CG-U6m4r6bZwqK1ww3xaA9271Em";

  // Fetch historical data
  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-cg-api-key": apiKey },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10`,
        options
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch coin data
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-cg-api-key": apiKey },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchCoinData(), fetchHistoricalData()]);
      setLoading(false); // Set loading to false when data is fetched
    };
    fetchData();
  }, [coinId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (coinData && historicalData) {
    return (
      <>
        <div className="my-6 mx-8">
          {/* Home button */}
          <Link to={"/"}>
            <button className="bg-purple-600 flex text-white py-2 px-4 items-center space-x-2 rounded-lg absolute lg:right-10 right-2 dark:bg-purple-800">
              <ArrowLeft />
              <p className="font-semibold">Go back</p>
            </button>
          </Link>
        </div>

        {/* Coin data */}
        <div className="bg-white mt-20 lg:mx-8 mx-2 p-4 rounded-lg items-center dark:bg-darktheme-secondary">
          <div className="flex flex-col items-center">
            <img src={coinData.image.large} alt={coinData.name} />
            <p>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </p>
            <a
              href={coinData.links.homepage}
              className="text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {coinData.links.homepage}
            </a>
          </div>

          {/* coinData grid */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 my-10">
            <div className="bg-primary dark:bg-darktheme-background p-4 rounded-lg text-center">
              <p className="text-lg font-semibold dark:text-darktheme-text">
                Current Price
              </p>
              <p className="text-xl md:text-2xl text-purple-600">
                ${coinData.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>
            <div className="bg-primary dark:bg-darktheme-background p-4 rounded-lg text-center dark:text-darktheme-text">
              <p className=" font-semibold">Market Cap</p>
              <p className="md:text-2xl">
                ${coinData.market_data.market_cap.usd.toLocaleString()}
              </p>
            </div>
            <div className="bg-primary dark:bg-darktheme-background p-4 rounded-lg text-center">
              <p className="text-lg font-semibold dark:text-darktheme-text">
                24h Change
              </p>
              <p
                className={`text-xl md:text-2xl ${
                  coinData.market_data.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
            <div className="bg-primary dark:bg-darktheme-background dark:text-darktheme-text p-4 rounded-lg text-center">
              <p className="text-lg font-semibold">Total Volume</p>
              <p className="text-xl md:text-2xl">
                ${coinData.market_data.total_volume.usd.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Historical data chart */}
          <div className="mt-4">
            <LineChart
              chartData={historicalData}
              className="dark:bg-darktheme-primary"
            />
          </div>
        </div>
      </>
    );
  }

  return <p>Failed to load data...</p>;
}

export default Coin;
