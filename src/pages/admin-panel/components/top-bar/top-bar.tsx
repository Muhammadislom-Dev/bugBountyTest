import { Hamburger } from "../../../../components/icons/list";
import SettngsIcon from "../../../../components/icons/list/settings-icon";
import cls from "./top-bar.module.scss"
import React from "react";
interface TopBarProps {
    
}
 
const TopBar: React.FC<TopBarProps> = () => {
    return ( 
        <>
            <header className={cls.header}>
                <Hamburger/>
                <div className={cls["user-container"]}>
                    <div className={cls["user-cnt"]}>
                        <div className={cls["user-img-cnt"]}>
                            <img src="" alt="" />
                        </div>
                        <div className={cls["user-name-cnt"]}>
                            <h4 className={cls.name}>John</h4>
                        </div>
                    </div>
                    <SettngsIcon />
                </div>
            </header>
        </>
    );
}
 
export default TopBar;