export const bindingPackageColumns = [
    {
        field: "code_project",
        headerName: "Tên dự án",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    {params.row.project.need_review ? <div style={{ color: 'red' }}>{params.row.project.code}</div> : <div>{params.row.project.code}</div>}
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
    }
]