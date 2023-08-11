import { FaCog } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-12 py-6 bg-blue-500 text-white sticky w-full top-0 z-50 shadow-lg">
        <div className="flex justify-center items-center relative">
          <p className="font-semibold text-2xl">CREDIT CHART</p>
        </div>

        <div className="mr-20">
          <FaCog className="text-4xl font-semibold cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;