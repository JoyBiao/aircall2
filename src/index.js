import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CallDetail from "./components/CallDetail/CallDetail.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail/:id" element={<CallDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
