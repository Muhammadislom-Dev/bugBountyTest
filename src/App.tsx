import "./assets/base.scss";
import {Link, Route, Routes} from 'react-router-dom';
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
import ResetPassword from "./pages/reset-password";
import notFoundImg from "./assets/images/toppng.com-404-error-error-404-transparent-887x286.png";
import SubmitReport from "./components/submit-report";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";
import {QueryParamProvider} from "use-query-params";
import Settings from "./pages/settings/settings";
import Test from "./pages/test";
import Test2 from "./pages/test/test2";

const adminPaths = ['/admin', '/admin/companies', '/admin/users', '/admin/change-password',
    '/admin/reports'];

class NotFoundPage extends React.Component {
    render() {
        return <div>
            {/*todo style 404*/}
            <img src={notFoundImg} alt="not found"/>
            <p style={{textAlign: "center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}

function App() {
    return (
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
                <Route path={"/rules"} element={<Rules/>}/>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/team"} element={<OurTeam/>}/>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/programs"} element={<Directory/>}/>
                {adminPaths.map(path => (
                    <Route key={path} path={path} element={<AdminPanel/>}/>
                ))}
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/payment"} element={<Payment/>}/>
                <Route path={"/forgot-password"} element={<ForgotPasswordForm/>}/>
                <Route path={"/programs/:id"} element={<Program/>}/>
                <Route path="/reset-password/:code" element={<ResetPassword/>}/>
                <Route path={"/submit-report/:id"} element={<SubmitReport/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
                <Route path={"/test"} element={<Test/>}/>
                <Route path={"/test2"} element={<Test2/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </QueryParamProvider>
    );
}

export default App;
