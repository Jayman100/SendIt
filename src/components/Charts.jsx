import BarChart from "./BarChart";
import LineChart from "./LineChart";

function Charts() {
  return (
    <div className="flex gap-10">
      <LineChart />
      <BarChart />
    </div>
  );
}

export default Charts;
