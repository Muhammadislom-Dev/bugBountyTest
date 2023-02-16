import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {Button, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import {UploadFile} from "antd/es/upload/interface";

const { Dragger } = Upload;
const { REACT_APP_API_ENDPOINT } = process.env;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: `${REACT_APP_API_ENDPOINT}/files/test`,
    onChange(info) {
        const { status } = info.file;
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

const Test2: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

    const handleSubmit = async () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files', file.originFileObj as Blob);
        });

        try {
            const response = await fetch(`${REACT_APP_API_ENDPOINT}/files/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.text();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Dragger {...props} fileList={fileList} onChange={({ fileList }) => setFileList(fileList)}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <Button onClick={handleSubmit}>Submit</Button>
        </>
    );
};

export default Test2;