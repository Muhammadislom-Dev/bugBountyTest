import {Input} from "antd";
import Logo from "../../assets/images/BBP.svg";


import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./forgot-password-form.module.scss";
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

const ForgotPasswordForm: React.FC<ApplyProps> = () => {

    const {control, handleSubmit} = useForm<FormValues>();
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    return (
        <section className={cls.wrapper}>
            <div className={cls["form-div"]}>
                <div className={cls["title"]}>Forgot password</div>
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
                    </div>
                    <input className={cls.btn} type="submit" value={"Send"}/>
                    <Link className={cls["have-account-link"]} to={"/login"}>
                        sign in
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
export default ForgotPasswordForm;
