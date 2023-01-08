import "./assets/base.scss";
import {Route, Routes} from 'react-router-dom';
import Rules from "./pages/rules";
import Main from "./pages/main";
import OurTeam from "./pages/our-team";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
    return (
        <Routes>
            <Route path={"/rules"} element={<Rules/>}/>
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/team"} element={<OurTeam/>}/>
            <Route path={"/login"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
    );
}

export default App;
