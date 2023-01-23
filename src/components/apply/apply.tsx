import 'react-toastify/dist/ReactToastify.css';
import {Input} from "antd";
import TextArea from "antd/lib/input/TextArea";

import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./apply.module.scss";
import {toast, ToastContainer} from "react-toastify";

interface ApplyProps {
}

const {REACT_APP_API_ENDPOINT} = process.env;

type FormValues = {
    name: string;
    phoneNumberOrEmail: string;
    description: string;
};

const Apply: React.FC<ApplyProps> = () => {
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
        console.log(data)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/contactUs/create`, requestOptions);
            const data = await response.text();
            console.log(data);
            showToastMessage(data, response.status);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <section className={cls.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer/>
                <div className={cls["input-wrapper"]}>
                    <div className={cls["input-box"]}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <>
                                    <label className={cls.label}>Name</label>
                                    <Input
                                        {...register("name", {
                                            required: true,
                                            minLength: 3
                                        })}
                                        placeholder="Your name"
                                        onChange={onChange}
                                        className={cls.input}
                                        type="name"
                                    />
                                    {errors?.name?.type === "required" &&
                                        <p className={cls.error}>This field is required</p>}
                                    {errors?.name?.type === "minLength" && (
                                        <p className={cls.error}>Name cannot less than 3 characters</p>
                                    )}
                                </>
                            )}
                        ></Controller>
                    </div>

                    <div className={cls["input-box"]}>
                        <Controller
                            name="phoneNumberOrEmail"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <>
                                    <label className={cls.label}>Number or email</label>
                                    <Input
                                        {...register("phoneNumberOrEmail", {
                                            required: true,
                                            pattern: /^(\+[0-9]{8,16}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
                                        })}
                                        placeholder="+998xxxxxxxxx or email"
                                        onChange={onChange}
                                        className={cls.input}
                                        type="phoneNumberOrEmail"
                                    />

                                    {errors?.phoneNumberOrEmail?.type === "required" &&
                                        <p className={cls.error}>This field is required</p>}
                                    {errors?.phoneNumberOrEmail?.type === "pattern" && (
                                        <p className={cls.error}>Number or email is not correct</p>
                                    )}
                                </>
                            )}
                        ></Controller>
                    </div>
                </div>
                <label className={cls.label}>About your project</label>

                <Controller
                    name="description"
                    defaultValue=""
                    control={control}
                    render={({field: {onChange, onBlur, value, ref}}) => (
                        <>
                            <TextArea onChange={onChange} placeholder="Write message"/>
                        </>
                    )}
                ></Controller>
                <input className={cls.btn} type="submit" value={"Send message"}/>
            </form>
        </section>
    );
};
export default Apply;
