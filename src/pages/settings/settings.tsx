import React, {useEffect, useState} from "react";
import type {RcFile, UploadFile, UploadProps} from 'antd/es/upload/interface';
import {UploadChangeParam} from "antd/es/upload";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {Input, message, Spin, Upload} from "antd";
import Navbar from "../../components/navbar";
import {Controller, useForm} from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";
import cls from "./settings.module.scss";
import {getToken} from "../../auth/handleJWT";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
    email: string;
    usernameForSystem: string;
    imageUrl: string;
    website: string;
    hackerOneUsername: string;
    linkedInUsername: string;
    intro: string;
};


const {REACT_APP_API_ENDPOINT} = process.env;

const Settings: React.FC = () => {
        const [loadingProfile, setLoadingProfile] = useState(true);
        const [loading, setLoading] = useState(false);
        const [imageUrl, setImageUrl] = useState<string>();
        const [defaultData, setDefaultData] = useState<FormValues>({
            email: "",
            fullName: "",
            hackerOneUsername: "",
            imageUrl: "",
            intro: "",
            linkedInUsername: "",
            usernameForSystem: "",
            website: ""
        });
        const {
            control,
            handleSubmit,
            setValue,
            reset,
            setError,
            register,
            formState: {errors, isDirty, isValid}
        } = useForm<FormValues>({
            // criteriaMode: 'all'
        });

        useEffect(() => {
            const fetchProfile = async () => {
                try {
                    const response = await fetch(`${REACT_APP_API_ENDPOINT}/profiles/signedIn`, {
                        headers: {
                            'Authorization': `Bearer ${getToken()}`
                        }
                    });
                    const data = await response.json();
                    //console.log(data);
                    setDefaultData(
                        {
                            fullName: data.fullName,
                            usernameForSystem: data.usernameForSystem,
                            email: data.email,
                            imageUrl: data.imageUrl,
                            website: data.website,
                            hackerOneUsername: data.hackerOneUsername,
                            linkedInUsername: data.linkedInUsername,
                            intro: data.intro,
                        }
                    );
                    setImageUrl(data.imageUrl);

                    setLoadingProfile(false);
                } catch
                    (error) {
                    console.log(error);
                    setLoadingProfile(false);
                }
            };
            fetchProfile();

        }, []);


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


        const onSubmit = async (data: FormValues, event: any) => {
            // event.preventDefault();
            // if (!isDirty || !isValid) {
            //     return
            // }
            if (imageUrl != null && imageUrl !== defaultData.imageUrl) {
                data.imageUrl = imageUrl;
            }

            console.log(data);

            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify(data)
            };

            try {
                //console.log(requestOptions.body);
                const response = await fetch(`${REACT_APP_API_ENDPOINT}/profiles/update`, requestOptions);
                const data = await response.text();
                //console.log(data);
                showToastMessage(data, response.status);
            } catch (error) {
                //console.log(error);
            }
        };

        const showToastMessage = (message: string, status: number) => {
            if (status === 200) {
                toast.success(`${message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(function () {
                    window.location.reload();
                }, 5000)
            } else if (status === 400) {
                toast.error(
                    `${message}`,
                    {
                        position: toast.POSITION.TOP_CENTER
                    });
                //console.log(message)
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
                        {loadingProfile ? (
                            <div className="loading-spinner">
                                <Spin size="large"/>
                            </div>
                        ) : (

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <ToastContainer/>
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
                                            rules={{minLength: 3}}
                                            render={({field: {onChange, onBlur, value, ref}}) => (
                                                <>
                                                    <label className={cls.label}>Full name(*)</label>
                                                    <Input
                                                        name="fullName"
                                                        defaultValue={defaultData.fullName}
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
                                            defaultValue={defaultData.email}
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
                                                        defaultValue={defaultData.usernameForSystem}
                                                        placeholder="Choose username"
                                                        onChange={onChange}
                                                        className={cls.input}
                                                        type="name"
                                                    />
                                                    {errors.usernameForSystem &&
                                                        <p className={cls.error}>Full name must be at least 3 characters
                                                            long
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
                                            render={({field: {onChange, onBlur, value, ref}}) => (
                                                <>
                                                    <label className={cls.label}>Website</label>
                                                    <Input
                                                        defaultValue={defaultData.website}
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
                                            name="hackerOneUsername"
                                            control={control}
                                            render={({field: {onChange, onBlur, value, ref}}) => (
                                                <>
                                                    <label className={cls.label}>HackerOne handle</label>
                                                    <Input
                                                        defaultValue={defaultData.hackerOneUsername}
                                                        placeholder="username"
                                                        onChange={onChange}
                                                        className={cls.input}
                                                        type="username"
                                                    />
                                                </>
                                            )}
                                        ></Controller>
                                    </div>
                                    <div className={cls["input-box"]}>
                                        <Controller
                                            name="linkedInUsername"
                                            control={control}
                                            render={({field: {onChange, onBlur, value, ref}}) => (
                                                <>
                                                    <label className={cls.label}>LinkedIn handle</label>
                                                    <Input
                                                        defaultValue={defaultData.linkedInUsername}
                                                        placeholder="username"
                                                        onChange={onChange}
                                                        className={cls.input}
                                                        type="username"
                                                    />
                                                </>
                                            )}
                                        ></Controller>
                                    </div>
                                    <div className={cls["input-box"]}>
                                        <Controller
                                            name="intro"
                                            control={control}
                                            render={({field: {onChange, onBlur, value, ref}}) => (
                                                <>
                                                    <label className={cls.label}>Intro</label>
                                                    <TextArea
                                                        placeholder="write ..."
                                                        allowClear
                                                        onChange={onChange}
                                                        defaultValue={defaultData.intro}
                                                    />
                                                </>
                                            )}
                                        ></Controller>
                                    </div>
                                    <Input className={cls.btn} type="submit" value={"Change"}/>
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </>
        );
    }
;

export default Settings;
