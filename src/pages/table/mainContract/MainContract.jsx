import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { mainContractColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContract = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://lilama18.herokuapp.com/api/main-contracts?page=1&limit=20",
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
        Thêm hợp đồng chính mới
        <Link to="/main-contract/mainContractUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={mainContractColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default MainContract;
