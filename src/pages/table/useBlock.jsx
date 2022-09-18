import axios from "axios";
// import Alert from "./Alert";
export const useBlock = (props) => {
  const disable = () => {
    var config = {
      method: "post",
      url: `${props.api}/${props.id}/block`,
      headers: { Authorization: window.localStorage.getItem("token") },
    };

    axios(config)
      .then(function (response) {
        alert("Disable" + response.data.success);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return disable;
};
