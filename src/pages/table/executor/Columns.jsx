import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";

export const executorColumns = [
  {
    field: "code",
    headerName: "DCTT",
    width: 200,
  },
  {
    field: "info",
    headerName: "Thông tin DVTT",
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
            to={`/executor/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/executor",
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

export const executorVerifyColumns = [
  {
    field: "code",
    headerName: "DCTT",
    width: 200,
  },
  {
    field: "info",
    headerName: "Thông tin DVTT",
    width: 500,
  },
];
