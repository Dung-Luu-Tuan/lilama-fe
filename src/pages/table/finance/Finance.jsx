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

  useEffect(() => {
    setData(financeListData.data)
  }, [])

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Tài chính
        <Link to="/income/incomeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={financeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Finance;
