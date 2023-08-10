import { AiOutlineCloseSquare } from "react-icons/ai";
import { GoCheckbox } from "react-icons/go";


type TableRow = {
  customerName: string;
  customerID: string;
  category: string;
  loanPeriod: string;
  status: string;
};

type TableProps = {
  data: TableRow[];
};


const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      <section className="pt-8 pb-6">
        <table className="table-auto w-full border-collapse">
          <thead className="mb-2">
            <tr className="text-gray-800">
              <th className="py-3 px-4 text-lg font-medium text-left uppercase">Customer Name</th>
              <th className="py-3 px-4 text-lg font-medium text-left uppercase">Customer ID</th>
              <th className="py-3 px-4 text-lg font-medium text-left uppercase">Category</th>
              <th className="py-3 px-4 text-lg font-medium text-left uppercase">Loan Period</th>
              <th className="py-3 px-4 text-lg font-medium text-left uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="my-2">
            {data.map((item, index) => (
              <tr key={index} className="bg-white mb-4">
                <td className="p-4">{item.customerName}</td>
                <td className="p-4 text-lg">{item.customerID}</td>
                <td className={`p-4 ${getCategoryStyles(item.category)}`}>{item.category}</td>
                <td className="p-4 text-lg">{item.loanPeriod}</td>
                <td className={`p-4 text-lg flex items-center ${getStatusStyles(item.status).textColorClass}`}>
                  {getStatusStyles(item.status).iconComponent}
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* customers page pagination */}
      <section className="flex justify-center items-center bg-white py-1">
        <p className="px-3 py-2 text-2xl text-gray-400 font-semibold cursor-pointer">
          &lt;&lt;
        </p>
        <p className="px-3 py-2 text-2xl text-gray-400 font-semibold cursor-pointer">
          &lt;
        </p>
        <p className="px-3 py-2 text-blue-500 font-semibold text-xl cursor-pointer">
          1
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          2
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          3
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          4
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          5
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          ...
        </p>
        <p className="px-3 py-2 text-gray-400 font-semibold text-xl cursor-pointer">
          10
        </p>
        <p className="px-3 py-2 font-semibold text-2xl cursor-pointer">
          &gt;
        </p>
        <p className="px-3 py-2 font-semibold text-2xl cursor-pointer">
          &gt;&gt;
        </p>
      </section>
    </>
  );
};

// logic to set background color and text color for each category of client
function getCategoryStyles(category: string) {
  switch (category) {
    case "AGRIC CLIENT":
      return "text-green-800 bg-green-100";
    case "CORPORATES":
      return "text-blue-700 bg-blue-100";
    case "LOYALISTS":
      return "text-yellow-800 bg-yellow-100";
    case "RETAIL TECHS":
      return "text-purple-700 bg-purple-100";
    case "MICRO TECH":
      return "text-indigo-700 bg-indigo-100";
    default:
      return "";
  }
}

// logic to set text color of statuses and icon
function getStatusStyles(status: string) {
  switch (status) {
    case "ACTIVE":
      return { textColorClass: "text-green-600", iconComponent: <GoCheckbox className="inline-block mr-3 text-2xl" /> };
    case "DORMANT":
      return { textColorClass: "text-red-600", iconComponent: <AiOutlineCloseSquare className="inline-block mr-3 text-2xl" /> };
    default:
      return { textColorClass: "", iconComponent: null };
  }
}

export default Table;
