import React from "react";
import cls from "./about-us.module.scss";
import photo from "../../../../assets/images/bro2.png";
import { t } from "i18next";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => (
  <section id={"what-is-bug-bounty"} className={cls.wrapper}>
    <h2 className={cls.title}>{t("title")}</h2>

    <div className={cls.container}>
      <div className={cls["bg-photo"]}>
        <img src={photo} alt="" />
      </div>
      <div className={cls.text}>
        <p
          dangerouslySetInnerHTML={{
            __html: t("text"),
          }}
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
