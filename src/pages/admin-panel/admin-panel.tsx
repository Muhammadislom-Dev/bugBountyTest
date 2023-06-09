import { useLocation } from "react-router-dom";
import cls from "./admin-panel.module.scss";
import Companies from "./components/companies";
import LeftBar from "./components/left-bar";
import TopBar from "./components/top-bar";
import Users from "./components/users";
import React from "react";

interface AdminPanelProps {}

const AdminPanel: React.FC<AdminPanelProps> = () => {
  const location = useLocation();
  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls["navbar-wrapper"]}>
          <LeftBar />
        </div>
        <div className={cls["content-wrapper"]}>
          <TopBar />
          {location.pathname === "/admin" ||
          location.pathname === "/admin/users" ? (
            <Users />
          ) : null}
          {location.pathname === "/admin/companies" ? <Companies /> : null}
          {location.pathname === "/admin/reports" ? <div>Reports</div> : null}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
