import "../upload.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import FileUpload from "react-material-file-upload";
import Button from "@mui/material/Button";
import "../datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { verifyColumns } from "./columns";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import Link from "@mui/material/Link";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [receiveData, setReceiveData] = useState();
    const [open, setOpen] = useState(false);
    const [sampleFile, SetSampleFile] = useState(undefined);

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            setReceiveData(undefined);
            setSelectedFile(undefined);
        }, 2000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const upload = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", selectedFile[0]);

        axios
            .post("https://lilama18.herokuapp.com/api/binding-package/upload/verify", data, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                setReceiveData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onCommit = (e) => {
        e.preventDefault();

        const config = {
            method: "post",
            url: "https://lilama18.herokuapp.com/api/binding-package/upload/commit",
            headers: { Authorization: window.localStorage.getItem("token") },
            data: { data: receiveData },
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.success);
                if (response.data.success === true) {
                    handleClick();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleGetSampleFile = () => {
        var config = {
            method: "get",
            url: "https://lilama18.herokuapp.com/api/configs",
            headers: { Authorization: window.localStorage.getItem("token") },
        };

        axios(config)
            .then(function(response) {
                console.log(response);
                // SetSampleFile(response.data[1].value);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="container">
                    <Button
                        className="getSampleFileBtn"
                        variant="contained"
                        onClick={handleGetSampleFile}
                    >
                        Lấy file mẫu
                    </Button>
                    {sampleFile ? (
                        <Link href={sampleFile.data} underline="always">
                            {sampleFile.data}
                        </Link>
                    ) : (
                        ""
                    )}
                    <FileUpload value={selectedFile} onChange={setSelectedFile} />
                    {selectedFile ? (
                        <Button className="uploadBtn" variant="contained" onClick={upload}>
                            Send
                        </Button>
                    ) : (
                        ""
                    )}
                </div>
                <div className="tableReceive">
                    {receiveData ? (
                        <>
                            <DataGrid
                                className="datagrid"
                                rows={receiveData}
                                columns={verifyColumns}
                                pageSize={5}
                                rowsPerPageOptions={[1]}
                                getRowId={(row) => row.code}
                            />
                            <Button
                                className="commitBtn"
                                variant="contained"
                                onClick={onCommit}
                            >
                                Xác nhận
                            </Button>
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="success"
                                    sx={{ width: "100%" }}
                                >
                                    Upload thành công
                                </Alert>
                            </Snackbar>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Upload;
