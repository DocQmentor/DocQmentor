import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Table from "./components/Table";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/table" element={<Table/>} />
    </Routes>
  );
}

export default App;