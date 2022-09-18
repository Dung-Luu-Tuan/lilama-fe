import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import {renderReview} from "../../../utils/renderCell";

export const managerColumns = [
  {
    field: "code",
    headerName: "CBDA",
    width: 200,
  },
  {
    field: "info",
    headerName: "Thông tin CBDA",
    width: 200,
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
            to={`/manager/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/manager",
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

export const managerVerifyColumns = [
  {
    field: "code",
    headerName: "CBDA",
    width: 200,
  },
  {
    field: "info",
    headerName: "Thông tin CBDA",
    width: 200,
  },
];

export const managerInputs = [
  {
    id: "code",
    label: "CBDA",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "info",
    label: "Thông tin CBDA",
    type: "text",
    canEdit: "",
  },
];
