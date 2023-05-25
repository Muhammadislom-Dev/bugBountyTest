import "./assets/base.scss";
import { Link, Route, Routes } from "react-router-dom";
import Rules from "./pages/rules";
import Main from "./pages/main";
import OurTeam from "./pages/our-team";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Program from "./pages/program";
import Directory from "./pages/directory";
import AdminPanel from "./pages/admin-panel";
import Profile from "./pages/profile";
import Payment from "./pages/payment";
import ForgotPasswordForm from "./components/forgot-password-form";
import ResetPassword from "./pages/reset-password";
import notFoundImg from "./assets/images/toppng.com-404-error-error-404-transparent-887x286.png";
import SubmitReport from "./components/submit-report";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { QueryParamProvider } from "use-query-params";
import Settings from "./pages/settings/settings";
import Test from "./pages/test";
import Test2 from "./pages/test/test2";
import { claim } from "./auth/auth.model";
import AuthenticationContext from "./auth/authenticationContext";
import { useEffect, useState } from "react";
import React from "react";
import Authorized from "./auth/authorized";
import { getClaims } from "./auth/handleJWT";
import './index.css'

const adminPaths = [
  "/admin",
  "/admin/companies",
  "/admin/users",
  "/admin/change-password",
  "/admin/reports",
];

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        {/*todo style 404*/}
        <img src={notFoundImg} alt="not found" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}

function App() {
  const [claims, setClaims] = useState<claim[]>([
    // {name: "email", value: "nuriddinqurbonboyev@mail.ru"}
    // , {name: "role", value: "admin"}
  ]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Routes>
          <Route path={"/rules"} element={<Rules />} />
          <Route path={"/"} element={<Main />} />
          <Route path={"/team"} element={<OurTeam />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path="/reset-password/:code" element={<ResetPassword />} />
          <Route path={"/forgot-password"} element={<ForgotPasswordForm />} />
          {/*todo open close routes*/}

          {adminPaths.map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <Authorized
                  authorized={<AdminPanel />}
                  unauthorized={<NotFoundPage />}
                  role={"ADMIN"}
                />
              }
            />
          ))}

          <Route
            path={"/programs"}
            element={
              <Authorized
                authorized={<Directory />}
                unauthorized={<NotFoundPage />}
              />
            }
          />
          <Route
            path={"/profile"}
            element={
              <Authorized
                authorized={<Profile />}
                unauthorized={<NotFoundPage />}
              />
            }
          />
          <Route
            path={"/payment"}
            element={
              <Authorized
                authorized={<Payment />}
                unauthorized={<NotFoundPage />}
              />
            }
          />
          <Route
            path={"/programs/:id"}
            element={
              <Authorized
                authorized={<Program />}
                unauthorized={<NotFoundPage />}
              />
            }
          />
          <Route
            path={"/submit-report/:id"}
            element={
              <Authorized
                authorized={<SubmitReport />}
                unauthorized={<NotFoundPage />}
              />
            }
          />
          <Route
            path={"/settings"}
            element={
              <Authorized
                authorized={<Settings />}
                unauthorized={<NotFoundPage />}
              />
            }
          />

          <Route path={"/test"} element={<Test />} />
          <Route path={"/test2"} element={<Test2 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthenticationContext.Provider>
    </QueryParamProvider>
  );
}

export default App;
