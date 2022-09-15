import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useState, forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Edit = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements);

    let data;
    for (let i = 0; i < e.target.elements.length - 1; i++) {
      if (!e.target.elements[i].readOnly) {
        data = {
          [e.target.elements[i].name]: e.target.elements[i].value,
          ...data,
        };
      }
    }

    var config = {
      method: "patch",
      url: `${props.api}/${location.state.id}`,
      headers: { Authorization: window.localStorage.getItem("token") },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success === true) {
          handleClick();
        }
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
        <div className="top">{/* <h1>{title}</h1> */}</div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {props.formInputs.map((input, index) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    defaultValue={location.state[input.id]}
                    readOnly={input.canEdit}
                    name={input.id}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
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
        </div>
      </div>
    </div>
  );
};

export default Edit;
