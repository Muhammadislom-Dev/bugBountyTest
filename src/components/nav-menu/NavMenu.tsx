import React from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Menu} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../auth/handleJWT";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
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

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const items: MenuProps['items'] = [
        getItem('', 'sub4', <Avatar src={<img src={url} alt="avatar"/>}/>, [
            getItem('Home', '1'),
            getItem('Settings', '10'),
            getItem('Profile', '11'),
            getItem('Payments', '12'),
            getItem('Logout', '13')
        ])
    ]
;

const NavMenu: React.FC = () => {
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === '1') navigate('/');
        if (e.key === '10') navigate('/settings');
        if (e.key === '11') navigate('/profile');
        if (e.key === '12') navigate('/payment');
        if (e.key === '13') {
            logout();
            window.location.reload();
            console.log('click ', e);
        }
    };

    return (
        <Menu onClick={onClick} style={{width: 82, backgroundColor: '#101213'}} mode="horizontal" items={items}>
            {/*todo set image for background color*/}
        </Menu>
    );
};

export default NavMenu;