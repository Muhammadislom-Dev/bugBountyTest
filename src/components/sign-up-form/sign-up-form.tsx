import {Input} from "antd";
import Logo from "../../assets/images/BBP.svg";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./sign-up-form.module.scss";
import {Link} from "react-router-dom";

interface SignupProps {
}

const {REACT_APP_API_ENDPOINT} = process.env;

type FormValues = {
    fullName: string;
    usernameForSystem: string;
    username: string;
    password: string;
};

const SignUpForm: React.FC<SignupProps> = () => {

    const showToastMessage = (message: string, status: number) => {
        if (status === 200) {
            toast.success(`${message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(function () {
                window.location.href = window.location.href.split("?")[0]
            }, 5000)

        } else if (status === 400) {
            toast.error(
                `${message}`,
                {
                    position: toast.POSITION.TOP_CENTER
                });
            console.log(message)
        }

    };

    const {
        control,
        handleSubmit,
        setValue,
        setError,
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
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/auth/signup`, requestOptions);
            const data = await response.text();
            console.log(data);
            showToastMessage(data, response.status);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        setError("password", {
            types: {
                required: "This is required",
                minLength: "This is minLength"
            }
        });
    }, [setValue])
    return (
        <section className={cls.wrapper}>
            <div className={cls["form-div"]}>
                <div className={cls["title"]}>Sign up to BBP.uz</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer/>
                    <div className={cls["input-wrapper"]}>
                        <div className={cls["input-box"]}>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{minLength: 3}}
                                render={({field: {onChange, onBlur, value, ref}}) => (
                                    <>
                                        <label className={cls.label}>Full name</label>
                                        <Input
                                            placeholder="Your full name"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="name"
                                        />
                                        {errors.fullName &&
                                            <p className={cls.error}>Full name must be at least 3 characters long</p>}
                                    </>
                                )}
                            ></Controller>
                        </div>
                        <div className={cls["input-box"]}>
                            <Controller
                                name="usernameForSystem"
                                control={control}
                                defaultValue=""
                                rules={{minLength: 3, maxLength: 15}}
                                render={({field: {onChange, onBlur, value, ref}}) => (
                                    <>
                                        <label className={cls.label}>Username</label>
                                        <Input
                                            placeholder="Choose username"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="name"
                                        />
                                        {errors.usernameForSystem &&
                                            <p className={cls.error}>Full name must be at least 3 characters long and
                                                maximum 15 character long</p>}
                                    </>
                                )}
                            ></Controller>
                        </div>

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
                                            {...register("password", {
                                                required: true,
                                                minLength: 8,
                                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                                            })}
                                            placeholder="xxxxxxxx"
                                            onChange={onChange}
                                            className={cls.input}
                                            type="password"
                                        />

                                        {errors?.password?.type === "required" && <p className={cls.error}>This field is required</p>}
                                        {errors?.password?.type === "minLength" && (
                                            <p className={cls.error}>First name cannot less than 8 characters</p>
                                        )}
                                        {errors?.password?.type === "pattern" && (
                                            <p className={cls.error}>Password must include one special character at least and capital letter
                                                and number and should not contain spaces</p>
                                        )}
                                    </>
                                )}
                            ></Controller>
                        </div>
                    </div>
                    <input className={cls.btn} type="submit" value={"Sign up"}/>
                    <Link className={cls["have-account-link"]} to={"/login"}>
                        Do you already have account?
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
export default SignUpForm;
