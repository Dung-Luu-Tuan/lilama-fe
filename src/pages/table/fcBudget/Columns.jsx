import { Link } from "react-router-dom";
import {renderRel, renderVerifyRel} from "../../../utils/renderCell";

export const fcBudgetColumns = [
  {
    field: "freelance_contract",
    headerName: "Số HDTC",
    width: 200,
    renderCell: ({ row: { freelance_contract } }) => {
      return renderRel(freelance_contract.code, `/freelance-contract/edit/${freelance_contract.id}`, freelance_contract.need_review)
    },
  },
  {
    field: "cost_type",
    headerName: "Mã chi phí",
    width: 200,
    renderCell: ({ row: { cost_type } }) => {
      return renderRel(cost_type.name, `/costType/edit/${cost_type.id}`, cost_type.need_review)
    },
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
    renderCell: ({ row: { freelance_contract, freelance_contract_code } }) => {
      return renderVerifyRel(freelance_contract_code, freelance_contract)
    },
  },
  {
    field: "cost_type_code",
    headerName: "Mã chi phí",
    width: 200,
    renderCell: ({ row: { cost_type, cost_type_code } }) => {
      return renderVerifyRel(cost_type_code, cost_type)
    },
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
