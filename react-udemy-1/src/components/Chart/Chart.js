import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.expenseChart.map(dataPoint => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointValues);
  console.log("🚀 ~ file: Chart.js ~ line 9 ~ Chart ~ totalMaximum", totalMaximum)

  return (
    <div className="chart">
      {props.expenseChart.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
