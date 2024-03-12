import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterCoach from "./Registration/RegisterCoach";
import RegisterUser from "./Registration/RegisterUser";
import LoginCoach from "./Registration/LoginCoach";
import LoginUser from "./Registration/LoginUser";
import { AuthProvider } from "./Auth/AuthProvider";
import PrivateRoute from "./Auth/PrivateRoute";

//import Home
import Home from "./Home/Home";
import AccountCreate from "./Appointment/AccountCreate";
import Card from "./Appointment/Card";

function App() {
  // const { isAuthenticated } = useAuth();
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCoach />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/loginCoach" element={<LoginCoach />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/createAccount" element={<AccountCreate />} />
        <Route path="/coacher" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
