import type {SizeType} from 'antd/es/config-provider/SizeContext';
import {Select, UploadProps} from 'antd';
import {Button, Input, List, message, Radio, RadioChangeEvent, Switch, Upload} from 'antd';
import Search from "antd/lib/input/Search";
import React, {useState} from "react";
import TextArea from 'antd/lib/input/TextArea';
import {InboxOutlined} from '@ant-design/icons';

interface SubmitReport {
}


const SubmitReport: React.FC<SubmitReport> = () => {

    const [size, setSize] = useState<SizeType>('middle');
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const onSearch = (value: string) => console.log(value);

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

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
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return <section className={"submit-report"}>
        <div className="div-select-vulnerability_item">
            <div className={"vulnerability-type"}>
                <h3>Vulnerability Type</h3>
                <p>Select the type of discovered potential problem. Can’t choose only one? Choose the most appropriate
                    one
                    or submit a separate report for each apparent deficiency.</p>
            </div>

            <div className={"select-vulnerability"}>
                <div className={"select-vulnerability_item"}>
                    <p>Select vulnerability</p>
                    <div className={"switch"}><Switch onChange={onChange}/></div>
                </div>
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
                        options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>

        <div className="div-select-seriousness_item">
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

        <div className="div-proof-item">
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

                <TextArea showCount maxLength={500} onChange={onChange2} placeholder="## Summary:
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

        <div className="div-files-upload-item">
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

        <div className="div-submit-report-button">
            <p>By submitting this report, you agree to the Terms of Service and Privacy Policy.</p>
            {/*todo add terms and privacy policy pages*/}
            <Button type="primary" size="large">Submit Report</Button>

        </div>


    </section>

}


export default SubmitReport;