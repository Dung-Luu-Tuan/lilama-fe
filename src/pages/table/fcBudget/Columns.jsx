import { Link } from "react-router-dom";

export const fcBudgetColumns = [
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
    field: "value",
    headerName: "GT thi công",
    width: 300,
  },
  {
    field: "description",
    headerName: " Chi tiết chi phí thi công",
    width: 300,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link
            to={`/fcBudget/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
        </div>
      );
    },
  },
];

export const fcBudgetVerifyColumns = [
  {
    field: "freelance_contract_code",
    headerName: "Số HDTC",
    width: 200,
  },
  {
    field: "cost_type_code",
    headerName: "Mã chi phí",
    width: 200,
  },
  {
    field: "value",
    headerName: "GT thi công",
    width: 300,
  },
  {
    field: "description",
    headerName: " Chi tiết chi phí thi công",
    width: 300,
  },
];
