import React from "react";
import cls from "./footer.module.scss";
import Icon from "../icons";

interface FooterProps {
}

//done
const Footer: React.FC<FooterProps> = () => (
    <section className={cls.wrapper}>

        {/* footer-items */}
        <ul className={cls["items"]}>
            {/*todo do same with navbar*/}
            <li className={cls["item"]}>
                <a href="1">Why us?</a>
            </li>
            <li className={cls["item"]}>
                <a href="2">Company</a>
            </li>
            <li className={cls["item"]}>
                <a href="3">Rules</a>
            </li>
            <li className={cls["item"]}>
                <a href="4">Team</a>
            </li>
        </ul>
        {/* footer-items */}

        {/* icons */}
        <div className={cls.icons}>
        {/*//todo add social media links links*/}
            <Icon name="Instagram" color="white" size={40}/>
            <Icon name="Facebook" color="white" size={40}/>
            <Icon name="Telegram" color="white" size={40}/>
        </div>
        {/* icons */}

        {/* subtitle */}
        <p className={cls.subtitle}>Bug Bounty, BPP.UZ. <br/>All right reserved 2022</p>
        {/* subtitle */}
    </section>
);

export default Footer;
