import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400, uvs: 2000, },
  { name: 'Page B', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
];

const Pillar = () => {
  return (
    <>
      <section className="pb-20">
        <section className="pt-6">
          <h1 className="text-xl font-medium text-gray-700">PILLAR DISTRIBUTION</h1>
          <section className="flex flex-row mt-3 ml-2">
            <section className="flex flex-row items-center ml-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
              <p className="text-sm">Social Protection (SP)</p>
            </section>
            <section className="flex flex-row items-center ml-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
              <p className="text-sm">Education and Leadership Development (Education)</p>
            </section>
            <section className="flex flex-row items-center ml-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
              <p className="text-sm">Energy & Environment (EE)</p>
            </section>
            <section className="flex flex-row items-center ml-3">
              <div className="w-3 h-3 bg-blue-800 rounded-full mr-1"></div>
              <p className="text-sm">Enterprise development & financial inclusion (E+E)</p>
            </section>
            <section className="flex flex-row items-center ml-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <p className="text-sm">Food & Agriculture (F&A)</p>
            </section>
          </section>
        </section>
        <section className="container mx-auto pt-4 pb-6 flex flex-row justify-between">
          <section className="bg-white">
            <div className="bg-blue-800 flex justify-center text-xl text-white my-3 mx-4 px-4 py-3">
              <h1 className="font-semibold">The Agric Clients</h1>
            </div>
            <BarChart width={420} height={300} data={data} className="">
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={10} />
            </BarChart>
          </section>

          <section className="bg-white">
            <div className="bg-blue-800 flex justify-center text-xl text-white my-3 mx-4 px-4 py-3">
              <h1 className="font-semibold">The Micro Techs</h1>
            </div>
            <BarChart width={420} height={300} data={data} className="">
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={10} />
            </BarChart>
          </section>

          <section className="bg-white">
            <div className="bg-blue-800 flex justify-center text-xl text-white my-3 mx-4 px-4 py-3">
              <h1 className="font-semibold">The Corporates</h1>
            </div>
            <BarChart width={420} height={300} data={data} className="">
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={10} />
            </BarChart>
          </section>
        </section>

        <section className="container mx-auto py-8 flex flex-row justify-between">
          <section className="bg-white">
            <div className="bg-blue-800 flex justify-center text-xl text-white my-3 mx-4 px-4 py-3">
              <h1 className="font-semibold">The Retail Techs</h1>
            </div>
            <BarChart width={600} height={300} data={data} className="">
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={10} />
            </BarChart>
          </section>

          <section className="bg-white">
            <div className="bg-blue-800 flex justify-center text-xl text-white my-3 mx-4 px-4 py-3">
              <h1 className="font-semibold">The Loyalists</h1>
            </div>
            <BarChart width={600} height={300} data={data} className="">
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="uv" fill="#8884d8" barSize={10} />
            </BarChart>
          </section>
        </section>
      </section>
    </>
  )

}

export default Pillar