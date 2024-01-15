import ExampleAG from "./ExampleAG";
import ReusableGridComponent from "./ag-grid";
import { columnDefs, rowData } from "./dammyData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ExampleAG />
      {/* <ReusableGridComponent columnDefs={columnDefs} rowData={rowData} /> */}
    </div>
  );
}
