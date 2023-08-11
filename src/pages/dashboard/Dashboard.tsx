import { useState } from "react";
import Picker from "../../components/dashboardPage/Picker";
import Sidebar from "../../components/Sidebar";
import Charts from "../../components/dashboardPage/Charts";
import Profile from "../../components/dashboardPage/Profile";
import Header from "../../components/Header";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <>
      <Sidebar />
      <Header />
      <section className={`container px-2 mx-auto w-10/12 pt-4 ${selectedOption === "option1" ? "block" : "hidden"}`}>
        <h2 className="mb-1 mt-3 text-2xl font-semibold">Welcome to your Dashboard</h2>
      </section>
      <Picker onOptionChange={setSelectedOption} />
      <section className="container pt-4 px-2 mx-auto w-10/12">
        <section className="flex flex-row flex-wrap">
          {selectedOption === "option1" ? <Charts /> : <Profile />}
        </section>
      </section>

    </>
  );
};

export default Dashboard;
