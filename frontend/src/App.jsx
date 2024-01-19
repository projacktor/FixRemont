import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx"
import "./styles/styleguide.css";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
