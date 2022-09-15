import { Link } from "react-router-dom";
export const projectColumns = [
  {
    field: "code",
    headerName: "Tên dự án",
    width: 200,
  },
  {
    field: "description",
    headerName: "Thông tin dự án",
    width: 500,
  },
  {
    field: "need_review",
    headerName: "Yêu cầu xác thực",
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
            to="/project/edit"
            className="link"
            style={{ textDecoration: "none" }}
            state={{
              code: params.row.code,
              description: params.row.description,
              need_review: params.row.need_review,
              id: params.row.id,
            }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div className="deleteButton">Disable</div>
        </div>
      );
    },
  },
];

export const projectVerifyColumns = [
  {
    field: "code",
    headerName: "Tên dự án",
    width: 200,
  },
  {
    field: "description",
    headerName: "Thông tin dự án",
    width: 500,
  },
];
