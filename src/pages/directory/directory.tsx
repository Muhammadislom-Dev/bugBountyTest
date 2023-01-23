import {Table} from "antd";
import React, {useEffect, useState} from "react";
import Icons from "../../components/icons";
import Navbar from "../../components/navbar";
import cls from "./derectory.module.scss";
import Footer from "../../components/footer";
import {Link} from "react-router-dom";

interface DirectoryProps {
}

const Directory: React.FC<DirectoryProps> = () => {

    const [items, setItems] = useState<Array<any>>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/organizations")
            .then(response => response.json())
            .then(data => {
                const newData = data.map((item: any, index: any) => {
                    return {...item, key: index}
                });
                setItems(newData);
            })
            .catch(error => console.log(error));
    }, []);

    const columns = [
        {
            dataIndex: "program",
            title: (
                <div className={cls["launch-data"]}>
                    <h3>Program</h3>
                </div>
            ),
            render: (a: any, item: any) => (
                <Link to={`/programs/${item.nameUrlPath}`}>
                    <div className={cls["item-box"]}>
                        <div className={cls["img-box"]}>
                            <img src={`${item.logoURL}`} alt=""/>
                        </div>

                        <div className={cls.title}>{item.name}</div>
                    </div>
                </Link>
            ),
        },
        {
            dataIndex: "launchDate",
            title: (
                <div className={cls["launch-data"]}>
                    <h3>Launch</h3>
                    <span>
            date <Icons name="ArrowDown" size={18} color="#FFFFFF"/>
          </span>
                </div>
            ),
            render: (a: any, item: any) => <div>{item.launchDate}</div>,
        },
        {
            dataIndex: "reportResolve",
            title: (
                <div className={cls["launch-data"]}>
                    <h3>Reports</h3>
                    <span>
            resolved <Icons name="ArrowDown" size={18} color="#FFFFFF"/>
          </span>
                </div>
            ),
            render: (a: any, item: any) => <div>{item.numberOfAcceptedReports}</div>,
        },
        {
            dataIndex: "reportsAll",
            title: (
                <div className={cls["launch-data"]}>
                    <h3>Reports</h3>
                    <span>
            all <Icons name="ArrowDown" size={18} color="#FFFFFF"/>
          </span>
                </div>
            ),
            render: (a: any, item: any) => <div>{item.totalNumberOfReports}</div>,
        },
    ];

    return (
        <>
            <Navbar/>
            <section className={cls.wrapper}>
                <img
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F50%2FFacebook_Thumb_icon.svg%2F1200px-Facebook_Thumb_icon.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFacebook_like_button&tbnid=SOtsL-tjh8tJbM&vet=12ahUKEwiVk6OXlqb7AhWomIsKHcHTCTUQMygkegUIARCDAg..i&docid=-6aVpc92vooe_M&w=1200&h=928&q=face%20book&ved=2ahUKEwiVk6OXlqb7AhWomIsKHcHTCTUQMygkegUIARCDAg"
                    alt=""
                />
                <Table pagination={false} dataSource={items} columns={columns}/>
            </section>
            <Footer/>
        </>
    );
};

export default Directory;
