// import { useRef, useEffect } from 'react';
// import * as echarts from 'echarts';
// import 'echarts/lib/chart/pie';

// const PieChart: React.FC = () => {
//     const chartContainerRef = useRef<HTMLDivElement | null>(null);
//     const myChartRef = useRef<echarts.ECharts | null>(null);

//     useEffect(() => {
//         if (!chartContainerRef.current) return;

//         myChartRef.current = echarts.init(chartContainerRef.current);

//         const option = {
//             title: {
//                 text: 'Total Population',
//                 left: 'left'
//             },
//             tooltip: {
//                 trigger: 'item'
//             },
//             legend: {
//                 orient: 'vertical',
//                 right: 'right'
//             },
//             series: [
//                 {
//                     name: 'Access From',
//                     type: 'pie',
//                     radius: 50,
//                     center: ['25%', '50%'],
//                     data: [
//                         { value: 1048, name: 'Search Engine' },
//                         { value: 735, name: 'Direct' },
//                         { value: 580, name: 'Email' },
//                         { value: 484, name: 'Union Ads' },
//                         { value: 300, name: 'Video Ads' }
//                     ],
//                     emphasis: {
//                         itemStyle: {
//                             shadowBlur: 10,
//                             shadowOffsetX: 0,
//                             shadowColor: 'rgba(0, 0, 0, 0.5)'
//                         }
//                     },
//                     datasetIndex: 1
//                   },
//                   {
//                     name: 'Access From',
//                     type: 'pie',
//                     radius: 50,
//                     center: ['75%', '50%'],
//                     data: [
//                         { value: 1048, name: 'Search Engine' },
//                         { value: 735, name: 'Direct' },
//                         { value: 580, name: 'Email' },
//                         { value: 484, name: 'Union Ads' },
//                         { value: 300, name: 'Video Ads' }
//                     ],
//                     emphasis: {
//                         itemStyle: {
//                             shadowBlur: 10,
//                             shadowOffsetX: 0,
//                             shadowColor: 'rgba(0, 0, 0, 0.5)'
//                         }
//                     },
//                     datasetIndex: 2
//                   }
//             ]
//         };


//         if (option && typeof option === 'object') {
//             myChartRef.current.setOption(option);
//         }

//         const resizeHandler = () => {
//             if (myChartRef.current) {
//                 myChartRef.current.resize();
//             }
//         };

//         window.addEventListener('resize', resizeHandler);
//         resizeHandler();

//         return () => {
//             window.removeEventListener('resize', resizeHandler);
//             if (myChartRef.current) {
//                 myChartRef.current.dispose();
//                 myChartRef.current = null;
//             }
//         };
//     }, []);

//     return (
//         <>
//             <div id="chart-container" ref={chartContainerRef}
//                 className="h-screen w-full bg-white"
//             >
//             </div>
//         </>
//     );
// };

// export default PieChart;



import { PieChart, Pie, Tooltip } from 'recharts';

// const data01 = [
//   { name: 'Group A', value: 228 },
//   { name: 'Group B', value: 70 },
//   { name: 'Group C', value: 180 },
//   { name: 'Group D', value: 400 },
//   { name: 'Group E', value: 600 },
// ];

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
                // outerRadius={80}
                outerRadius={150}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
            <section>
              <p>Some texts</p>
            </section>
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