import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { projectColumns } from "./columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Project = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios
      .get(
        "https://lilama18.herokuapp.com/api/projects?page=1&limit=20" +
          "/todos",
        { withCredentials: true }
      )
      .then((response) => console.log(response.data));

    // fetch(
    //   "https://lilama18.herokuapp.com/api/projects?page=1&limit=20" + "/todos",
    //   { withCredentials: true }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Project
        <Link to="" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={projectColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Project;