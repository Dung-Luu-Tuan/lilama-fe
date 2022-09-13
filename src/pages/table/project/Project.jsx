import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { projectColumns } from "./columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lilama18.herokuapp.com/api/projects?page=1&limit=20", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((response) => setData(response.data.data));
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">Edit</div>
            <div className="deleteButton">Disable</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm dự án mới
        <Link to="/project/projectUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={projectColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row.code}
      />
    </div>
  );
};

export default Project;
