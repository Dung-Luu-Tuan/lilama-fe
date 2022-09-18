import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import moment from "moment";
import {renderRel, renderReview, renderVerifyRel} from "../../../utils/renderCell";

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
    renderCell: ({ row: { customer } }) => {
      return renderRel(customer.code, `/customer/edit/${customer.id}`, customer.need_review)
    },
  },
  {
    field: "project_code",
    headerName: "Công trình/dự án",
    width: 300,
    renderCell: ({ row: { project } }) => {
      return renderRel(project.code, `/project/edit/${project.id}`, project.need_review)
    },
  },
  {
    field: "binding_package",
    headerName: "Tên gói thầu",
    width: 300,
    renderCell: ({ row: { binding_package } }) => {
      return renderRel(binding_package.code, `/bindingPackage/edit/${binding_package.id}`, binding_package.need_review)
    },
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
    field: "need_review",
    headerName: "Xác thực",
    width: 150,
    renderCell: ({row}) => renderReview(row.need_review)
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
                api: "https://lilama18.herokuapp.com/api/main-contracts",
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
    renderCell: ({ row: { customer, customer_code } }) => {
      return renderVerifyRel(customer_code, customer)
    },
  },
  {
    field: "project_code",
    headerName: "Công trình/dự án",
    width: 300,
    renderCell: ({ row: { project, project_code } }) => {
      return renderVerifyRel(project_code, project)
    },
  },
  {
    field: "binding_package_code",
    headerName: "Tên gói thầu",
    width: 300,
    renderCell: ({ row: { binding_package, binding_package_code } }) => {
      return renderVerifyRel(binding_package_code, binding_package)
    },
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
