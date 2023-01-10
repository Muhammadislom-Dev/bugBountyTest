import React from "react";
import cls from "./research.module.scss";
import Button from "../../../../components/button/button";

interface ResearchProps {
}

const Research: React.FC<ResearchProps> = () => (
    <div id={"start-research"} className={cls.wrapper}>
        <div className={cls.container}>
            <h2 className={cls.title}> START YOUR RESEARCH NOW</h2>
            <p className={cls.subtitle}>
                To participate in the program, you should act ethically and strictly adhere to the established rules. Be
                sure to read all the rules before you start discovering vulnerabilities.
            </p>
            <div className={cls.btn}>
                <a href="#whyUs"><Button type="primary" title="VIEW MORE"/></a>
            </div>
        </div>
    </div>
);

export default Research;
