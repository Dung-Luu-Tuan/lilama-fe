import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./Columns";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import { handleUnauthenticated } from "../../../utils/auth";
=======
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";
>>>>>>> e9c5031e0504351f57d4ff79f8419e3c884166ea

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/users?page=1&limit=200", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data))
<<<<<<< HEAD
      .catch(function (error) {
        handleUnauthenticated(error, navigate);
      })
      .finally(() => setLoading(false));
=======
        .catch(function (error) {
          handleUnauthenticated(error, navigate)
          notifyStore.setState({show: true, message: error.response?.data?.error})
        }).finally(() => setLoading(false));
>>>>>>> e9c5031e0504351f57d4ff79f8419e3c884166ea
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
<<<<<<< HEAD
        Thêm người dùng mới
=======
        Tài khoản
>>>>>>> e9c5031e0504351f57d4ff79f8419e3c884166ea
        <Link to="/user/userCreate" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        loading={loading}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default User;
