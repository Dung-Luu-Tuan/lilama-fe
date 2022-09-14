import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { freelanceContractColumns } from "./Columns";
import { Link } from "react-router-dom";
import axios from "axios";

const freelanceContractListData = {
  "data": [
    {
      "created_at": "2022-09-11T14:32:47.622Z",
      "created_by": "admin1",
      "updated_at": "2022-09-11T14:32:47.622Z",
      "id": "631df18f5cb45fd40357c526",
      "code": "001",
      "main_contract": "ABC",
      "execution": "ABC",
      "manager": "ABC",
      "gnv_code": "001",
      "gnv_date": "20-09-2022",
      "description": "Kocks Phú Hữu",
      "signed_date": "ABC",
      "distributed_value": "ABC",
      "need_review": true,
      "status": "Active",
      "execution_description": "ABC",
    },
    {
      "created_at": "2022-09-11T14:32:47.622Z",
      "created_by": "admin1",
      "updated_at": "2022-09-11T14:32:47.622Z",
      "id": "631df18f5cb45fd40357c333",
      "code": "002",
      "main_contract": "CBA",
      "execution": "CBA",
      "manager": "CBA",
      "gnv_code": "002",
      "gnv_date": "23-09-2022",
      "description": "Kocks Phú Nhuận",
      "signed_date": "CBA",
      "distributed_value": "CBA",
      "need_review": true,
      "status": "Disable",
      "execution_description": "CBA",
    },
  ],
  "page": 1,
  "limit": 20,
  "total": 2
}

const FreelanceContract = () => {
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
    setData(freelanceContractListData.data)
  }, [])

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm HDTC mới
        <Link to="/freelanceContract/freelanceContractUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={freelanceContractColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.code}
      />
    </div>
  );
};

export default FreelanceContract;
