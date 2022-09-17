import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";

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
            to={`/project/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/project",
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
