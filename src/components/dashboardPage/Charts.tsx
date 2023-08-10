import Age from "./chartsSection/Age";
import Monthly from "./chartsSection/Monthly";
import PieCharts from "./chartsSection/PieCharts";
import BarCharts from "./chartsSection/BarCharts";

export default function Charts() {
  return (
    <>
    {/* chart section */}
      <section className="container mx-auto flex justify-between">
        <PieCharts />
      </section>

      {/* average section */}
      <Age />

      {/* average monthly balance */}
      <Monthly />

      {/* Pliiar distribution section */}
      <BarCharts />
    </>
  );
}
