import {Link} from "react-router-dom";
import {renderRel, renderReview, renderVerifyRel} from "../../../utils/renderCell";

export const bindingPackageColumns = [
  {
    field: "code_project",
    headerName: "Tên dự án",
    width: 150,
    renderCell: ({ row: { project } }) => {
      return renderRel(project.code, `/project/edit/${project.id}`, project.need_review)
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
    renderCell: ({ row: { project, project_code } }) => {
      return renderVerifyRel(project_code, project)
    },
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

