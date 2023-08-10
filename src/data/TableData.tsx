import Table from "../components/customersPage/Table";

const data = [
  {
    customerName: "John Doe",
    customerID: "1DNFEA3",
    category: "AGRIC CLIENT",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "ACTIVE",
  },
  {
    customerName: "John Doe",
    customerID: "1DNFEA3",
    category: "AGRIC CLIENT",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "ACTIVE",
  },
  {
    customerName: "Jane Doe",
    customerID: "1DNFDHF",
    category: "CORPORATES",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "DORMANT",
  },
  {
    customerName: "Dan Mike",
    customerID: "1DNFEA3",
    category: "LOYALISTS",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "DORMANT",
  },
  {
    customerName: "Dan Mike",
    customerID: "1DNFEA3",
    category: "RETAIL TECHS",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "DORMANT",
  },
  {
    customerName: "Mike Bell",
    customerID: "1DNFEA3",
    category: "MICRO TECH",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "ACTIVE",
  },
  {
    customerName: "John Bell",
    customerID: "1DNFEA3",
    category: "MICRO TECH",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "ACTIVE",
  },
  {
    customerName: "John Bell",
    customerID: "1DNFEA3",
    category: "AGRIC CLIENT",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "ACTIVE",
  },
  {
    customerName: "Joe Bryan",
    customerID: "1DNFEA3",
    category: "CORPORATES",
    loanPeriod: "NOV 2020 - MAY 2021",
    status: "DORMANT",
  },
];

function TableData() {
  return (
    <section className="container pb-8 px-2 mx-auto w-10/12">
      <Table data={data} />
    </section>
  );
}

export default TableData;
