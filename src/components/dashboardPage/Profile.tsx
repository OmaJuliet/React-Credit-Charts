import React, { useState } from 'react';
import { Accordion } from './cust/Accordion';
import { BiDollar, BiWallet } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";

const Profile = () => {
  const data = [
    { title: "Total Customers", value: "1.11 million", icon: <CiUser /> },
    { title: "Total Transactional value", value: "124 Billion", icon: <BiDollar /> },
    { title: "Average Monthly Balance", value: "₦200,526", icon: <BiWallet /> },
  ];

  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <section className="pt-4 px-2 w-full">
        <p className="text-xl text-gray-700 font-semibold mb-2">OVERVIEW</p>
        <section className="flex flex-row">
        {data.map((item, index) => (
          <section key={index} className={`flex flex-col bg-white p-8 w-full ${index < data.length - 1 ? 'border-r-2 border-blue-500' : '' }`}>
            <span className="text-blue-500 text-3xl" >{item.icon}</span>
            <h1 className="text-xl font-medium text-gray-600">{item.title}</h1>
            <h1 className="text-3xl font-bold mt-2">{item.value}</h1>
          </section>
          ))}
        </section>
      </section>

      <section className="w-full py-12">
        <p className="text-xl font-semibold mb-4">PROFILE</p>
        <div className={`flex flex-col items-center justify-center bg-white border-2 border-blue-500 pt-2 mb-8 ${clicked !== null ? 'rounded-xl' : ''}`}>
          <div className="relative top-30 box-shadow-accordion w-full mx-6">
            {Accordion.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`flex items-center justify-between bg-white border-b-2 border-blue-500 py-5 px-6 text-black w-full text-left cursor-pointer ${clicked === index ? 'rounded-t-xl' : ''}`} onClick={() => toggle(index)}>
                  <h1 className="text-xl font-medium">{item.question}</h1>
                  <span className="p-1 mr-1.5rem text-black border-2 border-black rounded">
                    {clicked === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {clicked === index && (
                  <div className={`bg-blue-100 border-l-8 border-blue-500 text-lg w-full flex flex-col justify-center p-6 ${index === Accordion.length - 1 ? 'rounded-b-xl' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}

export default Profile