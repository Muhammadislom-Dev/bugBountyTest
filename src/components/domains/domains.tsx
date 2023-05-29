import React from "react";
import "animate.css";
import cls from "./domains.module.scss";
import { Table } from "antd";

interface DomainsProps {
  dataSource: any[];
}

const Domains: React.FC<DomainsProps> = ({ dataSource }) => {
  const columns = [
    {
      title: "DOMAIN",
      dataIndex: "domain",
      key: "domain",
    },
    {
      title: "BOUNTY",
      dataIndex: "paid",
      key: "bounty",
      render: (paid: boolean) => {
        return paid ? "PAID" : "FOR REPUTATION";
      },
    },
  ];

  // @ts-ignore
  return (
    <div className={cls["domains"]}>
      <h3> Search objects</h3>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Domains;
