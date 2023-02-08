import React, {useState} from "react";
import type {RcFile, UploadFile, UploadProps} from 'antd/es/upload/interface';
import {UploadChangeParam} from "antd/es/upload";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {Input, message, Upload} from "antd";
import Navbar from "../../components/navbar";
import {Controller, useForm} from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";
import cls from "./settings.module.scss";


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

type FormValues = {
    fullName: string;
    usernameForSystem: string;
    imageUrl: string;
    website: string;
    country: string;
    hackerOneURL: string;
    linkedInUrl: string;
    intro: string;
};

const {REACT_APP_API_ENDPOINT} = process.env;

const Settings: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

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
        // event.preventDefault();
        // if (!isDirty || !isValid) {
        //     return
        // }
        if (imageUrl != null) {
            data.imageUrl = imageUrl;
        }
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/profiles/update`, requestOptions);
            const data = await response.text();
            console.log(data);
            // showToastMessage(data, response.status);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Navbar/>
            <section className="profile-settings">
                <h2>Profile settings</h2>
                <p>This information except (*) appears on your public profile, next to your comments, and in any reports
                    that you submit </p>

                <div className="form-group">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={cls["input-wrapper"]}>
                            <div className={cls["input-box"]}>
                                <Controller
                                    name="imageUrl"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>Image</label>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                action={`${REACT_APP_API_ENDPOINT}/files/test`}
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                            >
                                                {imageUrl ? <img src={imageUrl} alt="avatar"
                                                                 style={{width: '100%'}}/> : uploadButton}
                                            </Upload>
                                            <p>Picture should be less than 2048x2048px and sized under 1 MB </p>
                                        </>
                                    )}
                                ></Controller>
                            </div>
                            <div className={cls["input-box"]}>
                                <Controller
                                    name="fullName"
                                    control={control}
                                    defaultValue=""
                                    rules={{minLength: 3}}
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>Full name(*)</label>
                                            <Input
                                                placeholder="Your full name"
                                                onChange={onChange}
                                                className={cls.input}
                                                type="name"
                                            />
                                            {errors.fullName &&
                                                <p className={cls.error}>Full name must be at least 3 characters
                                                    long</p>}
                                        </>
                                    )}
                                ></Controller>
                            </div>


                            <div className={cls["input-box"]}>
                                <label className={cls.label}>Email</label>
                                <Input
                                    placeholder="your email"
                                    className={cls.input}
                                    type="email"
                                />
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
                                                <p className={cls.error}>Full name must be at least 3 characters long
                                                    and
                                                    maximum 15 character long</p>}
                                        </>
                                    )}
                                ></Controller>
                            </div>

                            <div className={cls["input-box"]}>
                                <Controller
                                    name="website"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>Website</label>
                                            <Input
                                                placeholder="https://<website>"
                                                onChange={onChange}
                                                className={cls.input}
                                                type="url"
                                            />
                                        </>
                                    )}
                                ></Controller>
                            </div>

                            <div className={cls["input-box"]}>
                                <Controller
                                    name="hackerOneURL"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>HackerOne handle</label>
                                            <Input
                                                placeholder="https://hackerone.com/username"
                                                onChange={onChange}
                                                className={cls.input}
                                                type="url"
                                            />
                                        </>
                                    )}
                                ></Controller>
                            </div>
                            <div className={cls["input-box"]}>
                                <Controller
                                    name="linkedInUrl"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>LinkedIn handle</label>
                                            <Input
                                                placeholder="https://linkedin.com/username"
                                                onChange={onChange}
                                                className={cls.input}
                                                type="url"
                                            />
                                        </>
                                    )}
                                ></Controller>
                            </div>
                            <div className={cls["input-box"]}>
                                <Controller
                                    name="linkedInUrl"
                                    control={control}
                                    defaultValue=""
                                    render={({field: {onChange, onBlur, value, ref}}) => (
                                        <>
                                            <label className={cls.label}>Intro</label>
                                            <TextArea placeholder="write ..." allowClear onChange={onChange}/>
                                        </>
                                    )}
                                ></Controller>
                            </div>
                            <input className={cls.btn} type="submit" value={"Sign up"}/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Settings;
