const Age = () => {
  return (
    <>
      <section className="container mx-auto flex justify-between py-10">
        <section className="bg-blue-800 w-1/2 px-6 py-8 text-white">
          <section>
            <p className="text-2xl font-medium">Average Age</p>
            <p>(in years)</p>
          </section>
          <section className="flex flex-row mt-4">
            <section className="flex flex-col w-full">
              <p className="text-sm">The Agric Clients</p>
              <h1 className="mt-2 text-3xl font-semibold">62</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Micro Techs</p>
              <h1 className="mt-2 text-3xl font-semibold">71</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Retail tech</p>
              <h1 className="mt-2 text-3xl font-semibold">43</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Loyalists</p>
              <h1 className="mt-2 text-3xl font-semibold">50</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Corporates</p>
              <h1 className="mt-2 text-3xl font-semibold">27</h1>
            </section>
          </section>
        </section>

        <section className="bg-blue-400 w-1/2 ml-6 px-4 py-8 text-white">
          <section>
            <p className="text-2xl font-medium">Average Transactional Value</p>
            <p>(credit)</p>
          </section>
          <section className="flex flex-row mt-4">
            <section className="flex flex-col w-full">
              <p className="text-sm">The Agric Clients</p>
              <h1 className="mt-1 py-2 text-2xl font-medium">₦6,875</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Micro Techs</p>
              <h1 className="mt-1 py-2 text-2xl font-medium">₦2,491</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Retail Techs</p>
              <h1 className="mt-1 py-2 text-2xl font-medium">₦1,689</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Loyalists</p>
              <h1 className="mt-1 py-2 text-2xl font-medium">₦300,816</h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-sm">The Corporates</p>
              <h1 className="mt-1 py-2 text-2xl font-medium">₦20,880,542</h1>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Age