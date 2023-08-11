import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Comparsion from "../../components/customersPage/Comparsion"
import Sorting from "../../components/customersPage/Sorting"
import TableData from "../../data/TableData"

const Customer = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Sorting />
      <TableData />
      <Comparsion />
    </>
  )
}

export default Customer