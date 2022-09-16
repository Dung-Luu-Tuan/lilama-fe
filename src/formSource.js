import { Link } from "react-router-dom";
import { useDisable } from "./pages/table/useDisable";
import moment from "moment";

export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
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
    id2: "binding_package",
    id3: "code",
    label: "Tên gói thầu",
    type: "text",
    canEdit: "",
  },
  {
    id: "project_code",
    id2: "project",
    id3: "code",
    label: "Công trình/dự án",
    type: "text",
    canEdit: "",
  },
  {
    id: "customer_code",
    id2: "customer",
    id3: "code",
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
    id2: "main_contract",
    id3: "code",
    label: "Số HDC",
    type: "text",
  },
  {
    id: "executor_code",
    id2: "executor",
    id3: "code",
    label: "DVTT",
    type: "text",
  },
  {
    id: "manager_code",
    id2: "manager",
    id3: "code",
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
