import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
  { name: 'The Retail Techs', value: 228, fill: '#4169E1' },
  { name: 'The Micro Techs', value: 180, fill: 'blue' },
  { name: 'The Corporates', value: 70, fill: '#7B68EE' },
  { name: 'Agric Clients', value: 400, fill: '#3CB371' },
  { name: 'The Loyalists', value: 600, fill: '#FFA07A' },
];

const PieCharts = () => {
  return (
    <>
      <section className="container mx-auto flex justify-between">
        <section className="w-1/2 bg-white shadow-md">
          <h1 className="p-4 text-2xl text-gray-800 mt-2 ml-2 font-semibold">Total Population</h1>
          <section className="flex flex-row">
            <PieChart width={600} height={500}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx={200}
                cy={200}
                outerRadius={150}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
            {/* <section className="mr-4">
              <p>Some texts</p>
            </section> */}
          </section>
        </section>

        <section className="w-1/2 ml-8 bg-white shadow-md">
          <h1 className="p-4 text-2xl text-gray-800 mt-2 ml-2 font-semibold">Active Clients
            <span className="text-lg font-medium text-gray-700 ml-1">(percentage)</span>
          </h1>
          <PieChart width={600} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={150}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </section>

      </section></>
  )
}

export default PieCharts