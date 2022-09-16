import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { incomeColumns } from "./Columns";
import { Link } from "react-router-dom";
import axios from "axios";

const Income = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/incomes?page=1&limit=20',
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

  console.log(data);

  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      acceptance_note: data[i]?.acceptance_note,
      acceptance_value: data[i]?.acceptance_value,
      advance_refund_value: data[i]?.advance_refund_value,
      created_at: data[i]?.created_at,
      created_by: data[i]?.created_by,
      deduction_value: data[i]?.deduction_value,
      id: data[i]?.id,
      invoice_code: data[i]?.invoice_code,
      invoice_date: data[i]?.invoice_date,
      is_advance_payment: data[i]?.is_advance_payment,
      main_contract: data[i]?.main_contract?.code,
      note: data[i]?.note,
      payment_request_code: data[i]?.payment_request_code,
      payment_request_date: data[i]?.payment_request_date,
      payment_request_debt: data[i]?.payment_request_debt,
      payment_request_value: data[i]?.payment_request_value,
      received_date: data[i]?.received_date,
      received_value: data[i]?.received_value,
      remaining_advance_refund: data[i]?.remaining_advance_refund,
      taxable_value: data[i]?.taxable_value,
      updated_at: data[i]?.updated_at,
      updated_by: data[i]?.updated_by,
      vat_10: data[i]?.vat_10,
      vat_8: data[i]?.vat_8,
      retention_value: data[i]?.retention_value,
    })
  }

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
        Thêm dòng tiền mới
        <Link to="/income/incomeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={result}
        columns={incomeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Income;
