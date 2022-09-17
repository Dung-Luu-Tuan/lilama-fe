import axios from "axios";

export const useBlock = (props) => {
  const disable = () => {
    var config = {
      method: "post",
      url: `${props.api}/${props.id}/block`,
      headers: { Authorization: window.localStorage.getItem("token") },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return disable;
};
