import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { executorColumns } from "./Columns";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";

const Execution = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/executors?page=1&limit=200", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data))
        .catch(function (error) {
          handleUnauthenticated(error, navigate)
          notifyStore.setState({show: true, message: error.response?.data?.error})
        }).finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Đơn vị thực thi
        <Link to="/executor/executorUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        loading={loading}
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
