import React from 'react';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Menu, MenuProps, Space} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Navigation Three', 'sub4', <SettingOutlined/>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const Test2: React.FC = () => (
        <>
            <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={items}/>
            <Space size={16} wrap>
                <Avatar icon={<UserOutlined/>}/>
                <Avatar src={<img src={url} alt="avatar"/>}/>
            </Space>
        </>
    )
;

export default Test2;



