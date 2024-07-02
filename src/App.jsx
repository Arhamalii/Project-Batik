import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageAddOn from "../src/pages/manageAddOn";
import Home from "./pages/home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/manage-addons" element={<ManageAddOn />}></Route>
    </Routes>
  );
};

export default App;
