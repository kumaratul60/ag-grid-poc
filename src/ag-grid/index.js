import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ReusableGridComponent = ({
  columnDefs,
  rowData,
  pagination,
  ...otherProps
}) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={pagination}
        {...otherProps}
      />
    </div>
  );
};

ReusableGridComponent.propTypes = {
  columnDefs: PropTypes.array.isRequired,
  rowData: PropTypes.array.isRequired,
  pagination: PropTypes.bool.isRequired,
  // Add more PropTypes for other props as needed
};

export default ReusableGridComponent;
