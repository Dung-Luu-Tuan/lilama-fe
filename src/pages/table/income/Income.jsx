import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { incomeColumns } from "./Columns";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import {handleUnauthenticated} from "../../../utils/auth";
import {notifyStore} from "../../../store/notifyStore";

const Income = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://lilama18.herokuapp.com/api/incomes?page=1&limit=200',
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

  console.log(data);

  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      acceptance_note: data[i]?.acceptance_note,
      acceptance_value: data[i]?.acceptance_value,
      advance_refund_value: data[i]?.advance_refund_value,
      created_at: moment(data[i]?.created_at).utcOffset(7).format("DD/MM/YYYY"),
      created_by: data[i]?.created_by,
      deduction_value: data[i]?.deduction_value,
      id: data[i]?.id,
      invoice_code: data[i]?.invoice_code,
      invoice_date: moment(data[i]?.invoice_date).utcOffset(7).format("DD/MM/YYYY"),
      is_advance_payment: data[i]?.is_advance_payment,
      main_contract: data[i]?.main_contract,
      note: data[i]?.note,
      payment_request_code: data[i]?.payment_request_code,
      payment_request_date: moment(data[i]?.payment_request_date).utcOffset(7).format("DD/MM/YYYY"),
      payment_request_debt: data[i]?.payment_request_debt,
      payment_request_value: data[i]?.payment_request_value,
      received_date: moment(data[i]?.received_date).utcOffset(7).format("DD/MM/YYYY"),
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

  console.log(result);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Dòng tiền
        <Link to="/income/incomeUpload" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={result}
        loading={loading}
        columns={incomeColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Income;
