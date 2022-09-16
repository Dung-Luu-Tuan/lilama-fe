import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";

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
    renderCell: (params) => <>{params.row.main_contract.code}</>,
  },
  {
    field: "executor",
    headerName: "DVTT",
    width: 200,
    renderCell: (params) => <>{params.row.executor.code}</>,
  },
  {
    field: "manager",
    headerName: "CBDA",
    width: 200,
    renderCell: (params) => <>{params.row.manager.code}</>,
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
    renderCell: (params) => <>{params.row.main_contract_code}</>,
  },
  {
    field: "executor",
    headerName: "DVTT",
    width: 200,
    renderCell: (params) => <>{params.row.executor_code}</>,
  },
  {
    field: "manager",
    headerName: "CBDA",
    width: 200,
    renderCell: (params) => <>{params.row.manager_code}</>,
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
