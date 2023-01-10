import React from "react";
import ForgotPasswordForm from "../../components/forgot-password-form";

interface ForgotPassword {}

const SignIn: React.FC<ForgotPassword> = () => (
    <>
        <ForgotPasswordForm/>
    </>
);

export default SignIn;