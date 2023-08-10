import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

type PickerProps = {
    onOptionChange: (selectedOption: string) => void;
};

const Picker: React.FC<PickerProps> = ({ onOptionChange }) => {
    //Dropdown options logic
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onOptionChange(option);
        setShowOptions(false);
    };

    const handleOptionToggle = () => {
        setShowOptions(!showOptions);
    };

    //Date selection logic
    const [showForm, setShowForm] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
    };

    return (
        <>
            <section className="container py-4 px-2 mx-auto w-10/12">
                <section className="flex flex-row justify-between">
                    <div className="relative w-80 mt-4">
                        <div
                            className={`w-full mr-2 text-black bg-white py-3 pl-4 pr-6 text-base cursor-pointer ${showOptions && "bg-white"}`}
                            onClick={handleOptionToggle}
                        >
                            {selectedOption === "option1" ? "Segmentation Analysis" : "Customer's Profile"}
                        </div>
                        <div className="absolute right-0 top-1 m-2 pl-8 pr-2">
                            <MdKeyboardArrowDown className="text-gray-500 cursor-pointer text-2xl font-semibold" onClick={handleOptionToggle} />
                        </div>
                        {showOptions && (
                            <div className="absolute z-10 top-14 right-0 w-full bg-white p-4 rounded shadow-md">
                                <div className="mt-2">
                                    <div
                                        className={`cursor-pointer p-2 ${selectedOption === "option1" ? "text-blue-500" : "text-black"}`}
                                        onClick={() => handleOptionClick("option1")}
                                    >
                                        <p className="text-xl font-medium">Segmentation Analysis</p>
                                    </div>
                                    <div
                                        className={`cursor-pointer p-2 ${selectedOption === "option2" ? "text-blue-500" : "text-black"}`}
                                        onClick={() => handleOptionClick("option2")}
                                    >
                                        <p className="text-xl font-medium">Customers Profile</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative w-72 mt-4">
                        <div className="w-full mr-2 text-black bg-white py-2 pl-4 pr-6 border-2 border-blue-400 text-lg text-gray-800 cursor-pointer"> 
                          Loan Data Period 
                        </div>
                        <div className="absolute right-0 top-1 m-2 pl-8 pr-2">
                            <FaCalendar className="text-blue-500 cursor-pointer" onClick={handleFormToggle} />
                        </div>
                        {showForm && (
                            <div className="absolute z-10 top-14 right-0 bg-white p-4 rounded-lg shadow-md">
                                <p>Insert date range</p>
                                <form onSubmit={handleSubmit} className="w-full">
                                    <div className="mb-4">
                                        <label htmlFor="startDate" className="mr-2 text-sm text-gray-600">
                                            Start date:
                                        </label>
                                        <input
                                            type="text"
                                            id="startDate"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="bg-blue-100 border-2 border-blue-400 p-2 rounded w-full outline-none"
                                            placeholder="Input date"
                                            required
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="endDate" className="mr-2 text-sm text-gray-600">
                                            End Date:
                                        </label>
                                        <input
                                            type="text"
                                            id="endDate"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="bg-blue-100 border-2 border-blue-400 p-2 rounded w-full outline-none"
                                            placeholder="Input date"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-4 bg-blue-100 text-sm text-blue-400 py-1 px-4 rounded"
                                    >
                                        Done
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Picker