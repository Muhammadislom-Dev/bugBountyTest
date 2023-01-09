import {Route, Routes, useLocation} from "react-router-dom";
import cls from "./admin-panel.module.scss"
import companies from "./components/companies";
import LeftBar from "./components/left-bar";
import TopBar from "./components/top-bar";
import users from "./components/users";
import Companies from "./components/companies";
import Users from "./components/users";
import React from "react";


interface AdminPanelProps {
}

const AdminPanel: React.FC<AdminPanelProps> = () => {
    return (
        <>
            <div className={cls.wrapper}>
                <div className={cls['navbar-wrapper']}>
                    <LeftBar/>
                </div>
                <div className={cls["content-wrapper"]}>
                    <TopBar/>
                    {/*<Companies/>*/}
                    {/*<Users/>*/}
                </div>
            </div>
        </>
    );
}

export default AdminPanel;