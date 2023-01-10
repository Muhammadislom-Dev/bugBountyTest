import React from "react";
import Button from "../button/button";
import Logo from "../../assets/images/BBP.svg";
import Icons from "../icons";
import cls from "./ham-menu.module.scss";
import {Link} from "react-router-dom";

interface HamMenuProps {
  handleClose: (value: boolean) => void;
}

const HamMenu: React.FC<HamMenuProps> = ({ handleClose }) => (
  <div className={cls.wrapper}>
    <div onClick={() => handleClose(false)} className={cls.xmark}>
      <Icons name="xMark" size={30} />
    </div>
    <div className={cls.content}>
      <img src={Logo} alt="" />
        {/*<NavHashLink to={"/#whyUs"}><p>Why us?</p></NavHashLink>*/}
        <Link to={"/team"}><p>Team</p></Link>
        <Link to="/rules"><p>Rules</p></Link>
        <Link to="/programs"><p>Programs</p></Link>
        <Link to="/program"><p>Program</p></Link>
        <Link to="/profile"><p>Profile</p></Link>
        <Link to="/payment"><p>Payment</p></Link>
        {/*<Link to="/admin/companies"><p>Companies</p></Link>*/}
        {/*<Link to="/admin/users"><p>Users</p></Link>*/}
        <Link to="/admin"><p>Admin</p></Link>
      <Button title="SIGN UP" type="secondary" />
    </div>
    <div>
      <Icons name="xMark" size={40} className={cls["d-none"]} />
    </div>
  </div>
);

export default HamMenu;
