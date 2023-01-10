import React from "react";
import LoginForm from "../../components/login-form";

interface SignIn {}

const SignIn: React.FC<SignIn> = () => (
    <>
        <LoginForm/>
    </>
);

export default SignIn;