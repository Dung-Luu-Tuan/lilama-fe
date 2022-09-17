import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { acceptanceColumns } from "./Columns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

const Acceptance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/acceptances?page=1&limit=20',
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
      acceptance_value: data[i]?.acceptance_value,
      description: data[i]?.description,
      created_at: moment(data[i]?.created_at).utcOffset(7).format("DD/MM/YYYY"),
      created_by: data[i]?.created_by,
      execution_value: data[i]?.execution_value,
      id: data[i]?.id,
      new_distributed_value: data[i]?.new_distributed_value,
      remaining_value: data[i]?.remaining_value,
      invoice_date: moment(data[i]?.invoice_date).utcOffset(7).format("DD/MM/YYYY"),
    })
  }

  console.log(result);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Nghiệm thu
        <Link to="/acceptance/acceptanceUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={result}
        columns={acceptanceColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Acceptance;
