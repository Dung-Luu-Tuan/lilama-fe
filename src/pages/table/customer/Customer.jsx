import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "./Columns";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";

const Customer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/customers?page=1&limit=200", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data))
        .catch(function (error) {
          handleUnauthenticated(error, navigate)
          notifyStore.setState({show: true, message: error.response?.data?.error})
        }).finally(() => setLoading(false));
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Khách hàng
        <Link to="/customer/customerUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        loading={loading}
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
