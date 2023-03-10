import type {SizeType} from 'antd/es/config-provider/SizeContext';
import {Input, message, Radio, RadioChangeEvent, Select, Upload, UploadProps} from 'antd';
import React, {useEffect, useState} from "react";
import TextArea from 'antd/lib/input/TextArea';
import {InboxOutlined} from '@ant-design/icons';
import cls from './submitReport.module.scss';
import {UploadFile} from "antd/es/upload/interface";
import {toast} from "react-toastify";
import {Controller, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {getToken} from "../../auth/handleJWT";

interface SubmitReport {
}

type FormValues = {
    vulnerabilityType: string;
    seriousness: string;
    proofTitle: string;
    proofCve_id: string;
    proofDescription: string;
    organizationId: string
};
const {REACT_APP_API_ENDPOINT} = process.env;


const SubmitReport: React.FC<SubmitReport> = () => {
    const {id} = useParams();

    const [files, setFiles] = useState<UploadFile[]>([]);
    const [options, setOptions] = useState<any[]>([]);
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
        data.organizationId = id!.toString();

        event.preventDefault();
        if (!isDirty || !isValid) {
            return
        }

        const form = document.querySelector('form');
        let formData = new FormData();


        // append files to form data
        for (let i = 0; i < files.length; i++) {
            formData?.append('files', files[i].originFileObj as File);
        }
        formData.append("data", JSON.stringify(data));

        const requestOptions = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            },
            method: 'POST',
            body: formData
        };
        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/reports/send`, requestOptions);
            const data = await response.text();
            console.log(data);
            showToastMessage(data, response.status);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/reports/vulnerability-types`);
            const data = await response.json();

            setOptions(data.map((item: any, index: any) => ({
                value: `${index}-${item.name}`,
                label: item.name
            })));
        };
        fetchData();
    }, []);


    const [size, setSize] = useState<SizeType>('middle');
    const handleSizeChange = (e: RadioChangeEvent) => {
        setValue('seriousness', e.target.value, {shouldDirty: true});
        setSize(e.target.value);
    };

    const onChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };


    const {Dragger} = Upload;

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        beforeUpload: beforeUpload,
        onChange(info) {
            setFiles(info.fileList);
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    function beforeUpload(file: UploadFile) {
        let is10MB;
        if (file.size !== undefined) {
            is10MB = file.size / 1024 / 1024 < 10;
        }
        if (!is10MB) {
            message.error(`${file.name} is too large, please upload a file smaller than 10 MB.`);
            return Upload.LIST_IGNORE;
        }
        let isExist;
        for (let i = 0; i < files.length; i++) {
            if (files[i].name === file.name) {
                isExist = true;
                break;
            }
        }

        if (isExist) {
            message.error(`${file.name} has already been uploaded.`);
            return Upload.LIST_IGNORE;
        }
        return false;
    }


    return <section className={cls["submit-report"]}>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className={cls["div-select-vulnerability_item"]}>
                <div className={"vulnerability-type"}>
                    <h3>Vulnerability Type</h3>
                    <p>Select the type of discovered potential problem. Can’t choose only one? Choose the most
                        appropriate
                        one
                        or submit a separate report for each apparent deficiency.</p>
                </div>


                <div className={cls["select-vulnerability"]}>
                    <p>Select vulnerability</p>
                    <div className="vulnerabilities">
                        <Controller
                            name="vulnerabilityType"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange}}) => (
                                <>
                                    <Select
                                        showSearch
                                        onChange={onChange}
                                        style={{width: 200}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={options}
                                    />
                                </>
                            )}
                        ></Controller>

                    </div>
                </div>
            </div>

            <div className={cls["div-select-seriousness_item"]}>
                <div className="select-seriousness_item">
                    <div className="seriousness">
                        <h3>Seriousness</h3>
                        <p>Assess the threat level</p>
                        <Controller
                            name="seriousness"
                            control={control}
                            defaultValue=""
                            render={() => (
                                <>
                                    <Radio.Group value={size} onChange={handleSizeChange}>
                                        <Radio.Button value="high">High</Radio.Button>
                                        <Radio.Button value="low">Low</Radio.Button>
                                        <Radio.Button value="medium">Medium</Radio.Button>
                                    </Radio.Group>
                                </>
                            )}
                        ></Controller>

                    </div>
                </div>
            </div>

            <div className={cls["div-proof-item"]}>
                <div className="proof">
                    <h3>Proof of vulnerability</h3>
                    <p>Provide a proof of vulnerability. It can be a screenshot, a video, a link to a page with a</p>
                </div>

                <div className="select-proof_item">
                    <div className="title">
                        <h3>Title*</h3>

                        <Controller
                            name="proofTitle"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <>
                                    <Input showCount maxLength={100} onChange={onChange}/>
                                </>
                            )}
                        ></Controller>
                        <p>A clear and concise name includes the type of vulnerability and the affected object</p>
                    </div>
                    <div className="cve_id">
                        <h3>CVE ID</h3>
                        <Controller
                            name="proofCve_id"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <>
                                    <Input showCount maxLength={100} onChange={onChange}/>
                                </>
                            )}
                        ></Controller>
                    </div>

                    <div className="description">
                        <h3>Description*</h3>
                        <p>Describe the vulnerability. What are the clear steps to reproduce it? Please replace all
                            [square]
                            sections below with appropriate details. Remember that the more details you provide, the
                            easier
                            it is for us to sort and respond quickly, so take your time filling out the report!</p>
                    </div>

                    <Controller
                        name="proofDescription"
                        control={control}
                        defaultValue=""
                        render={({field: {onChange, onBlur, value, ref}}) => (
                            <>
                                <TextArea showCount style={{height: 245}} maxLength={500} onChange={onChange}
                                          placeholder="## Summary:
[add summary of the vulnerability]

## Steps To Reproduce:
[add details for how we can reproduce the issue]

  1. [add step]
  1. [add step]
  1. [add step]

## Supporting Material/References:
[list any additional material (e.g. screenshots, logs, etc.)]

  * [attachment / reference]"/>
                            </>
                        )}
                    ></Controller>

                </div>
            </div>

            <div className={cls["div-files-upload-item"]}>
                <div className="files-upload">
                    <h3>Files upload</h3>
                    <p>Proof of concept is the essential part of your report. Clear, reproducible steps will help us
                        verify
                        this problem as quickly as possible.</p>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </div>
            </div>

            <div className={cls["div-submit-report-button"]}>
                <p>By submitting this report, you agree to the Terms of Service and Privacy Policy.</p>
                {/*todo add terms and privacy policy pages*/}
                <input className={cls.btn} type="submit" value={"Sign up"}/>
            </div>
        </form>


    </section>

}


export default SubmitReport;