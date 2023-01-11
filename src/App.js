import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
