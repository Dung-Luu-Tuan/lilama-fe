import { Navigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import { loginStore } from "../store/loginStore";
import {useEffect, useState} from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const isLogin = loginStore((state) => state.success);
  const [pending, setPending] = useState(true)

  useEffect(() => {
    if (window.localStorage.getItem("token")){
      loginStore.setState({success: true})
      setPending(false)
    }
    axios
        .get(`https://lilama18.herokuapp.com/api/user/me`, {
          headers: { Authorization: window.localStorage.getItem("token") },
        })
        .catch((error) => {
          loginStore.setState({success: false})
        }).finally(() => setPending(false))
  }, [])

  if(pending){
    return (
        <Skeleton />
    )
  }
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
