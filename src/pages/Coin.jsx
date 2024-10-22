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
    return <p>Loading...</p>;
  }

  if (coinData && historicalData) {
    return (
      <>
        <div className="my-6 mx-8 ">
          {/* Home button */}
          <Link to={"/"}>
            <button className="bg-purple-600 flex text-white py-2 px-4 items-center space-x-2 rounded-lg absolute right-10 dark:bg-purple-800">
              <ArrowLeft />
              <p className="font-semibold">Go back</p>
            </button>
          </Link>
        </div>

        {/* Coin data */}
        <div className="bg-white mt-20 mx-8 p-4 rounded-lg items-center dark:bg-darktheme-secondary">
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
