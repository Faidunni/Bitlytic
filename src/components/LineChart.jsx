import { useEffect, useState } from "react";
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
    titleTextStyle: {
      //   color: "#7e22ce", // Purple-600 color for title text
      fontSize: 20, // Adjust the title font size
      bold: true,
      textAlign: "center",
    },
    hAxis: {
      title: "Date",
      titleTextStyle: {
        // color: "#7e22ce", // Purple-600 color for axis title
        fontSize: 14,
        bold: true,
      },
      textStyle: {
        // color: "#7e22ce", // Purple-600 color for axis labels
        fontSize: 12,
      },
      gridlines: {
        color: "#f0f0f0", // Light gray gridlines
      },
    },
    vAxis: {
      title: "Price (USD)",
      titleTextStyle: {
        // color: "#f0f0f0", // Purple-600 color for axis title
        fontSize: 14,
        bold: true,
      },
      textStyle: {
        // color: "#f0f0f0", // Purple-600 color for axis labels
        fontSize: 12,
      },
      gridlines: {
        color: "#f0f0f0", // Light gray gridlines
      },
    },
    legend: {
      position: "bottom", // Position of legend
      textStyle: {
        // Purple-600 color for legend text
        fontSize: 12, // Legend font size
      },
    },
    // Line color set to purple-600
    colors: ["#7e22ce"],
    titlePosition: "center", // Center the title
    backgroundColor: "transparent", // Transparent background for dark mode compatibility
    chartArea: {
      backgroundColor: "transparent", // Light background for the chart area
      width: "80%",
      height: "70%",
    },
  };

  return (
    <Chart
      width={"100%"}
      height={"400px"}
      chartType="LineChart"
      data={data}
      options={options}
      legendToggle
      className="dark:text-darktheme-text" // Dark mode background
    />
  );
}

export default LineChart;
