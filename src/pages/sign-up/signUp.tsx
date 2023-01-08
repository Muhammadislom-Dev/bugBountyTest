import React from "react";
import cls from "./signUp.module.scss";
import Logo from "../../assets/images/BBP.svg";
import {Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import SignUpForm from "../../components/sign-up-form";

interface SignUp {
}


const SignUp: React.FC<SignUp> = () => (


    <>
        <SignUpForm/>
    </>
);


export default SignUp;