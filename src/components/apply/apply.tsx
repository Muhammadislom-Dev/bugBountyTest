import {Input} from "antd";
import TextArea from "antd/lib/input/TextArea";

import React from "react";
import {Controller, useForm} from "react-hook-form";
import cls from "./apply.module.scss";

interface ApplyProps {
}

type FormValues = {
    name: string;
    number: string;
    area: string;
};

const Apply: React.FC<ApplyProps> = () => {
    const {control, handleSubmit} = useForm<FormValues>();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };

    return (
        <section className={cls.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        placeholder="Your name"
                                        onChange={onChange}
                                        className={cls.input}
                                        type="name"
                                    />
                                </>
                            )}
                        ></Controller>
                    </div>

                    <div className={cls["input-box"]}>
                        <Controller
                            name="number"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <>
                                    <label className={cls.label}>Number</label>
                                    <Input
                                        placeholder="+9989x xxx-xx-xx"
                                        onChange={onChange}
                                        className={cls.input}
                                        type="number"
                                    />
                                </>
                            )}
                        ></Controller>
                    </div>
                </div>
                <label className={cls.label}>About your project</label>

                <Controller
                    name="area"
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
