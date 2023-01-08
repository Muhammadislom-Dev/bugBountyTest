import React from "react";
import Icon from "../../../../components/icons";

import cls from "./features.module.scss";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => (
  <section className={cls.wrapper}>
    <h2 className={cls.title}>FEATURES</h2>

    <div className={cls.features}>
      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Gain" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>Gain a reputation</h3>
          <p>
            When report accepting by organization
            you will get points and gain reputation
          </p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Reduce" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>Reduce efforts</h3>
          <p>
            With creating teams you can reduce efforts and work together with other “hackers”
          </p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Money" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>Make more money</h3>
          <p>
            With our system you can earn money
            easily : report more , earn more
          </p>
        </div>
      </div>

      <div className={cls.feature}>
        <div className={cls.icon}>
          <Icon name="Safety" color="var(--main)" size={63} />
        </div>
        <div className={cls.info}>
          <h3>Safety first</h3>
          <p>
            For consumer safety and compliance with customer requirements, we do not collect, sell or store platform member data
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
