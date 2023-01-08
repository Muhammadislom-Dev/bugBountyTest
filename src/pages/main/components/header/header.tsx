import React from "react";
import cls from "./header.module.scss";
import Button from "../../../../components/button/button";

interface ResearchProps {}

const Header: React.FC<ResearchProps> = () => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      <h2 className={cls.title}> BUG BOUNTY</h2>
      <p className={cls.subtitle}>
          BugBounty is a program for rewarding the discovery of vulnerabilities in information systems and resources.
      </p>
      <div className={cls.btn}>
        <Button type="primary" title="VIEW MORE" />
      </div>
    </div>
  </div>
);

export default Header;
