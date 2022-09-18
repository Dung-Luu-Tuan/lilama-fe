import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { fcBudgetColumns } from "./Columns";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";

const FCBudget = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/budgets?page=1&limit=200',
      headers: { Authorization: window.localStorage.getItem("token") }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
        handleUnauthenticated(error, navigate)
        notifyStore.setState({show: true, message: error.response?.data?.error})
      }).finally(() => setLoading(false));
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
        loading={loading}
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
