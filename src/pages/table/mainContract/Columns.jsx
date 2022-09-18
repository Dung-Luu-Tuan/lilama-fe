import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";

export const mainContractColumns = [
  {
    field: "code",
    headerName: "Số HDC",
    width: 250,
  },
  {
    field: "signed_at",
    headerName: "Ngày ký HDC",
    width: 300,
    renderCell: (params) => (
      <>
        {params.row.signed_at
          ? moment(params.row.signed_at).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "customer",
    headerName: "Khách hàng",
    width: 300,
    renderCell: (params) => <>{params.row.customer.code}</>,
  },
  {
    field: "project_code",
    headerName: "Công trình/dự án",
    width: 300,
    renderCell: (params) => <>{params.row.project.code}</>,
  },
  {
    field: "binding_package",
    headerName: "Tên gói thầu",
    width: 300,
    renderCell: (params) => <>{params.row.binding_package.code}</>,
  },
  {
    field: "value",
    headerName: "Giá trị HDC",
    width: 300,
  },
  {
    field: "description",
    headerName: "Hạng mục HDC",
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
            to={`/main-contract/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/main-contract",
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

export const mainContractVerifyColumns = [
  {
    field: "code",
    headerName: "Số HDC",
    width: 250,
  },
  {
    field: "signed_at",
    headerName: "Ngày ký HDC",
    width: 300,
    renderCell: (params) => (
      <>
        {params.row.signed_at
          ? moment(params.row.signed_at).utcOffset(7).format("DD/MM/YYYY")
          : ""}
      </>
    ),
  },
  {
    field: "customer_code",
    headerName: "Khách hàng",
    width: 300,
  },
  {
    field: "project_code",
    headerName: "Công trình/dự án",
    width: 300,
  },
  {
    field: "binding_package_code",
    headerName: "Tên gói thầu",
    width: 300,
  },
  {
    field: "value",
    headerName: "Giá trị HDC",
    width: 300,
  },
  {
    field: "description",
    headerName: "Hạng mục HDC",
    width: 300,
  },
];
