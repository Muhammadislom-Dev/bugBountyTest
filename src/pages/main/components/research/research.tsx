import React from "react";
import cls from "./research.module.scss";
import Button from "../../../../components/button/button";
import { t } from "i18next";

interface ResearchProps {}

const Research: React.FC<ResearchProps> = () => (
  <div id={"start-research"} className={cls.wrapper}>
    <div className={cls.container}>
      <h2 className={cls.title}> {t("startName")}</h2>
      <p className={cls.subtitle}>{t("startText")}</p>
      <div className={cls.btn}>
        <a href="#whyUs">
          <Button type="primary" title="VIEW MORE" />
        </a>
      </div>
    </div>
  </div>
);

export default Research;
