import axios from "axios";

const apiKey = "CG-U6m4r6bZwqK1ww3xaA9271Em";

export const getCoin = async (page = 1) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        headers: {
          "x-cg-api-key": apiKey,
        },
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 8,
          page: page,
        },
      }
    );
    console.log(response.data);
    return response.data; // Returns the fetched data
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return []; // Return an empty array on error
  }
};
