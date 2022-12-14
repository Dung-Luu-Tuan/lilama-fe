import { Link } from "react-router-dom";
import {renderRel, renderVerifyRel} from "../../../utils/renderCell";

export const financeColumns = [
  {
    field: "main_contract",
    headerName: "Số HDC",
    width: 150,
    renderCell: ({ row: { main_contract } }) => {
      return renderRel(main_contract.code, `/main-contract/edit/${main_contract.id}`, main_contract.need_review)
    },
  },
  {
    field: "mc_value",
    headerName: "Giá trị HDC",
    width: 150,
  },
  {
    field: "contract_distributed_value",
    headerName: "Giá trị phân bổ HDC tương ứng khi GK",
    width: 300,
  },
  {
    field: "contract_execution_value",
    headerName: "Chi phí thi công TT khi GK",
    width: 250,
  },
  {
    field: "contract_retention_value",
    headerName: "Giá trị giữ lại khi GK",
    width: 250,
  },
  {
    field: "contract_year",
    headerName: "Năm GK",
    width: 200,
  },
  {
    field: "contract_rate",
    headerName: "Tỷ lệ GK (%)",
    width: 200,
  },
  {
    field: "contract_final_value",
    headerName: "Định phí khi GK",
    width: 200,
  },
  {
    field: "contract_net_profit",
    headerName: "Lãi ròng khi GK",
    width: 200,
  },
  {
    field: "settlement_distributed_value",
    headerName: "Giá trị phân bổ HDC tương ứng khi QT",
    width: 200,
  },
  {
    field: "settlement_execution_value",
    headerName: "Chi phí thi công TT khi QT",
    width: 200,
  },
  {
    field: "settlement_retention_value",
    headerName: "Giá trị giữ lại khi QT",
    width: 200,
  },
  {
    field: "settlement_year",
    headerName: "Năm QT",
    width: 200,
  },
  {
    field: "settlement_rate",
    headerName: "Tỷ lệ QT (%)",
    width: 200,
  },
  {
    field: "settlement_final_value",
    headerName: "Định phí khi QT",
    width: 200,
  },
  {
    field: "settlement_net_profit",
    headerName: "Lãi ròng khi QT",
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
            to={`/finance/edit/${params.row.id}`}
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

export const financeVerifyColumns = [
  {
    field: "main_contract_code",
    headerName: "Số HDC",
    width: 150,
    renderCell: ({ row: { main_contract, main_contract_code } }) => {
      return renderVerifyRel(main_contract_code, main_contract)
    },
  },
  {
    field: "mc_value",
    headerName: "Giá trị HDC",
    width: 150,
  },
  {
    field: "contract_distributed_value",
    headerName: "Giá trị phân bổ HDC tương ứng khi GK",
    width: 300,
  },
  {
    field: "contract_execution_value",
    headerName: "Chi phí thi công TT khi GK",
    width: 250,
  },
  {
    field: "contract_retention_value",
    headerName: "Giá trị giữ lại khi GK",
    width: 250,
  },
  {
    field: "contract_year",
    headerName: "Năm thực hiện",
    width: 200,
  },
  {
    field: "contract_rate",
    headerName: "Tỷ lệ GK (%)",
    width: 200,
  },
  {
    field: "contract_final_value",
    headerName: "Định phí khi GK",
    width: 200,
  },
  {
    field: "contract_net_profit",
    headerName: "Lãi ròng khi GK",
    width: 200,
  },
  {
    field: "settlement_distributed_value",
    headerName: "Giá trị phân bổ HDC tương ứng khi QT",
    width: 200,
  },
  {
    field: "settlement_execution_value",
    headerName: "Chi phí thi công TT khi QT",
    width: 200,
  },
  {
    field: "settlement_retention_value",
    headerName: "Giá trị giữ lại khi QT",
    width: 200,
  },
  {
    field: "settlement_year",
    headerName: "Năm QT",
    width: 200,
  },
  {
    field: "settlement_rate",
    headerName: "Tỷ lệ QT (%)",
    width: 200,
  },
  {
    field: "settlement_final_value",
    headerName: "Định phí khi QT",
    width: 200,
  },
  {
    field: "settlement_net_profit",
    headerName: "Lãi ròng khi QT",
    width: 200,
  },
];
