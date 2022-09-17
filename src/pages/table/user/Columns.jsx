import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";

export const userColumns = [
  {
    field: "username",
    headerName: "Tên tài khoản",
    width: 200,
  },
  {
    field: "full_name",
    headerName: "Tên đầy đủ",
    width: 500,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Điện thoại",
    width: 200,
  },
  {
    field: "active",
    headerName: "Kích hoạt",
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
            to={`/user/edit/${params.row.id}`}
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
