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
import Companies from "./pages/admin-panel/components/companies";
import Users from "./pages/admin-panel/components/users";

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
            <Route path={"/admin"} element={<AdminPanel/>}/>
            <Route path='/companies' element={<Companies/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
    );
}

export default App;
