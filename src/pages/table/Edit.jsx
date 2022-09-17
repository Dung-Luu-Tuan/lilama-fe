import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useState, forwardRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Edit = (props) => {
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);
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
      .then((response) => setDetail(response.data.data));
  }, []);

  console.log(detail);

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

    console.log(data);

    var config = {
      method: "patch",
      url: `${props.api}/${detail.id}`,
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
                <div style={input.canEdit === "readonly" ? {color: '#95a5a6'} : {color:"#2d3436"}} className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    defaultValue={detail[input.id]}
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
