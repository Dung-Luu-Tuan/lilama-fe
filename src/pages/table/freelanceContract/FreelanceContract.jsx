import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { freelanceContractColumns } from "./Columns";
import { Link } from "react-router-dom";
import axios from "axios";

const FreelanceContract = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://lilama18.herokuapp.com/api/freelance-contracts?page=1&limit=20",
        {
          headers: { Authorization: window.localStorage.getItem("token") },
        }
      )
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm HDTC mới
        <Link to="/freelance-contract/freelanceContractUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={freelanceContractColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );
};

export default FreelanceContract;
