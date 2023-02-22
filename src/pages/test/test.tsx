import React, {useState} from 'react';
import {InboxOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';
import {UploadFile} from "antd/es/upload/interface";


const Test: React.FC = () => {

    const {Dragger} = Upload;

    const [files, setFiles] = useState<UploadFile[]>([]);


    const props: UploadProps = {
        name: 'file',
        multiple: true,
        beforeUpload: beforeUpload,
        action: 'http://localhost:8080/api/files/test',
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


    return <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
        </p>
    </Dragger>
}

export default Test;