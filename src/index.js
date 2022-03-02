import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ToastContainer
        autoClose={4000}
        position="top-center"
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        transition={Flip}
      />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
