import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function LineChart({ chartData }) {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Price"]];
    if (chartData?.prices) {
      chartData.prices.map((price) => {
        dataCopy.push([
          `${new Date(price[0]).toLocaleDateString().slice(0, -5)}`,
          price[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [chartData]);

  const options = {
    title: "Cryptocurrency Price History",
    hAxis: { title: "Date" },
    vAxis: { title: "Price (USD)" },
    legend: { position: "bottom" },
  };

  return (
    <div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="LineChart"
        data={data}
        options={options}
        legendToggle
      />
    </div>
  );
}

export default LineChart;
