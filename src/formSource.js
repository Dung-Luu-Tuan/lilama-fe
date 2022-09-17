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
    type: "text",
    canEdit: "",
  },
  {
    id: "taxable_value",
    label: "GT Sau Thuế",
    type: "text",
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
    type: "text",
    canEdit: "",
  },
  {
    id: "advance_refund_value",
    label: "Hoàn trả TƯ",
    type: "text",
    canEdit: "",
  },
  {
    id: "retention_value",
    label: "Giữ lại",
    type: "text",
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
    type: "text",
    canEdit: "",
  },
  {
    id: "deduction_value",
    label: "GT Gán trừ",
    type: "text",
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
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "payment_request_debt",
    label: "Số tiền còn nợ theo DNTT",
    type: "text",
    canEdit: "readonly",
  },
];

export const financeInputs = [
  {
    id: "main_contract",
    label: "Số HDC",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "mc_value",
    label: "Giá trị HDC",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_distributed_value",
    label: "Giá trị phân bổ HDC tương ứng khi GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_execution_value",
    label: "Chi phí thi công TT khi GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_retention_value",
    label: "Giá trị giữ lại khi GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_year",
    label: "Năm GK",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "contract_rate",
    label: "Tỷ lệ GK (%)",
    type: "text",
    canEdit: "readonly",
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
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "settlement_execution_value",
    label: "Chi phí thi công TT khi QT",
    type: "text",
    canEdit: "readonly",
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
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "settlement_rate",
    label: "Tỷ lệ QT (%)",
    type: "text",
    canEdit: "readonly",
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

