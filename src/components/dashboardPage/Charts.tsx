import Age from "./chartsSection/Age";
import Monthly from "./chartsSection/Monthly";
import PieCharts from "./chartsSection/PieCharts";
import BarCharts from "./chartsSection/BarCharts";

export default function Charts() {
  return (
    <>
      <PieCharts />
      <Age />
      <Monthly />
      <BarCharts />
    </>
  );
}
