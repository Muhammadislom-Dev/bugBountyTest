import {Input} from "antd";
import Logo from "../../assets/images/BBP.svg";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./login-form.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {getClaims, saveToken} from "../../auth/handleJWT";
import AuthenticationContext from "../../auth/authenticationContext";

interface LoginFormProps {
}

const {REACT_APP_API_ENDPOINT} = process.env;


type FormValues = {
    username: string;
    password: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {

    const {update} = React.useContext(AuthenticationContext);

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        register,
        formState: {errors, isDirty, isValid}
    } = useForm<FormValues>({
        criteriaMode: 'all',
    });
    const onSubmit = async (data: FormValues, event: any) => {
        event.preventDefault();
        if (!isDirty || !isValid) {
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/auth/signIn`, requestOptions);
            let authData = await response.json();
            console.log(authData);
            saveToken(authData)
            update(getClaims());
            navigate('/');
            // const data = await response.text();
            // console.log(data);
            // showToastMessage(data, response.status);
        } catch (error) {
            console.log(error);
        }
    };
    //todo work with statuses
    const showToastMessage = (message: string, status: number) => {
        if (status === 200) {
            toast.success(`${message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            // setTimeout(function () {
            //     window.location.href = window.location.href.split("?")[0]
            // }, 5000)

        } else if (status === 400) {
            toast.error(
                `${message}`,
                {
                    position: toast.POSITION.TOP_CENTER
                });
            console.log(message)
        }

    };


    return (
        <section className={cls.wrapper}>
            <div className={cls["form-div"]}>
                <div className={cls["title"]}>Sign in to BBP.uz</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer/>
                    <div className={cls["input-wrapper"]}>
                        <div className={cls["input-box"]}>
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                rules={{pattern: /\S+@\S+\.\S+/}}
                                render={({field: {onChange, onBlur, value, ref}}) => (
                                    <>
                                        <label className={cls.label}>Email</label>
                                        <Input
                                            placeholder="your email"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="email"
                                        />
                                        {errors.username &&
                                            <p className={cls.error}>Email is not valid</p>}
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
                                            className={cls.input}
                                            type="password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 8,
                                            })}
                                            onChange={onChange}
                                        />
                                        {errors?.password?.type === "required" &&
                                            <p className={cls.error}>This field is required</p>}
                                        {errors?.password?.type === "minLength" && (
                                            <p className={cls.error}>First name cannot less than 8 characters</p>
                                        )}
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
