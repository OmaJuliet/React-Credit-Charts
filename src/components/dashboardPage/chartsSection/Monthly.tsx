const Monthly = () => {
  const data = [
    { title: "The Agric Clients", value: "₦9,526" },
    { title: "The Micro Techs", value: "--2,491" },
    { title: "The Retail Techs", value: "₦2,491" },
    { title: "The Loyalists", value: "₦2,491" },
    { title: "The Corporates", value: "₦9,526" },
  ];

  return (
    <>
      <section className="py-2 w-full text-gray-700">
        <p className="text-2xl font-medium mb-4">AVERAGE MONTHLY BALANCE</p>
        <section className="flex flex-row">
          {data.map((item, index) => (
            <section
              key={index}
              className={`flex flex-col bg-white px-6 py-12 w-full ${index < data.length - 1 ? 'border-r-2 border-blue-500' : ''
                }`}
            >
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <h1 className="text-4xl font-bold mt-3">{item.value}</h1>
            </section>
          ))}
        </section>
      </section>
    </>
  )
}

export default Monthly