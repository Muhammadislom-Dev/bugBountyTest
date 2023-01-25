import React, {useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import cls from "../../components/sign-up-form/sign-up-form.module.scss";
import {toast, ToastContainer} from "react-toastify";
import {Controller, useForm} from "react-hook-form";
import {Input} from "antd";
import {Link, useParams} from "react-router-dom";
import Logo from "../../assets/images/BBP.svg";
import ErrorPage from "../error-page/ErrorPage";

interface ResetPassword {
}

const {REACT_APP_API_ENDPOINT} = process.env;

type FormValues = {
    code: string;
    encodedEmail: string;
    password: string;
    prePassword: string;
};


const ResetPassword: React.FC<ResetPassword> = () => {

    const {code} = useParams();
    const navigate = useNavigate();
    const [encodedEmail, setEncodedEmail] = useState('');
    const [error1, setError1] = useState('');

    useEffect(() => {


        fetch(`http://localhost:8080/api/auth/reset?code=${code}`)
            .then((response) => {
                if (response.status === 200) {
                    response.text().then(value => {
                        console.log(value)
                        setEncodedEmail(value)
                    });
                } else {
                    response.text().then(value => {
                        console.log(value)
                        setError1(value)
                    });
                }
            })
    }, [code]);

    const showToastMessage = (message: string, status: number) => {
        if (status === 200) {
            toast.success(`${message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(function () {
                navigate("/login")
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
        data.encodedEmail = encodedEmail;
        data.code = code!.toString();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        console.log(requestOptions)
        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/auth/reset`, requestOptions);
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


    return (<>
        {error1 ? <ErrorPage error={error1}/> :
            <section className={cls.wrapper}>
                <div className={cls["form-div"]}>
                    <div className={cls["title"]}>Reset your password</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer/>
                        <div className={cls["input-wrapper"]}>
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

                                            {errors?.password?.type === "required" &&
                                                <p className={cls.error}>This field is required</p>}
                                            {errors?.password?.type === "minLength" && (
                                                <p className={cls.error}>First name cannot less than 8 characters</p>
                                            )}
                                            {errors?.password?.type === "pattern" && (
                                                <p className={cls.error}>Password must include one special character at
                                                    least and capital letter
                                                    and number and should not contain spaces</p>
                                            )}
                                        </>
                                    )}
                                ></Controller>
                            </div>
                            <div className={cls["input-box"]}>
                                <Controller
                                    name="prePassword"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>Repeat Password</label>
                                            <Input
                                                {...register("prePassword", {
                                                    required: true,
                                                    minLength: 8,
                                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                                                })}
                                                placeholder="xxxxxxxx"
                                                onChange={onChange}
                                                className={cls.input}
                                                type="password"
                                            />

                                            {errors?.prePassword?.type === "required" &&
                                                <p className={cls.error}>This field is required</p>}
                                            {errors?.prePassword?.type === "minLength" && (
                                                <p className={cls.error}>First name cannot less than 8 characters</p>
                                            )}
                                            {errors?.prePassword?.type === "pattern" && (
                                                <p className={cls.error}>Password must include one special character at
                                                    least and capital letter
                                                    and number and should not contain spaces</p>
                                            )}
                                        </>
                                    )}
                                ></Controller>
                            </div>
                        </div>
                        <input className={cls.btn} type="submit" value={"Reset password"}/>
                    </form>

                </div>
                <div className={cls["div-logo-name"]}>
                    <Link to={"/"}><img src={Logo} alt="logo"/></Link>
                    <div>Bug Bounty Program</div>
                </div>
            </section>
        }
    </>)
};

export default ResetPassword;