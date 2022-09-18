import {Link} from "react-router-dom";
import {renderRel, renderVerifyRel} from "../../../utils/renderCell";

export const acceptanceColumns = [
  {
    field: "freelance_contract",
    headerName: "Số HDTC",
    width: 100,
    renderCell: ({ row: { freelance_contract } }) => {
      return renderRel(freelance_contract.code, `/freelance-contract/edit/${freelance_contract.id}`, freelance_contract.need_review)
    },
  },
  {
    field: "description",
    headerName: "Nội dung nghiệm thu của đợt",
    width: 220,
  },
  {
    field: "execution_value",
    headerName: "Giá trị thực hiện",
    width: 180,
  },
  {
    field: "acceptance_value",
    headerName: "Giá trị nghiệm thu",
    width: 180,
  },
  {
    field: "invoice_date",
    headerName: "Ngày hóa đơn",
    width: 200,
  },
  {
    field: "new_distributed_value",
    headerName: "Giá trị HDC tương ứng dự kiến quyết đoán",
    width: 300,
  },
  {
    field: "remaining_value",
    headerName: "Giá trị dở dang",
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
          <div className="cellAction">
            <Link
                to={`/acceptance/edit/${params.row.id}`}
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

export const acceptanceVerifyColumns = [
  {
    field: "freelance_contract_code",
    headerName: "Số HDTC",
    width: 150,
    renderCell: ({ row: { freelance_contract, freelance_contract_code } }) => {
      return renderVerifyRel(freelance_contract_code, freelance_contract)
    },
  },
  {
    field: "description",
    headerName: "Nội dung nghiệm thu của đợt",
    width: 250,
  },
  {
    field: "execution_value",
    headerName: "Giá trị thực hiện",
    width: 150,
  },
  {
    field: "acceptance_value",
    headerName: "Gt nghiệm thu",
    width: 150,
  },
  {
    field: "invoice_date",
    headerName: "Ngày hóa đơn",
    width: 150,
  },
  {
    field: "new_distributed_value",
    headerName: "Giá trị HDC tương ứng dự kiến quyết toán",
    width: 250,
  },
  {
    field: "remaining_value",
    headerName: "Giá trị dở dang",
    width: 150,
  },
];
