import React from "react";
import cls from "./whyUs.module.scss";
import photo from "../../../../assets/images/bro.png";
import reward1 from "../../../../assets/images/horse.png";
import reward2 from "../../../../assets/images/photo2.png";
import reward3 from "../../../../assets/images/bug-hunter.png";

interface WhyUsProps {
}

const WhyUs: React.FC<WhyUsProps> = () => (
    <section className={cls.wrapper} id={"whyUs"}>
        {/* title */}
        <h2 className={cls.title}>Why us?</h2>
        {/* title */}

        {/* info */}
        <div className={cls["info-box"]}>
            <div className={cls.info}>
                <h3>BBP.UZ COMPANY</h3>
                <p>
                    Our company tries to create a bridge between large companies and IT
                    community. Collectively, we will get a more profitable and effective
                    mechanism for ensuring a high-level security of information
                    systems and
                    resources.
                    <br/>
                    <br/>
                    The company publicly announces the reward scope and level, after which
                    the volunteers can register on the platform and take part in the Bug
                    Bounty
                </p>
            </div>
            <div className={cls["bg-photo"]}>
                <img src={photo} alt=""/>
            </div>
        </div>
        {/* info */}

        {/* statistics */}
        <div className={cls.statistics}>
            <div className={cls.statistic}>
                <h4>500+</h4>
                <h3>researchers</h3>
                <p>
                    Researchers from all over the world find vulnerabilities in information systems and resources every day
                </p>
            </div>
            <div className={cls.statistic}>
                <h4>10 000$ +</h4>
                <h3>rewards</h3>
                <p>
                    Budget allocated for reward payments for the current year
                </p>
            </div>
        </div>
        {/* statistics */}

        {/* rewards */}
        <div className={cls.rewards}>
            <div className={cls.reward}>
                <img src={reward1} alt=""/>
            </div>

            <div className={cls.reward}>
                <img src={reward2} alt=""/>
            </div>

            <div className={cls.reward}>
                <img src={reward3} alt=""/>
            </div>
        </div>
        {/* rewards */}
    </section>
);

export default WhyUs;
