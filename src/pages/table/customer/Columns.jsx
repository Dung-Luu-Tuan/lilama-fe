import { Link } from "react-router-dom";
import { useDisable } from "../useDisable";
import {renderReview} from "../../../utils/renderCell";

export const customerColumns = [
  {
    field: "code",
    headerName: "Tên khách hàng",
    width: 200,
  },
  {
    field: "company",
    headerName: "Công ty",
    width: 200,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 300,
  },
  {
    field: "tax_code",
    headerName: "Mã thuế",
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
            to={`/customer/edit/${params.row.id}`}
            className="link"
            style={{ textDecoration: "none" }}
          >
            <div className="editButton">Edit</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() =>
              useDisable({
                api: "https://lilama18.herokuapp.com/api/customer",
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

export const customerVerifyColumns = [
  {
    field: "code",
    headerName: "Tên khách hàng",
    width: 200,
  },
  {
    field: "company",
    headerName: "Công ty",
    width: 200,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 300,
  },
  {
    field: "tax_code",
    headerName: "Mã thuế",
    width: 200,
  },
];
