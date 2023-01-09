import { Table } from "antd";
import React from "react";
import Icons from "../../components/icons";
import Navbar from "../../components/navbar";
import cls from "./derectory.module.scss";

interface DirectoryProps {}

const Directory: React.FC<DirectoryProps> = () => {
  const items = [
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
        isManaged: true,
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
        isManaged: true,
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
    {
      program: {
        img: "https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png",
        title: "Facebook.com",
        isManaged: true,
      },
      launchData: "09,11,22",
      reportResolve: "0",
      bountiesMin: "-",
      bountieaAvarage: "-",
    },
  ];

  const columns = [
    {
      dataIndex: "program",
      title: (
        <div className={cls["launch-data"]}>
          <h3>Program</h3>
        </div>
      ),
      render: (a: any, item: any) => (
        <div className={cls["item-box"]}>
          <div className={cls["img-box"]}>
            <img src={`${item.program.img}`} alt="" />
          </div>

          <div className={cls.title}>{item.program.title}</div>
          {item.program.isManaged && (
            <button className={cls.btn}>Managed</button>
          )}
        </div>
      ),
    },
    {
      dataIndex: "launchData",
      title: (
        <div className={cls["launch-data"]}>
          <h3>Launch</h3>
          <span>
            date <Icons name="ArrowDown" size={18} color="#FFFFFF" />
          </span>
        </div>
      ),
      render: (a: any, item: any) => <div>07/2022</div>,
    },
    {
      dataIndex: "reportResolve",
      title: (
        <div className={cls["launch-data"]}>
          <h3>Reports</h3>
          <span>
            resolved <Icons name="ArrowDown" size={18} color="#FFFFFF" />
          </span>
        </div>
      ),
      render: (a: any, item: any) => <div>{item.reportResolve}</div>,
    },
    {
      dataIndex: "bountiesMin",
      title: (
        <div className={cls["launch-data"]}>
          <h3>Bounties</h3>
          <span>
            minimum <Icons name="ArrowDown" size={18} color="#FFFFFF" />
          </span>
        </div>
      ),
      render: (a: any, item: any) => <div>{item.bountiesMin}</div>,
    },
    {
      dataIndex: "bountieaAvarage",
      title: (
        <div className={cls["launch-data"]}>
          <h3>Bountiea</h3>
          <span>
            avarage <Icons name="ArrowDown" size={18} color="#FFFFFF" />
          </span>
        </div>
      ),
      render: (a: any, item: any) => <div>{item.bountieaAvarage}</div>,
    },
  ];

  return (
    <>
      <Navbar />
      <section className={cls.wrapper}>
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F50%2FFacebook_Thumb_icon.svg%2F1200px-Facebook_Thumb_icon.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFacebook_like_button&tbnid=SOtsL-tjh8tJbM&vet=12ahUKEwiVk6OXlqb7AhWomIsKHcHTCTUQMygkegUIARCDAg..i&docid=-6aVpc92vooe_M&w=1200&h=928&q=face%20book&ved=2ahUKEwiVk6OXlqb7AhWomIsKHcHTCTUQMygkegUIARCDAg"
          alt=""
        />
        <Table pagination={false} dataSource={items} columns={columns} />
      </section>
    </>
  );
};

export default Directory;
