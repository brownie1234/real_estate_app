import React from "react";
import "./App.css";
import Login from "./components/Login";
import Staff from "./components/Staff";
import Tenant from "./components/Tenant";
import Manager from "./components/Manager";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/staff/:id" element={<Staff />} />
          <Route path="/tenant/:id" element={<Tenant />} />
          <Route path="/manager/:id" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;