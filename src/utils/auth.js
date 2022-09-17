import {loginStore} from "../store/loginStore";

export function logout(){
  window.localStorage.removeItem("token")
  loginStore.setState({success: false})
}

export function handleUnauthenticated(error, navigate){
  console.log(error)
  if (error.response?.data?.error === "Not authenticated"){
    logout()
    navigate("/login")
  }
}