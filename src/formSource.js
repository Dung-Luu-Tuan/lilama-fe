import { Link } from "react-router-dom";
import { useDisable } from "./pages/table/useDisable";
import moment from "moment";

export const userInputs = [
  {
    id: "username",
    label: "Tên tài khoản",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "full_name",
    label: "Tên đầy đủ",
    type: "text",
    canEdit: "",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    canEdit: "",
  },
  {
    id: "phone",
    label: "Điện thoại",
    type: "text",
    canEdit: "string",
  },
  {
    id: "permission",
    label: "Quyền",
    type: "text",
    canEdit: "",
  },
  {
    id: "password",
    label: "Mật khẩu",
    type: "text",
    canEdit: "",
    placeholder: "Mật khẩu gồm 8 ký tự có cả chữ và số",
    validation: "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})",
  },
];

export const userCreateInputs = [
  {
    id: "username",
    label: "Tên tài khoản",
    type: "text",
    placeholder: "Vd: nguyenvana",
  },
  {
    id: "full_name",
    label: "Tên đầy đủ",
    type: "text",
    canEdit: "",
    placeholder: "Vd: Nguyễn Văn A",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    canEdit: "",
    placeholder: "Vd: nguyenvana@gmail.com",
  },
  {
    id: "phone",
    label: "Điện thoại",
    type: "number",
    canEdit: "string",
    placeholder: "Vd: 0909009009",
  },
  {
    id: "permission",
    label: "Quyền",
    type: "text",
    canEdit: "",
    placeholder: "A hoặc B hoặc C hoặc D",
  },
  {
    id: "password",
    label: "Mật khẩu",
    type: "text",
    canEdit: "",
    placeholder: "Mật khẩu gồm 8 ký tự có cả chữ và số",
  },
];

export const projectInputs = [
  {
    id: "code",
    label: "Tên dự án",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "description",
    label: "Thông tin dự án",
    type: "text",
    canEdit: "",
  },
  {
    id: "need_review",
    label: "Yêu cầu xác thực",
    type: "text",
    canEdit: "readonly",
  },
];

export const bindingPackageInputs = [
  {
    id: "code",
    label: "Tên dự án",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "project",
    label: "Tên gói thầu",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "description",
    label: "Thông tin dự án",
    type: "text",
    canEdit: "",
  },
  {
    id: "need_review",
    label: "Yêu cầu xác thực",
    type: "text",
    canEdit: "readonly",
  },
];

export const customerInputs = [
  {
    id: "code",
    label: "Tên khách hàng",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "company",
    label: "Công ty",
    type: "text",
    canEdit: "",
  },
  {
    id: "address",
    label: "Địa chỉ",
    type: "text",
    canEdit: "",
  },
  {
    id: "tax_code",
    label: "Mã thuế",
    type: "text",
    canEdit: "",
  },
];

export const incomeInputs = [
  {
    id: "main_contract_code",
    name: "main_contract.code",
    label: "Số HDC",
    type: "text",
    canEdit: "",
  },
  {
    id: "acceptance_note",
    label: "Nội dung nghiệm thu của đợt",
    type: "text",
    canEdit: "",
  },
  {
    id: "acceptance_value",
    label: "Gt xuất hóa đơn (nghiệm thu)",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "invoice_code",
    label: "Số Hóa Đơn",
    type: "text",
    canEdit: "",
  },

  {
    id: "invoice_date",
    label: "Ngày hóa đơn",
    type: "date",
    canEdit: "",
  },
  {
    id: "vat_10",
    label: "VAT 10%",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "vat_8",
    label: "VAT 8%",
    type: "number",
    canEdit: "",
  },
  {
    id: "taxable_value",
    label: "GT Sau Thuế",
    type: "number",
    canEdit: "",
  },
  {
    id: "payment_request_code",
    label: "Ref. No. Giấy DNTT",
    type: "text",
    canEdit: "",
  },
  {
    id: "payment_request_date",
    label: "Ngày Giấy DNTT",
    type: "date",
    canEdit: "",
  },
  {
    id: "payment_request_value",
    label: "Số Tiền Giấy DNTT",
    type: "number",
    canEdit: "",
  },
  {
    id: "advance_refund_value",
    label: "Hoàn trả TƯ",
    type: "number",
    canEdit: "",
  },
  {
    id: "retention_value",
    label: "Giữ lại",
    type: "number",
    canEdit: "",
  },
  {
    id: "received_date",
    label: "Ngày nhận",
    type: "date",
    canEdit: "readonly",
  },
  {
    id: "received_value",
    label: "Số Tiền nhận",
    type: "number",
    canEdit: "",
  },
  {
    id: "deduction_value",
    label: "GT Gán trừ",
    type: "number",
    canEdit: "",
  },
  {
    id: "note",
    label: "Ghi chú",
    type: "text",
    canEdit: "",
  },

  {
    id: "is_advance_payment",
    label: "Thanh toán trước",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "remaining_advance_refund",
    label: "Tiền còn lại TƯ giảm dần",
    type: "number",
    canEdit: "readonly",
  },
  {
    id: "payment_request_debt",
    label: "Số tiền còn nợ theo DNTT",
    type: "number",
    canEdit: "readonly",
  },
];

export const mainContractInputs = [
  {
    id: "code",
    label: "Số HDC",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "binding_package_code",
    name: "binding_package.code",
    label: "Tên gói thầu",
    type: "text",
    canEdit: "",
  },
  {
    id: "project_code",
    name: "project.code",
    label: "Công trình/dự án",
    type: "text",
    canEdit: "",
  },
  {
    id: "customer_code",
    name: "customer.code",
    label: "Khách hàng",
    type: "text",
    canEdit: "",
  },
  {
    id: "value",
    label: "Giá trị HDC",
    type: "number",
    canEdit: "",
  },
  {
    id: "description",
    label: "Hạn mục HDC",
    type: "text",
    canEdit: "",
  },
  {
    id: "signed_at",
    label: "Ngày ký HDC",
    type: "date",
    canEdit: "",
  },
];

export const executorInputs = [
  {
    id: "code",
    label: "DCTT",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "info",
    label: "Thông tin DVTT",
    type: "text",
    canEdit: "",
  },
];

export const freelanceContractInputs = [
  {
    id: "code",
    label: "Số HDTC",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "signed_at",
    label: "Ngày ký HDTC",
    type: "date",
  },
  {
    id: "gnv_code",
    label: "GNV số",
    type: "text",
  },
  {
    id: "gnv_date",
    label: "Ngày ký GNV",
    type: "date",
  },
  {
    id: "main_contract_code",
    name: "main_contract.code",
    label: "Số HDC",
    type: "text",
  },
  {
    id: "executor_code",
    name: "executor.code",
    label: "DVTT",
    type: "text",
  },
  {
    id: "manager_code",
    name: "manager.code",
    label: "CBDA",
    type: "text",
  },
  {
    id: "description",
    label: "Phạm vi công việc giao khoán",
    type: "text",
  },
  {
    id: "distributed_value",
    label: "Giá trị HDC tương ứng",
    type: "number",
  },
  {
    id: "need_review",
    label: "Yêu cầu xác thực",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "status",
    label: "Tình trạng",
    type: "text",
  },
  {
    id: "execution_description",
    label: "Phạm vi thực hiện",
    type: "text",
  },
];
export const executionInputs = [
  {
    id: "freelance_contract_code",
    name: "freelance_contract.code",
    label: "Số HDTC",
    type: "text",
    canEdit: "",
  },
  {
    id: "cost_type_code",
    name: "cost_type.code",
    label: "Mã chi phí",
    canEdit: "",
    type: "date",
  },
  {
    id: "payment_request_code",
    label: "Thời điểm ghi nhận chi phí",
    canEdit: "",
    type: "text",
  },
  {
    id: "payment_request_date",
    label: "Ngày ký GNV",
    canEdit: "",
    type: "date",
  },
  {
    id: "payment_request_note",
    label: "Nội dung đề nghị thanh toán của tháng",
    canEdit: "",
    type: "text",
  },
  {
    id: "payment_request_value",
    label: "GT DNTT",
    canEdit: "",
    type: "number",
  },
  {
    id: "expense_date",
    label: "Thời điểm ghi nhận chi phí",
    canEdit: "",
    type: "date",
  },
  {
    id: "document_codes",
    label: "SCT",
    type: "text",
    canEdit: "",
  },
  {
    id: "document_dates",
    label: "Ngày SCT",
    type: "text",
    canEdit: "",
  },
  {
    id: "vendor",
    label: "NCC",
    type: "text",
    canEdit: "",
  },
  {
    id: "marking",
    label: "marking",
    type: "text",
    canEdit: "",
  },
];

export const acceptanceInputs = [
  {
    id: "freelance_contract_code",
    name: "freelance_contract.code",
    label: "Số HDTC",
    type: "text",
    canEdit: "",
  },
  {
    id: "description",
    label: "Nội dung nghiệm thu của đợt",
    type: "text",
    canEdit: "",
  },
  {
    id: "execution_value",
    label: "Giá trị thực hiện",
    type: "number",
    canEdit: "",
  },
  {
    id: "acceptance_value",
    label: "Gt nghiệm thu",
    type: "number",
    canEdit: "",
  },
  {
    id: "invoice_date",
    label: "Ngày hóa đơn",
    type: "date",
    canEdit: "",
  },
  {
    id: "new_distributed_value",
    label: "Giá trị HDC tương ứng dự kiến quyết toán",
    type: "number",
    canEdit: "",
  },
  {
    id: "remaining_value",
    label: "Giá trị dở dang",
    type: "number",
    canEdit: "readonly",
  },
];

export const financeInputs = [
  {
    id: "main_contract_code",
    name: "main_contract.code",
    label: "Số HDC",
    type: "text",
    canEdit: "",
  },
  {
    id: "mc_value",
    label: "Giá trị HDC",
    type: "number",
    canEdit: "",
  },
  {
    id: "contract_distributed_value",
    label: "Giá trị phân bổ HDC tương ứng khi GK",
    type: "number",
    canEdit: "",
  },
  {
    id: "contract_execution_value",
    label: "Chi phí thi công TT khi GK",
    type: "number",
    canEdit: "",
  },
  {
    id: "contract_retention_value",
    label: "Giá trị giữ lại khi GK",
    type: "number",
    canEdit: "readonly",
  },
  {
    id: "contract_year",
    label: "Năm GK",
    type: "text",
    canEdit: "",
  },
  {
    id: "contract_rate",
    label: "Tỷ lệ GK (%)",
    type: "number",
    canEdit: "",
  },
  {
    id: "contract_final_value",
    label: "Định phí khi GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_net_profit",
    label: "Lãi ròng khi GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "settlement_distributed_value",
    label: "Giá trị phân bổ HDC tương ứng khi QT",
    type: "number",
    canEdit: "",
  },
  {
    id: "settlement_execution_value",
    label: "Chi phí thi công TT khi QT",
    type: "number",
    canEdit: "",
  },
  {
    id: "settlement_retention_value",
    label: "Giá trị giữ lại khi QT",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "settlement_year",
    label: "Năm QT",
    type: "number",
    canEdit: "",
  },
  {
    id: "settlement_rate",
    label: "Tỷ lệ QT (%)",
    type: "number",
    canEdit: "",
  },
  {
    id: "settlement_final_value",
    label: "Định phí khi QT",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "settlement_net_profit",
    label: "Lãi ròng khi QT",
    type: "text",
    canEdit: "readonly",
  },
];

export const fcBudgetInputs = [
  {
    id: "freelance_contract_code",
    name: "freelance_contract.code",
    label: "Số HDTC",
    type: "text",
    canEdit: "",
  },
  {
    id: "cost_type_code",
    name: "cost_type.code",
    label: "Mã chi phí",
    type: "text",
    canEdit: "",
  },
  {
    id: "description",
    label: "Chi tiết chi phí thi công",
    type: "text",
    canEdit: "",
  },
  {
    id: "value",
    label: "GT thi công",
    type: "number",
    canEdit: "",
  },
];

export const costTypeInputs = [
  {
    id: "code",
    label: "Mã chi phí",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "name",
    label: "Tên chi phí",
    type: "text",
    canEdit: "",
  },
  {
    id: "description",
    label: "Ghi chú",
    type: "text",
    canEdit: "",
  },
];

export const managerInputs = [
  {
    id: "code",
    label: "CBDA",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "info",
    label: "Thông tin CBDA",
    type: "text",
    canEdit: "",
  },
];
