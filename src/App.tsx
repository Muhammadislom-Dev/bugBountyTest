import "./assets/base.scss";
import {Route, Routes} from 'react-router-dom';
import Rules from "./pages/rules";
import Main from "./pages/main";
import OurTeam from "./pages/our-team";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Program from "./pages/program";
import Directory from "./pages/directory";
import AdminPanel from "./pages/admin-panel";
import Profile from "./pages/profile";
import React from "react";
import Payment from "./pages/payment";
import ForgotPasswordForm from "./components/forgot-password-form";
import {ToastContainer} from "react-toastify";
import ResetPassword from "./pages/reset-password";
// import Settings from "./pages/settings/settings";

const adminPaths = ['/admin', '/admin/companies', '/admin/users', '/admin/change-password',
    '/admin/reports'];

function App() {
    return (
        <Routes>
            <Route path={"/rules"} element={<Rules/>}/>
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/team"} element={<OurTeam/>}/>
            <Route path={"/login"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/program"} element={<Program/>}/>
            <Route path={"/programs"} element={<Directory/>}/>
            {adminPaths.map(path => (
                <Route key={path} path={path} element={<AdminPanel/>}/>
            ))}
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/payment"} element={<Payment/>}/>
            <Route path={"/forgot-password"} element={<ForgotPasswordForm/>}/>
            {/*<Route path={"/reset-password"} element={<ResetPassword/>}/>*/}

            <Route path="/reset-password/:code" element={<ResetPassword/>}/>
            {/*<Route path={"/settings"} element={<Settings/>}/>*/}
        </Routes>
    );
}

export default App;
