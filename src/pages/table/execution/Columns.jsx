import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";

export const executionColumns = [
  {
    field: "freelance_contract",
    headerName: "Số HDTC",
    width: 200,
    renderCell: (params) => <>{params.row.freelance_contract.code}</>,
  },
  {
    field: "cost_type",
    headerName: "Mã chi phí",
    width: 220,
    renderCell: (params) => <>{params.row.cost_type.code}</>,
  },
  {
    field: "payment_request_code",
    headerName: "Số DNTT",
    width: 200,
  },
  {
    field: "payment_request_date",
    headerName: "Ngày ký DNTT",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.payment_request_date
          ? moment(params.row.payment_request_date)
              .utcOffset(7)
              .format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "payment_request_note",
    headerName: "Nội dung đề nghị thanh toán của tháng",
    width: 350,
  },
  {
    field: "payment_request_value",
    headerName: "Giá trị DNTT",
    width: 200,
  },
  {
    field: "expense_date",
    headerName: "Thời điểm ghi nhận chi phí",
    width: 300,
    renderCell: (params) => (
      <>
        {params.row.expense_date
          ? moment(params.row.expense_date).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "document_codes",
    headerName: "SCT",
    width: 150,
  },
  {
    field: "document_dates",
    headerName: "Ngày SCT",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.document_dates
          ? moment(params.row.document_dates).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "vendor",
    headerName: "NCC",
    width: 200,
  },
  {
    field: "marking",
    headerName: "Marking",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link
            to={`/execution/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/execution",
                id: params.row.id,
              })()
            }
          >
            Disable
          </div>
        </div>
      );
    },
  },
];

export const executionVerifyColumns = [
  {
    field: "freelance_contract_code",
    headerName: "Số HDTC",
    width: 200,
  },
  {
    field: "cost_type_code",
    headerName: "Mã chi phí",
    width: 220,
  },
  {
    field: "payment_request_code",
    headerName: "Số DNTT",
    width: 200,
  },
  {
    field: "payment_request_date",
    headerName: "Ngày ký DNTT",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.payment_request_date
          ? moment(params.row.payment_request_date)
              .utcOffset(7)
              .format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "payment_request_note",
    headerName: "Nội dung đề nghị thanh toán của tháng",
    width: 350,
  },
  {
    field: "payment_request_value",
    headerName: "Giá trị DNTT",
    width: 200,
  },
  {
    field: "expense_date",
    headerName: "Thời điểm ghi nhận chi phí",
    width: 300,
    renderCell: (params) => (
      <>
        {params.row.expense_date
          ? moment(params.row.expense_date).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "document_codes",
    headerName: "SCT",
    width: 150,
  },
  {
    field: "document_dates",
    headerName: "Ngày SCT",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.document_dates
          ? moment(params.row.document_dates).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "vendor",
    headerName: "NCC",
    width: 200,
  },
  {
    field: "marking",
    headerName: "Marking",
    width: 200,
  },
];
