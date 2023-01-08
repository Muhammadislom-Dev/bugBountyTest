import React from "react";
import cls from "./about-us.module.scss";
import photo from "../../../../assets/images/bro2.png";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => (
  <section className={cls.wrapper}>
    <h2 className={cls.title}>WHAT IS BUG BOUNTY?</h2>

    <div className={cls.container}>
      <div className={cls["bg-photo"]}>
        <img src={photo} alt="" />
      </div>
      <div className={cls.text}>
        <p>
          BugBounty is a program used by a company to engage independent
          researchers (called “white hats”, “bug hunters” or “researchers” in
          the industry) to identify vulnerabilities in information systems and
          resources for a monetary reward. The company publicly announces the
          reward.
          <br />
          <br />The company publicly announces the reward scope and level, after which the volunteers can register on the
          platform and take part in the Bug Bounty
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
