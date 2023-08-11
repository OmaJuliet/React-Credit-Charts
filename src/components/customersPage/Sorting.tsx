import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        onClose();
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (isOpen && event.target) {
                const modalContent = document.querySelector(".modal-content");
                if (modalContent && !modalContent.contains(event.target as Node)) {
                    onClose();
                }
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    const data = [
        { label: "The Agric Clients" },
        { label: "The Micro Techs" },
        { label: "The Retail tech" },
        { label: "The Loyalists" },
        { label: "The Corporates" },
    ];


    return isOpen ? (
        <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <section className="bg-white px-10 py-10 w-7/12 modal-content">
                <h2 className="text-base font-medium mb-3">Select Category</h2>
                <form onSubmit={handleSubmit}>
                    <section className="pb-12 flex flex-row">
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <input
                                    type="checkbox"
                                    className={`w-5 h-5 bg-blue-500 p-2 ${index !== 0 ? 'ml-6' : ''
                                        } cursor-pointer`}
                                />
                                <label className="text-gray-700 text-sm ml-2 font-medium">
                                    {item.label}
                                </label>
                            </React.Fragment>
                        ))}
                    </section>

                    <h3 className="text-base font-medium">Select Loan Period</h3>
                    <section className="flex flex-row mb-10">
                        <section>
                            <label className="text-gray-500 text-sm mb-1">
                                Start Date
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border-2 border-blue-300 focus:outline-none focus:border-blue-500"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                placeholder="mm-yyyy"
                            />
                        </section>
                        <section className="ml-8">
                            <label className="text-gray-500 text-sm mb-1">
                                End Date
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border-2 border-blue-300 focus:outline-none focus:border-blue-500"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                placeholder="mm-yyyy"
                            />
                        </section>
                    </section>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2"
                    >
                        Apply filter
                    </button>
                </form>
            </section>
        </section>
    ) : null;
};


const Sorting: React.FC = () => {
    //Logic for the form segment customer pop up
    const [showForm, setShowForm] = useState(false);
    const [customerID, setCustomerID] = useState("");

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Customer Id:", customerID);
    };

    //logic for the sort/filter modal
    const [modalOpen, setModalOpen] = useState(false);

    const handleSortBoxClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <section className="container pt-2 px-2 mx-auto w-10/12">
                <h2 className="mb-2 mt-3 text-2xl font-semibold">All Customers</h2>
                <section className="flex flex-row justify-between">
                    <section className="flex flex-wrap mt-4 lg:mb-4 mb-8 relative">
                        <section className="flex">
                            <section onClick={handleFormToggle} className="w-80 mr-2 bg-white text-black flex flex-row shadow-md py-3 px-6 cursor-pointer text-lg">
                                <FaUser className="mt-1 text-blue-500" />
                                <p className="text-gray-400 ml-3">Segment Customer</p>
                            </section>
                            <section className="ml-4 flex justify-center text-base bg-blue-100 text-blue-500 py-3 px-6">
                                <p>Clear</p>
                            </section>
                        </section>

                        {showForm && (
                            <section className="absolute z-10 top-16 left-0 bg-white border border-gray-300 p-4 rounded shadow-md">
                                <form className="w-72" onSubmit={handleSubmit}>
                                    <section className="mb-4">
                                        <label htmlFor="customerID" className="mr-2 text-base font-medium mb-1">
                                            Customer ID:
                                        </label>
                                        <input
                                            type="text"
                                            id="customerID"
                                            value={customerID}
                                            onChange={(e) => setCustomerID(e.target.value)}
                                            className="bg-white border-2 border-blue-400 p-2 text-gray-800 rounded w-full outline-none"
                                            placeholder="1DNFEA3"
                                            required
                                        />
                                    </section>
                                    <section className="">
                                        <p className="text-base text-black font-medium">Select</p>
                                        <section className="flex flex-row">
                                            <section>
                                                <input type="radio" />
                                                <label htmlFor="endDate" className="ml-1 text-sm text-gray-600">
                                                    Existing
                                                </label>
                                            </section>
                                            <section className="ml-10">
                                                <input type="radio" />
                                                <label htmlFor="endDate" className="ml-1 text-sm text-gray-600">
                                                    New
                                                </label>
                                            </section>
                                        </section>
                                    </section>
                                    <button
                                        type="submit"
                                        className="mt-8 bg-blue-500 text-base text-white w-full py-2 px-4 rounded"
                                    >
                                        Search
                                    </button>
                                </form>
                            </section>
                        )}
                    </section>


                    <section className="w-20">
                        <div
                            className="flex justify-center cursor-pointer bg-blue-500 text-white px-2 py-3"
                            onClick={handleSortBoxClick}
                        >
                            <LuArrowLeftRight className="mt-1 text-lg" />
                            <p className="text-base ml-1">Sort</p>
                        </div>
                        <Modal isOpen={modalOpen} onClose={closeModal} />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Sorting