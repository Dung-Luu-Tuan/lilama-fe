import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";
import {renderRel, renderVerifyRel} from "../../../utils/renderCell";

export const freelanceContractColumns = [
  {
    field: "code",
    headerName: "Số HDTC",
    width: 150,
  },
  {
    field: "signed_at",
    headerName: "Ngày ký HDTC",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.signed_at
          ? moment(params.row.signed_at).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "gnv_code",
    headerName: "GNV số",
    width: 150,
  },
  {
    field: "gnv_date",
    headerName: "Ngày ký GNV",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.gnv_date
          ? moment(params.row.gnv_date).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "main_contract",
    headerName: "Số HDC",
    width: 200,
    renderCell: ({ row: { main_contract } }) => {
      return renderRel(main_contract.code, `/main-contract/edit/${main_contract.id}`, main_contract.need_review)
    },
  },
  {
    field: "executor",
    headerName: "DVTT",
    width: 200,
    renderCell: ({ row: { executor } }) => {
      return renderRel(executor.code, `/executor/edit/${executor.id}`, executor.need_review)
    },
  },
  {
    field: "manager",
    headerName: "CBDA",
    width: 200,
    renderCell: ({ row: { manager } }) => {
      return renderRel(manager.code, `/manager/edit/${manager.id}`, manager.need_review)
    },
  },
  {
    field: "description",
    headerName: "Phạm vi công việc giao khoán",
    width: 250,
  },
  {
    field: "distributed_value",
    headerName: "Giá trị HDC tương ứng",
    width: 250,
  },
  {
    field: "need_review",
    headerName: "Yêu cầu xác thực",
    width: 200,
  },
  {
    field: "status",
    headerName: "Tình trạng",
    width: 200,
  },
  {
    field: "execution_description",
    headerName: "Phạm vi thực hiện",
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
            to={`/freelance-contract/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/freelance-contracts",
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

export const freelanceContractVerifyColumns = [
  {
    field: "code",
    headerName: "Số HDTC",
    width: 150,
  },
  {
    field: "signed_at",
    headerName: "Ngày ký HDTC",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.signed_at
          ? moment(params.row.signed_at).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "gnv_code",
    headerName: "GNV số",
    width: 150,
  },
  {
    field: "gnv_date",
    headerName: "Ngày ký GNV",
    width: 200,
    renderCell: (params) => (
      <>
        {params.row.gnv_date
          ? moment(params.row.gnv_date).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "main_contract",
    headerName: "Số HDC",
    width: 200,
    renderCell: ({ row: { main_contract, main_contract_code } }) => {
      return renderVerifyRel(main_contract_code, main_contract)
    },
  },
  {
    field: "executor",
    headerName: "DVTT",
    width: 200,
    renderCell: ({ row: { executor, executor_code } }) => {
      return renderVerifyRel(executor_code, executor)
    },
  },
  {
    field: "manager",
    headerName: "CBDA",
    width: 200,
    renderCell: ({ row: { manager, manager_code } }) => {
      return renderVerifyRel(manager_code, manager)
    },
  },
  {
    field: "description",
    headerName: "Phạm vi công việc giao khoán",
    width: 250,
  },
  {
    field: "distributed_value",
    headerName: "Giá trị HDC tương ứng",
    width: 250,
  },
  {
    field: "status",
    headerName: "Tình trạng",
    width: 200,
  },
  {
    field: "execution_description",
    headerName: "Phạm vi thực hiện",
    width: 200,
  },
];
