import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useState, forwardRef, useRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={8} ref={ref} variant="filled" {...props} />;
});

const Create = (props) => {
  const [open, setOpen] = useState(false);
  let errorMessage = useRef();

  const handleClick = (props) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements);

    let data;

    for (let i = 0; i < e.target.elements.length - 1; i++) {
      data = {
        [e.target.elements[i].name]: e.target.elements[i].value,
        ...data,
      };
    }

    console.log(data);

    var config = {
      method: "post",
      url: `${props.api_create}`,
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
        errorMessage.current = error.response.data.error;
        handleClick();
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">Tạo mới</div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {props.formInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.id}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessage.current}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Create;
