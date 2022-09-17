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
    type: "number",
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
