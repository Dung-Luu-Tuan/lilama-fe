import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";

export const executorColumns = [
  {
    field: "freelance_contract",
    headerName: "Số HDTC",
    width: 200,
  },
  {
    field: "cost_type",
    headerName: "Mã chi phí",
    width: 200,
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
  },
  {
    field: "payment_request_note",
    headerName: "Nội dung đề nghị thanh toán của tháng",
    width: 300,
  },
  {
    field: "payment_request_value",
    headerName: "Giá trị DNTT",
    width: 200,
  },
  {
    field: "expense_date",
    headerName: "Thời điểm ghi nhận chi phí",
    width: 200,
  },
  {
    field: "document_codes",
    headerName: "SCT",
    width: 100,
  },
  {
    field: "document_dates",
    headerName: "Ngày SCT",
    width: 200,
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
            to={`/executor/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/executor",
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
