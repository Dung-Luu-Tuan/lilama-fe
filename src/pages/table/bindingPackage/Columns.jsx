import { Link } from "react-router-dom";

export const bindingPackageColumns = [
  {
    field: "code_project",
    headerName: "Tên dự án",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {params.row.project.need_review ? (
            <div style={{ color: "red" }}>{params.row.project.code}</div>
          ) : (
            <div>{params.row.project.code}</div>
          )}
        </>
      );
    },
  },
  {
    field: "code",
    headerName: "Tên gói thầu",
    width: 300,
  },
  {
    field: "description",
    headerName: "Thông tin gói thầu",
    width: 550,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link
            to={`/bindingPackage/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div className="deleteButton">Disable</div>
        </div>
      );
    },
  },
];

export const bindingPackageVerifyColumns = [
  {
    field: "project_code",
    headerName: "Tên dự án",
    width: 150,
  },
  {
    field: "code",
    headerName: "Tên gói thầu",
    width: 150,
  },
  {
    field: "description",
    headerName: "Thông tin gói thầu",
    width: 500,
  },
];

