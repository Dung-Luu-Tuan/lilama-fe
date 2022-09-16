import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/customers?page=1&limit=20", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm khách hàng mới
        <Link to="/project/projectUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={customerColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );
};

export default Customer;