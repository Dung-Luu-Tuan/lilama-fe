import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import FileUpload from "react-material-file-upload";
import Button from "@mui/material/Button";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import Link from "@mui/material/Link";
import {handleUnauthenticated} from "../../utils/auth";
import {notifyStore} from "../../store/notifyStore";
import {useNavigate} from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Upload = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [receiveData, setReceiveData] = useState();
  const [open, setOpen] = useState(false);
  const [sampleFile, SetSampleFile] = useState();
  const [verifyLoading, setVerifyLoading] = useState(false)
  const [commitLoading, setCommitLoading] = useState(false)
  const [sampleLoading, setSampleLoading] = useState(false)
  const navigate = useNavigate();


  console.log(props);

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

    setVerifyLoading(true)
    axios
      .post(props.api_verify, data, {
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
        handleUnauthenticated(err, navigate)
        notifyStore.setState({show: true, message: err.response?.data?.error})
      }).finally(() => setVerifyLoading(false))
  };


  const onCommit = (e) => {
    e.preventDefault();
    console.log(receiveData);

    const config = {
      method: "post",
      url: props.api_commit,
      headers: { Authorization: window.localStorage.getItem("token") },
      data: { data: receiveData },
    };

    setCommitLoading(true)
    axios(config)
      .then(function (response) {
        console.log(response.data.success);
        if (response.data.success === true) {
          handleClick();
        }
      })
      .catch(function (error) {
        handleUnauthenticated(error, navigate)
        notifyStore.setState({show: true, message: error.response?.data?.error})
      }).finally(() => setCommitLoading(false))
  };

  const handleGetSampleFile = () => {
    var config = {
      method: "get",
      url: props.api_sampleLink,
      headers: { Authorization: window.localStorage.getItem("token") },
    };

    setSampleLoading(true)
    axios(config)
      .then(function (response) {
        SetSampleFile(response.data);
      })
      .catch(function (error) {
        handleUnauthenticated(error, navigate)
        notifyStore.setState({show: true, message: error.response?.data?.error})
      }).finally(() => setSampleLoading(false))
  };

  console.log(receiveData);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <LoadingButton
            className="getSampleFileBtn"
            loading={sampleLoading}
            variant="contained"
            onClick={handleGetSampleFile}
          >
            Lấy file mẫu
          </LoadingButton>
          {sampleFile ? (
            <Link href={sampleFile.data} underline="always" target="_blank">
              {sampleFile.data}
            </Link>
          ) : (
            ""
          )}
          <FileUpload buttonText="Chọn File" value={selectedFile} onChange={setSelectedFile} />
          {selectedFile ? (
            <LoadingButton loading={verifyLoading} className="uploadBtn" variant="contained" onClick={upload}>
              Gửi
            </LoadingButton>
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
                columns={props.columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                getRowId={(row) => row.code || row.main_contract_code || row.freelance_contract_code}
              />
              <LoadingButton
                className="commitBtn"
                loading={commitLoading}
                variant="contained"
                onClick={onCommit}
              >
                Xác nhận
              </LoadingButton>
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
