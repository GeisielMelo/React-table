import { useState } from "react";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { ShortingTable } from "./components/ShortingTable";
import { Table } from "./components/Table";
import "./styles/table.css";

function App() {
  const [table, setTable] = useState(0);

  const handleNext = () => {
    table === 4 ? setTable(0) : setTable(table + 1)
  }
  const handlePrev = () => {
    table === 0 ? setTable(4) : setTable(table - 1)
  }

  return (
    <section>
      <div>
        <button onClick={() => handlePrev()} >{"<"}</button>
        <button onClick={() => handleNext()} >{">"}</button>
      </div>
      {
        table == 0 && <BasicTable />
        || table == 1 && <FilteringTable />
        || table == 2 && <PaginationTable />
        || table == 3 && <ShortingTable />
        || table == 4 && <Table />
      }
    </section>
  );
}

export default App;
