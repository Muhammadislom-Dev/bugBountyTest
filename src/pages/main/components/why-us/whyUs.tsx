import React from "react";
import cls from "./whyUs.module.scss";
import photo from "../../../../assets/images/bro.png";
import reward1 from "../../../../assets/images/horse.png";
import reward2 from "../../../../assets/images/photo2.png";
import reward3 from "../../../../assets/images/bug-hunter.png";
import { t } from "i18next";

interface WhyUsProps {}

const WhyUs: React.FC<WhyUsProps> = () => (
  <section className={cls.wrapper} id={"whyUs"}>
    {/* title */}
    <h2 className={cls.title}>{t("nav")}</h2>
    {/* title */}

    {/* info */}
    <div className={cls["info-box"]}>
      <div className={cls.info}>
        <h3>BBP.UZ COMPANY</h3>
        <p>{t("text5")}</p>
      </div>
      <div className={cls["bg-photo"]}>
        <img src={photo} alt="" />
      </div>
    </div>
    {/* info */}

    {/* statistics */}
    <div className={cls.statistics}>
      <div className={cls.statistic}>
        <h4>500+</h4>
        <h3>{t("staticName")}</h3>
        <p>{t("staticText")}</p>
      </div>
      <div className={cls.statistic}>
        <h4>10 000$ +</h4>
        <h3>{t("staticName2")}</h3>
        <p>{t("staticText2")}</p>
      </div>
    </div>
    {/* statistics */}

    {/* rewards */}
    <div className={cls.rewards}>
      <div className={cls.reward}>
        <img src={reward1} alt="" />
      </div>

      <div className={cls.reward}>
        <img src={reward2} alt="" />
      </div>

      <div className={cls.reward}>
        <img src={reward3} alt="" />
      </div>
    </div>
    {/* rewards */}
  </section>
);

export default WhyUs;
