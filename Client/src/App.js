import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import LandingPage from "./Pages/Landingpage/Landingpage";
import Registerpage from "./Pages/Registerpage/Registerpage";
import Loginpage from "./Pages/Loginpage/Loginpage";
import User from "./Userpage/User";
import Admin from "./Adminpage/Admin";
import ProtectedRouter from "./Protectedcomp/ProtectedRouter"
import Home from "./Homecomp/home";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            />

            <Route
              path="/user"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRouter>
                  <Admin />
                </ProtectedRouter>
              }
            />
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
