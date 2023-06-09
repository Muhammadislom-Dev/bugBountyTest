import { Link, NavLink } from "react-router-dom";
import Logo from "../../../../assets/images/BBP.svg";
import CIcon from "../../../../components/icons/list/c-icon";
import NIcon from "../../../../components/icons/list/n-icon";
import RIcon from "../../../../components/icons/list/r-icon";
import UsersIcon from "../../../../components/icons/list/users";
import cls from "./left-bar.module.scss";
import React from "react";

interface LeftBarProps {}

const navbarData = [
  {
    url: "/admin/companies",
    title: "Companies",
    icon: <CIcon />,
  },
  {
    url: "/admin/users",
    title: "Users",
    icon: <UsersIcon />,
  },
  {
    url: "/admin/reports",
    title: "Reports",
    icon: <RIcon />,
  },
];

const LeftBar: React.FC<LeftBarProps> = () => {
  return (
    <>
      <div className={cls["panel-menu_wrapper"]}>
        <div className={cls["logo-title-cnt"]}>
          <Link to={"/"}>
            <img className={cls.logo} src={Logo} alt="" />
            <h4 className={cls.title}>Admin Panel</h4>
          </Link>
        </div>
        <header className={cls["navbar-menu-container"]}>
          <nav>
            <p>Menu</p>
            <ul>
              {navbarData.map((item) => (
                <NavLink
                  to={item.url}
                  className={(navData) => (navData.isActive ? cls.active : "")}
                  // activeClassName={cls.active}
                  key={item.title}>
                  <span>{item.icon}</span> {item.title}
                </NavLink>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default LeftBar;
