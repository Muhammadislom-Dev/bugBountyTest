import React, {useState} from "react";
import type {RcFile, UploadFile, UploadProps} from 'antd/es/upload/interface';
import {UploadChangeParam} from "antd/es/upload";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {message, Upload} from "antd";
import Navbar from "../../components/navbar";
import {Controller, useForm} from "react-hook-form";
import cls from "./test.module.scss";
import axios from "axios";


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
    imageFileId: string;
};

const {REACT_APP_API_ENDPOINT} = process.env;

const Test: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleImageUpload = async (event: any) => {
        const image = event.target.files[0];

        const formData = new FormData();
        formData.append('image', image);
        try {
            const response = await axios.post('http://localhost:8080/api/files/avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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

    const onSubmit = async (event: any) => {
        // event.preventDefault();
        // if (!isDirty || !isValid) {
        //     return
        // }
        const image = event.target.files[0];
        const data = new FormData();
        data.append('image', image);

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        console.log(requestOptions)
        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/auth/signup`, requestOptions);
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
                                    name="imageFileId"
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
                            <input className={cls.btn} type="submit" value={"Sign up"}/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Test;
