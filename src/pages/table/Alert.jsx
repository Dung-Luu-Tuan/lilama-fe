import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

const Alert1 = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Alert = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert1 onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {props.message}
        </Alert1>
      </Snackbar>
    </div>
  );
};

export default Alert;
