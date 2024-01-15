import React, { useState, useEffect } from "react";
import ReusableGridComponent from "./ag-grid";

const ExampleAG = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the provided API
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((data) => {
        setGridData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const columnDefs = [
    { headerName: "Mission", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Launch Date", field: "date" },
    { headerName: "Location", field: "location" },
    { headerName: "Price", field: "price" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Successful", field: "successful" },
  ];

  const pagination = true;

  return (
    <div>
      <h2>Space Mission Data</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ReusableGridComponent
          columnDefs={columnDefs}
          rowData={gridData}
          pagination={pagination}
        />
      )}
    </div>
  );
};

export default ExampleAG;
