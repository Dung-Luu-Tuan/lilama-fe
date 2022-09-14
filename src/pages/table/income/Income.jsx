import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { incomeColumns } from "./Columns";
import { Link } from "react-router-dom";
import axios from "axios";

const incomeListData = {
  "data": [
    {
      "created_at": "2022-09-11T14:32:47.622Z",
      "created_by": "admin1",
      "updated_at": "2022-09-11T14:32:47.622Z",
      "id": "631df18f5cb45fd40357c124",
      "main_contract": "ABC",
      "acceptance_note": "ABC",
      "acceptance_value": "ABC",
      "invoice_code": "001",
      "invoice_date": "20-09-2022",
      "vat_10": 23,
      "vat_8": 30,
      "taxable_value": "Kocks Phú Hữu",
      "payment_request_code": "ABC",
      "payment_request_date": "20-09-2022",
      "payment_request_value": 15,
      "advance_refund_value": 16,
      "retention_value": 17,
      "received_date": "20-09-2022",
      "received_value": 17,
      "deduction_value": 17,
      "need_review": true,
      "note": "ABC",
    },
  ],
  "page": 1,
  "limit": 20,
  "total": 2,
};

const Income = () => {
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
    setData(incomeListData.data)
  }, [])

  console.log(data);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm dòng tiền mới
        <Link to="/income/incomeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={incomeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Income;
