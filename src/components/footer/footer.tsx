import React from "react";
import cls from "./footer.module.scss";
import Icon from "../icons";
import { t } from "i18next";

interface FooterProps {}

//done
const Footer: React.FC<FooterProps> = () => (
  <section className={cls.wrapper}>
    <ul className={cls["items"]}>
      <li className={cls["item"]}>
        <a href="1">{t("nav")}</a>
      </li>
      <li className={cls["item"]}>
        <a href="2">{t("nav1")}</a>
      </li>
      <li className={cls["item"]}>
        <a href="3">{t("nav3")}</a>
      </li>
      <li className={cls["item"]}>
        <a href="4">{t("nav2")}</a>
      </li>
    </ul>

    {/* icons */}
    <div className={cls.icons}>
      <Icon name="Instagram" color="white" size={40} />
      <Icon name="Facebook" color="white" size={40} />
      <Icon name="Telegram" color="white" size={40} />
    </div>
    {/* icons */}

    {/* subtitle */}
    <p className={cls.subtitle}>
      Bug Bounty, BPP.UZ. <br />
      All right reserved 2022
    </p>
    {/* subtitle */}
  </section>
);

export default Footer;
