import axios from "axios";

export const useDisable = (props) => {
  const disable = () => {
    var config = {
      method: "post",
      url: `${props.api}/${props.id}/disable`,
      headers: { Authorization: window.localStorage.getItem("token") },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.success === true) {
          alert("Thành công");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return disable;
};
