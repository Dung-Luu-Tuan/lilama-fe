import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { costTypeColumns } from "./Columns";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";

const CostType = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/cost-types',
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

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm Chi phí mới
        <Link to="/costType/costTypeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        loading={loading}
        rows={data}
        columns={costTypeColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );

};
export default CostType;
