import TablePapyrus from "./components/Table";
import Products from "./mock/data";
import { TableHeader } from "./components/Table/types";

import "./App.css";
import InputSearch from "./components/InputSearch";

const headers: TableHeader[] = [
  { key: "id", value: "ID" },
  { key: "name", value: "Produto" },
  { key: "price", value: "Preço" },
  { key: "stock", value: "Estoque" },
];

function App() {
  function handleEdit(item: any) {
    console.log("item: ", item);
  }

  function handleChangeStatus(item: any) {
    console.log("item: ", item);
  }

  return (
    <div className="App">
      <div className="search">
        <InputSearch />
      </div>
      <div className="data">
        <TablePapyrus
          data={Products}
          headers={headers}
          enableActions
          onEdit={handleEdit}
          onChangeStatus={handleChangeStatus}
        />
      </div>
    </div>
  );
}

export default App;
