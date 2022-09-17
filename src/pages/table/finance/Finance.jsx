import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { financeColumns } from "./Columns";
import { Link } from "react-router-dom";
import axios from "axios";

const financeListData = {
  "data": [
    {
      "created_at": "2022-09-11T14:32:47.622Z",
      "created_by": "admin1",
      "updated_at": "2022-09-11T14:32:47.622Z",
      "id": "631df18f5cb45fd40357c124",
      "main_contract": "ABC",
      "mc_value": 13,
      "contract_distributed_value": 15,
      "contract_execution_value": 16,
      "contract_retention_value": 17,
      "contract_year": "20-09-2022",
      "contract_rate": "50%",
      "contract_final_value": 18,
      "contract_net_profit": "ABC",
      "settlement_distributed_value": 19,
      "settlement_execution_value": 20,
      "settlement_retention_value": 21,
      "settlement_year": "20-09-2022",
      "settlement_rate": "60%",
      "settlement_final_value": 22,
      "settlement_net_profit": "ABC",
      "need_review": true,
    },
  ],
  "page": 1,
  "limit": 20,
  "total": 2,
};

const Finance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/finances?page=1&limit=20',
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
      main_contract: data[i]?.main_contract?.code,
      mc_value: data[i]?.mc_value,
      contract_distributed_value: data[i]?.contract_distributed_value,
      contract_execution_value: data[i]?.contract_execution_value,
      contract_retention_value: data[i]?.contract_retention_value,
      contract_year: data[i]?.contract_year,
      contract_rate: data[i]?.contract_rate,
      contract_final_value: data[i]?.contract_final_value,
      contract_net_profit: data[i]?.contract_net_profit,
      settlement_distributed_value: data[i]?.settlement_distributed_value,
      settlement_execution_value: data[i]?.settlement_execution_value,
      settlement_retention_value: data[i]?.settlement_retention_value,
      settlement_year: data[i]?.settlement_year,
      settlement_rate: data[i]?.settlement_rate,
      settlement_final_value: data[i]?.settlement_final_value,
      settlement_net_profit: data[i]?.settlement_net_profit,
      created_at: data[i]?.created_at,
      created_by: data[i]?.created_by,
      id: data[i]?.id,
      updated_at: data[i]?.updated_at,
      updated_by: data[i]?.updated_by
    })
  }

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Tài chính
        <Link to="/finance/financeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={result}
        columns={financeColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Finance;
