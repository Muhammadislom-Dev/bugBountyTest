import React from "react";
import Button from "../button/button";
import Logo from "../../assets/images/BBP.svg";
import Icons from "../icons";
import cls from "./ham-menu.module.scss";

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
      <p>Nega biz?</p>
      <p>Loyiha haqida</p>
      <p>Jamoa</p>
      <p>Qoidalar</p>
      <Button title="SIGN UP" type="secondary" />
    </div>
    <div>
      <Icons name="xMark" size={40} className={cls["d-none"]} />
    </div>
  </div>
);

export default HamMenu;
