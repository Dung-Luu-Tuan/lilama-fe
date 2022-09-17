import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { executorColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Execution = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/executors?page=1&limit=20", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thực hiện
        <Link to="/executor/executorUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={executorColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );
};

export default Execution;
