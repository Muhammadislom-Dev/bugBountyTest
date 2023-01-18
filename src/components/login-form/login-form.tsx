import {Input} from "antd";
import Logo from "../../assets/images/BBP.svg";


import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./login-form.module.scss";
import {Link} from "react-router-dom";

interface ApplyProps {
}

type FormValues = {
    name: string;
    number: string;
    area: string;
    email: string;
    password: string;
};

const LoginForm: React.FC<ApplyProps> = () => {


    const {control, handleSubmit} = useForm<FormValues>();
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    return (
        <section className={cls.wrapper}>
            <div className={cls["form-div"]}>
                <div className={cls["title"]}>Sign in to BBP.uz</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cls["input-wrapper"]}>

                        <div className={cls["input-box"]}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, onBlur, value, ref}}) => (
                                    <>
                                        <label className={cls.label}>Email</label>
                                        <Input
                                            placeholder="your email"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="email"
                                        />
                                    </>
                                )}
                            ></Controller>
                        </div>
                        <div className={cls["input-box"]}>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, onBlur, value, ref}}) => (
                                    <>
                                        <label className={cls.label}>Password</label>
                                        <Input
                                            placeholder="xxxxxxxx"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="password"
                                        />
                                    </>
                                )}
                            ></Controller>
                        </div>
                        <Link className={cls["forgot-password-link"]} to={"/forgot-password"}>
                            <div>Forgot password?</div>
                        </Link>
                    </div>
                    <input className={cls.btn} type="submit" value={"Sign in"}/>
                    <Link className={cls["have-account-link"]} to={"/signup"}>
                        Not registered yet
                    </Link>
                </form>

            </div>
            <div className={cls["div-logo-name"]}>
                <Link to={"/"}><img src={Logo} alt="logo"/></Link>
                <div>Bug Bounty Program</div>
            </div>
        </section>
    );
};
export default LoginForm;
