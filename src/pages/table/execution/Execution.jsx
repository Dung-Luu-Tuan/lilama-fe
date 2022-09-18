import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { executionColumns } from "./Columns";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { handleUnauthenticated } from "../../../utils/auth";

const Execution = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/executions?page=1&limit=20", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data))
      .catch(function (error) {
        handleUnauthenticated(error, navigate);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thực hiện
        <Link to="/execution/executionUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        loading={loading}
        rows={data}
        columns={executionColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Execution;
