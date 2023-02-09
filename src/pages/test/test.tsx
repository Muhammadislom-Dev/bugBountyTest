import React from 'react';
import {InboxOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';

const {Dragger} = Upload;
const {REACT_APP_API_ENDPOINT} = process.env;


const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: `${REACT_APP_API_ENDPOINT}/files/test`,
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

const Test: React.FC = () => (
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
);

export default Test;