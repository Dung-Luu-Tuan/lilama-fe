import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { fcBudgetColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FCBudget = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/budgets?page=1&limit=20',
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
  

  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      freelance_contract: data[i]?.freelance_contract?.code,
      cost_type: data[i]?.cost_type?.code,
      value: data[i]?.value,
      description: data[i]?.description,
      id: data[i]?.id
    })
  }

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Chi phí HDCT
        <Link to="/fcBudget/fcBudgetUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={result}
        columns={fcBudgetColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default FCBudget;
