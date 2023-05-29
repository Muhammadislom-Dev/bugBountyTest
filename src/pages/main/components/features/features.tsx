import React from "react";
import Icon from "../../../../components/icons";

import cls from "./features.module.scss";
import { t } from "i18next";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => (
  <section className={cls.wrapper}>
    <h2 className={cls.title}>{t("feature")}</h2>

    <div className={cls.features}>
      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Gain" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>{t("feature1")}</h3>
          <p>{t("text1")}</p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Reduce" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>{t("feature2")}</h3>
          <p>{t("text2")}</p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Money" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>{t("feature3")}</h3>
          <p>{t("text3")}</p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Safety" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>{t("feature4")}</h3>
          <p>{t("text4")}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
