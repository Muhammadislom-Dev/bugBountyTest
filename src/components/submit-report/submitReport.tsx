import type {SizeType} from 'antd/es/config-provider/SizeContext';
import {Button, Input, message, Radio, RadioChangeEvent, Select, Switch, Upload, UploadProps} from 'antd';
import React, {useEffect, useState} from "react";
import TextArea from 'antd/lib/input/TextArea';
import {InboxOutlined} from '@ant-design/icons';
import cls from './submitReport.module.scss';
import {UploadFile} from "antd/es/upload/interface";

interface SubmitReport {
}

const {REACT_APP_API_ENDPOINT} = process.env;


const SubmitReport: React.FC<SubmitReport> = () => {
    const [files, setFiles] = useState<UploadFile[]>([]);
    const [options, setOptions] = useState<any[]>([]);

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
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };


    const handleSizeChange = (e: RadioChangeEvent) => {
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
        <div className={cls["div-select-vulnerability_item"]}>
            <div className={"vulnerability-type"}>
                <h3>Vulnerability Type</h3>
                <p>Select the type of discovered potential problem. Can’t choose only one? Choose the most appropriate
                    one
                    or submit a separate report for each apparent deficiency.</p>
            </div>

            <div className={cls["select-vulnerability"]}>
                <p>Select vulnerability</p>
                <div className="vulnerabilities">
                    <Select
                        showSearch
                        style={{width: 200}}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={options}
                    />
                </div>
            </div>
        </div>

        <div className={cls["div-select-seriousness_item"]}>
            <div className="seriousness">
                <h3>Seriousness</h3>
                <p>Assess the threat level</p>
                <div className="select-seriousness_item">
                    <Radio.Group value={size} onChange={handleSizeChange}>
                        <Radio.Button value="large">High</Radio.Button>
                        <Radio.Button value="default">Low</Radio.Button>
                        <Radio.Button value="small">Medium</Radio.Button>
                    </Radio.Group>
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
                    <Input showCount maxLength={100} onChange={onChange2}/>
                    <p>A clear and concise name includes the type of vulnerability and the affected object</p>
                </div>
                <div className="cve_id">
                    <h3>CVE ID</h3>
                    <Input showCount maxLength={100} onChange={onChange2}/>
                </div>

                <div className="description">
                    <h3>Description*</h3>
                    <p>Describe the vulnerability. What are the clear steps to reproduce it? Please replace all [square]
                        sections below with appropriate details. Remember that the more details you provide, the easier
                        it is for us to sort and respond quickly, so take your time filling out the report!</p>
                </div>

                <TextArea showCount style={{height: 245}} maxLength={500} onChange={onChange2} placeholder="## Summary:
[add summary of the vulnerability]

## Steps To Reproduce:
[add details for how we can reproduce the issue]

  1. [add step]
  1. [add step]
  1. [add step]

## Supporting Material/References:
[list any additional material (e.g. screenshots, logs, etc.)]

  * [attachment / reference]"/>
            </div>
        </div>

        <div className={cls["div-files-upload-item"]}>
            <div className="files-upload">
                <h3>Files upload</h3>
                <p>Proof of concept is the essential part of your report. Clear, reproducible steps will help us verify
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
            <Button type="primary" size="large">Submit Report</Button>
        </div>


    </section>

}


export default SubmitReport;