import { Collapse } from "antd";
import React from "react";
import cls from "./commonQuestions.module.scss";
import { t } from "i18next";

const { Panel } = Collapse;

const items = [
  {
    header: t("full2"),
    texts: t("second2"),
  },
  {
    header: t("full3"),
    texts: t("second3"),
  },
  {
    header: t("full4"),
    texts: t("second4"),
  },
  {
    header: t("full1"),
    texts: t("second1"),
  },
];

const CommonQuestions: React.FC = () => (
  <section className={cls.wrapper}>
    <h2 className={cls.title}>FAQ</h2>
    <Collapse accordion defaultActiveKey={0} ghost>
      {items?.map((item, idx) => (
        <Panel className={cls.panel} header={item?.header} key={idx}>
          <p
            dangerouslySetInnerHTML={{
              __html: item.texts,
            }}
            key={idx}
          />
        </Panel>
      ))}
    </Collapse>
  </section>
);
export default CommonQuestions;
