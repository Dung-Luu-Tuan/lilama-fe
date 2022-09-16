import { Link } from "react-router-dom";

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
              company: params.row.company,
              address: params.row.address,
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
