import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bindingPackageColumns, costTypeColumns, managerColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Manager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/managers?page=1&limit=20',
      headers: { Authorization: window.localStorage.getItem("token") }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm CBDA mới
        <Link to="/manager/managerUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={managerColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );

};
export default Manager;
