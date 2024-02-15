import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

import Register from "./Register";

import ManagerDashboard from "./ManagerDashboard";
import Home from "./Home";
import Crud from "./Crud";
import FilterTable from "./Filter/FilterTable";

import { Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<ManagerDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/filter" element={<FilterTable />} />
      </Routes>

      {/* <Login /> */}
      {/* <div class="container justify-content-center text-center mt-5">  */}
      {/* <Lifecycle /> */}
      {/* <br /> */}

      {/*  */}
      {/* <State /> */}
    </div>
  );
}

export default App;
