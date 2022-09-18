import { Link } from "react-router-dom";

export const costTypeColumns = [
  {
    field: "code",
    headerName: "Mã chi phí",
    width: 200,
  },
  {
    field: "name",
    headerName: "Tên chi phí",
    width: 200,
  },
  {
    field: "description",
    headerName: "Ghi chú",
    width: 500,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link
            to={`/costType/edit/${params.row.id}`}
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

export const costTypeVerifyColumns = [
  {
    field: "code",
    headerName: "Mã chi phí",
    width: 200,
  },
  {
    field: "name",
    headerName: "Tên chi phí",
    width: 200,
  },
  {
    field: "description",
    headerName: "Ghi chú",
    width: 500,
  },
];


export const costTypeInputs = [
  {
    id: "code",
    label: "Mã chi phí",
    type: "text",
    canEdit: "readonly",
  },
  {
    id: "name",
    label: "Tên chi phí",
    type: "text",
    canEdit: "",
  },
  {
    id: "description",
    label: "Ghi chú",
    type: "text",
    canEdit: "",
  },
]