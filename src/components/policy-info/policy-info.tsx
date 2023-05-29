import React from "react";
import cls from "./policy-info.module.scss";
import { t } from "i18next";

interface PolicyInfoProps {
  organization: any;
  lastUpdated: string;
}

const PolicyInfo: React.FC<PolicyInfoProps> = ({
  organization,
  lastUpdated,
}) => {
  return (
    <div className={cls["policy-info"]}>
      <h2 className={cls.title}> {t("policy")}</h2>
      <div className={cls["policy-section"]}>
        <h4>
          {organization.name}
          {t("policyText")}
        </h4>
        <p>{organization.policy}</p>
      </div>
      <div className={cls["policy-section"]}>
        <h4>PROGRAM OVERVIEW</h4>
        <p>
          The Program enables users to submit vulnerabilities and exploitation
          techniques to {organization.name} ("Submission"). No rewards will be
          issued for Submissions. {organization.name} may change or cancel this
          Program at any time, for any reason without notice.
        </p>
      </div>
      <div className={cls["policy-section"]}>
        <h4>{t("programmer")}</h4>
        <p>
          {t("policyText1")} {organization.name}.
        </p>
      </div>
      <div className={cls["policy-section"]}>
        <h4>Guidelines </h4>
        <p>{organization.guideLines}</p>
      </div>
      <div className={cls["policy-section"]}>
        <h4>{t("policy1")}</h4>
        <p>
          Other than your Submission, {organization.name} does not consider or
          accept unsolicited proposals or ideas, including without limitation
          ideas for new products, technologies, promotions, product names,
          product feedback and product improvements ("Unsolicited Feedback"). If
          you send any Unsolicited Feedback to {organization.name} through the
          Program or otherwise, {organization.name} makes no assurances that
          your ideas will be treated as confidential or proprietary. IF YOU DO
          NOT AGREE TO THESE TERMS, PLEASE DO NOT SEND US ANY SUBMISSIONS OR
          OTHERWISE PARTICIPATE IN THIS PROGRAM
        </p>
      </div>
      <span className={cls.date}>Last updated on {lastUpdated}</span>
    </div>
  );
};

export default PolicyInfo;
