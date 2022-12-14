import { Link } from "react-router-dom";
import {renderRel, renderVerifyRel} from "../../../utils/renderCell";

export const incomeColumns = [
  {
    field: "main_contract",
    headerName: "Số HDC",
    width: 150,
    renderCell: ({ row: { main_contract } }) => {
      return renderRel(main_contract.code, `/main-contract/edit/${main_contract.id}`, main_contract.need_review)
    },
  },
  {
    field: "acceptance_note",
    headerName: "Nội dung nghiệm thu của đợt",
    width: 250,
  },
  {
    field: "acceptance_value",
    headerName: "Gt xuất hóa đơn (nghiệm thu)",
    width: 250,
  },
  {
    field: "invoice_code",
    headerName: "Số Hóa Đơn",
    width: 150,
  },
  {
    field: "invoice_date",
    headerName: "Ngày hóa đơn",
    width: 150,
  },
  {
    field: "vat_10",
    headerName: "VAT 10%",
    width: 100,
  },
  {
    field: "vat_8",
    headerName: "VAT 8%",
    width: 100,
  },
  {
    field: "taxable_value",
    headerName: "GT Sau Thuế",
    width: 150,
  },
  {
    field: "payment_request_code",
    headerName: "Ref. No. Giấy DNTT",
    width: 200,
  },
  {
    field: "payment_request_date",
    headerName: "Ngày Giấy DNTT",
    width: 150,
  },
  {
    field: "payment_request_value",
    headerName: "Số Tiền Giấy DNTT",
    width: 200,
  },
  {
    field: "advance_refund_value",
    headerName: "Hoàn trả TƯ",
    width: 150,
  },
  {
    field: "retention_value",
    headerName: "Giữ lại",
    width: 150,
  },
  {
    field: "received_date",
    headerName: "Ngày nhận",
    width: 150,
  },
  {
    field: "received_value",
    headerName: "Số Tiền nhận",
    width: 150,
  },
  {
    field: "deduction_value",
    headerName: "GT Gán trừ",
    width: 150,
  },
  {
    field: "note",
    headerName: "Ghi chú",
    width: 150,
  },

  {
    field: "is_advance_payment",
    headerName: "Thanh toán trước",
    width: 150,
  },
  {
    field: "remaining_advance_refund",
    headerName: "Tiền còn lại TƯ giảm dần",
    width: 200,
  },
  {
    field: "payment_request_debt",
    headerName: "Số tiền còn nợ theo DNTT",
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
            to={`/income/edit/${params.row.id}`}
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

export const incomeVerifyColumns = [
  {
    field: "main_contract_code",
    headerName: "Số HDC",
    width: 150,
    renderCell: ({ row: { main_contract, main_contract_code } }) => {
      return renderVerifyRel(main_contract_code, main_contract)
    },
  },
  {
    field: "acceptance_note",
    headerName: "Nội dung nghiệm thu của đợt",
    width: 250,
  },
  {
    field: "acceptance_value",
    headerName: "Gt xuất hóa đơn (nghiệm thu)",
    width: 250,
  },
  {
    field: "invoice_code",
    headerName: "Số Hóa Đơn",
    width: 150,
  },
  {
    field: "invoice_date",
    headerName: "Ngày hóa đơn",
    width: 150,
  },
  {
    field: "vat_10",
    headerName: "VAT 10%",
    width: 100,
  },
  {
    field: "vat_8",
    headerName: "VAT 8%",
    width: 100,
  },
  {
    field: "taxable_value",
    headerName: "GT Sau Thuế",
    width: 150,
  },
  {
    field: "payment_request_code",
    headerName: "Ref. No. Giấy DNTT",
    width: 200,
  },
  {
    field: "payment_request_date",
    headerName: "Ngày Giấy DNTT",
    width: 150,
  },
  {
    field: "payment_request_value",
    headerName: "Số Tiền Giấy DNTT",
    width: 200,
  },
  {
    field: "advance_refund_value",
    headerName: "Hoàn trả TƯ",
    width: 150,
  },
  {
    field: "retention_value",
    headerName: "Giữ lại",
    width: 150,
  },
  {
    field: "received_date",
    headerName: "Ngày nhận",
    width: 150,
  },
  {
    field: "received_value",
    headerName: "Số Tiền nhận",
    width: 150,
  },
  {
    field: "deduction_value",
    headerName: "GT Gán trừ",
    width: 150,
  },
  {
    field: "note",
    headerName: "Ghi chú",
    width: 150,
  },

  {
    field: "is_advance_payment",
    headerName: "Thanh toán trước",
    width: 150,
  },
  {
    field: "remaining_advance_refund",
    headerName: "Tiền còn lại TƯ giảm dần",
    width: 200,
  },
  {
    field: "payment_request_debt",
    headerName: "Số tiền còn nợ theo DNTT",
    width: 200,
  },
]
