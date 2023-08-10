const Comparsion = () => {
  return (
    <>
      <section className="container pb-8 px-2 mx-auto w-10/12">
        <h2 className="mb-1 mt-3 text-xl text-gray-700 font-medium">BANK PROFILE COMPARISON</h2>
        <div className="pt-2 mb-12">
          <table className="table-auto w-full bg-white border-collapse">
            <thead className="border-b-2 border-blue-500">
              <tr className="text-gray-700">
                <th className="py-3 px-4 text-xl font-medium text-left uppercase">Customers</th>
                <th className="py-3 px-4 text-xl font-medium text-left uppercase">TOTAL NUMBER</th>
                <th className="py-3 px-4 text-xl font-medium text-left uppercase">TRANSACTION VALUE</th>
                <th className="py-3 px-4 text-xl font-medium text-left uppercase">LOANS TAKEN</th>
                <th className="py-3 px-4 text-xl font-medium text-left uppercase">LOANS PERFORMANCE</th>
              </tr>
            </thead>
            <tbody className="my-2">
              <tr>
                <td className="p-4">EGF BANK CUSTOMERS</td>
                <td className="p-4 text-lg">1,113,040 Customers</td>
                <td className="p-4 text-lg">KES 124 Bn</td>
                <td className="p-4 text-lg">200,000 Ksh</td>
                <td className="py-2 px-10 text-lg">
                  <ul className="list-disc">
                    <li>94% Normal</li>
                    <li>1.85% Watch</li>
                    <li>4.17% NPL</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-4">NON EGF BANK CUSTOMERS</td>
                <td className="p-4 text-lg">7,903,091 Customers</td>
                <td className="p-4 text-lg">KES 943Bn</td>
                <td className="p-4 text-lg">
                  <p>2.22M Loans Token</p>
                  <p>Total Value of 1.18Tn</p>
                </td>
                <td className="py-2 px-10 text-lg">
                  <ul className="list-disc">
                    <li>92.84% Normal</li>
                    <li>1.58% Watch</li>
                    <li>5.58% NPL</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Comparsion