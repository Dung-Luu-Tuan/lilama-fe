import "./upload.scss";
import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import {useState, forwardRef, useEffect} from "react";
import {useParams} from "react-router-dom";
import moment from "moment";
import {notifyStore} from "../../store/notifyStore";
import LoadingButton from "@mui/lab/LoadingButton";
import {Backdrop, CircularProgress} from "@mui/material";

const _ = require("lodash");

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Edit = (props) => {
  const [detail, setDetail] = useState();
  const [open, setOpen] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [loadingDetails, setLoadingDetails] = useState(true)
  const { id } = useParams();
  console.log(props.formInputs);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    axios
        .get(`${props.api}/${id}`, {
          headers: { Authorization: window.localStorage.getItem("token") },
        })
        .then((response) => setDetail(response.data.data))
        .catch((error) => {
          notifyStore.setState({ show: true, message: error.response?.data?.error })
        })
        .finally(() => setLoadingDetails(false))
  }, []);

  console.log(detail);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements);

    let data = {};

    for (const element of Array.from(e.target.elements).slice(1)) {
      if (element.readOnly) continue

      const fieldName = element.name
      const fieldType = element.type
      const fieldValue = element.value

      if (!fieldValue) continue

      if (fieldType === "number") {
        data[fieldName] = Number(fieldValue)
      } else {
        data[fieldName] = fieldValue
      }
    }

    console.log(data);

    var config = {
      method: "patch",
      url: `${props.api}/${detail.id}`,
      headers: { Authorization: window.localStorage.getItem("token") },
      data: data,
    };

    setLoadingUpdate(true)
    axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.success === true) {
            handleClick();
          }
        })
        .catch(function (error) {
          console.log(error);
          notifyStore.setState({ show: true, message: error.response?.data?.error })
        }).finally(() => setLoadingUpdate(false))
  };

  return (
<<<<<<< HEAD
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="bottom">
          <div className="right">
            {detail ? (
              <form className="edit-form" onSubmit={handleSubmit}>
                {props.formInputs.map((input, index) =>
                  input.type === "date" ? (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        defaultValue={moment(detail[input.id])
                          .utcOffset(7)
                          .format("YYYY-MM-DD")}
                        readOnly={input.canEdit}
                        name={input.id}
                      />
                    </div>
                  ) : (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        defaultValue={
                          !detail[input.id] && input.name
                            ? _.get(detail, input.name, "defaultValue")
                            : detail[input.id]
                        }
                        readOnly={input.canEdit}
                      />
                    </div>
                  )
                )}
                <button className="edit-button" type="submit">
                  Send
                </button>
              </form>
            ) : (
              ""
            )}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Cập nhật thành công
              </Alert>
            </Snackbar>
=======
      <div className="new">
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="bottom">
            <div className="right">
              {detail && (<form className="edit-form" onSubmit={handleSubmit}>
                {props.formInputs.map((input, index) => (
                    input.type === "date"
                        ? (
                            <div className="formInput" key={input.id}>
                              <label>{input.label}</label>
                              <input
                                  type={input.type}
                                  placeholder={input.placeholder}
                                  defaultValue={moment(detail[input.id])
                                      .utcOffset(7)
                                      .format("YYYY-MM-DD")}
                                  readOnly={input.canEdit}
                                  className={input.canEdit ? "readonly-input" : ""}
                                  name={input.id}
                              />
                            </div>
                        )
                        : (
                            <div className="formInput" key={input.id}>
                              <label>{input.label}</label>
                              <input
                                  type={input.type}
                                  placeholder={input.placeholder}
                                  defaultValue={!detail[input.id] && input.name ? _.get(detail, input.name, "defaultValue") : detail[input.id]}
                                  readOnly={input.canEdit}
                                  className={input.canEdit ? "readonly-input" : ""}
                                  name={input.id}
                              />
                            </div>
                        )
                ))}
                <LoadingButton loading={loadingUpdate} className="edit-button" type="submit">Cập nhật</LoadingButton>
              </form>)}
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                  Cập nhật thành công
                </Alert>
              </Snackbar>
            </div>
>>>>>>> e9c5031e0504351f57d4ff79f8419e3c884166ea
          </div>
        </div>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadingDetails}
        >
          <CircularProgress color="inherit"/>
        </Backdrop>
      </div>
  );
};

export default Edit;
