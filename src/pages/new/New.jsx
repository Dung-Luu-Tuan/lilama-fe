// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";

// import axios from "axios";
// import FileUpload from "react-material-file-upload";
// import Button from "@mui/material/Button";

// const New = ({ inputs, title }) => {
//   // const [file, setFile] = useState("");
//   // console.log(file.name);

//   // return (
//   //   <div className="new">
//   //     <Sidebar />
//   //     <div className="newContainer">
//   //       <Navbar />
//   //       <div className="top">
//   //         <h1>{title}</h1>
//   //       </div>
//   //       <div className="bottom">
//   //         <div className="left">
//   //           <img
//   //             src={
//   //               file
//   //                 ? URL.createObjectURL(file)
//   //                 : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//   //             }
//   //             alt=""
//   //           />
//   //         </div>
//   //         <div className="right">
//   //           <form>
//   //             <div className="formInput">
//   //               <label htmlFor="file">
//   //                 Image: <DriveFolderUploadOutlinedIcon className="icon" />
//   //               </label>
//   //               <input
//   //                 type="file"
//   //                 id="file"
//   //                 onChange={(e) => setFile(e.target.files[0])}
//   //                 style={{ display: "none" }}
//   //               />
//   //             </div>

//   //             {inputs.map((input) => (
//   //               <div className="formInput" key={input.id}>
//   //                 <label>{input.label}</label>
//   //                 <input type={input.type} placeholder={input.placeholder} />
//   //               </div>
//   //             ))}
//   //             <button>Send</button>
//   //           </form>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   const [selectedFile, setSelectedFile] = useState([]);
//   console.log(selectedFile);

//   const upload = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("file", selectedFile[0]);

//     axios
//       .post("https://lilama18.herokuapp.com/api/project/upload/verify", data, {
//         headers: {
//           Authorization: window.localStorage.getItem("token"),
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(selectedFile[0]);
//   };

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="container">
//           <FileUpload value={selectedFile} onChange={setSelectedFile} />
//           <Button className="uploadBtn" variant="contained" onClick={upload}>
//             Send
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;
