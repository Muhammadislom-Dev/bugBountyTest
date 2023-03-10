import React from "react";
import Button from "../button/button";
import Logo from "../../assets/images/BBP.svg";
import Icons from "../icons";
import cls from "./ham-menu.module.scss";
import {Link} from "react-router-dom";
import Authorized from "../../auth/authorized";
import NavMenu from "../nav-menu/NavMenu";

interface HamMenuProps {
    handleClose: (value: boolean) => void;
}

const HamMenu: React.FC<HamMenuProps> = ({handleClose}) => (
    <div className={cls.wrapper}>
        <div onClick={() => handleClose(false)} className={cls.xmark}>
            <Icons name="xMark" size={30}/>
        </div>
        <div className={cls.content}>
            <img src={Logo} alt=""/>
            <Link to={"/team"}><p>Team</p></Link>
            <Link to="/rules"><p>Rules</p></Link>
            <Authorized authorized={<>
                <Link to="/programs"><p>Programs</p></Link>
                <Link to="/profile"><p>Profile</p></Link>
                <Link to="/payment"><p>Payment</p></Link>
            </>} unauthorized={<></>}/>

            <Authorized authorized={<Link to="/admin"><p>Admin</p></Link>} unauthorized={<></>} role={"ADMIN"}/>

            <Authorized authorized={<><NavMenu/></>} unauthorized={
                <div className={cls.corner}>
                    <Link to={"/signup"}><Button title="SIGN UP" type="secondary"/></Link>
                </div>
            }/>
        </div>
        <div>
            <Icons name="xMark" size={40} className={cls["d-none"]}/>
        </div>
    </div>
);

export default HamMenu;
