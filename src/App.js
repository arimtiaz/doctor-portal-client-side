import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import SignUp from "./SignUp/SignUp";
import RequireAuth from "./assets/RequireAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
