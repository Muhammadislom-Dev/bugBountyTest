import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar";
import cls from "./program.module.scss";
import Button from "../../components/button/button";
import Footer from "../../components/footer";
import {Table} from "antd";
import {useParams} from "react-router-dom";
import ErrorPage from "../error-page/ErrorPage";

interface ProgramProps {
}

const Program: React.FC<ProgramProps> = () => {
        const {id} = useParams();
        const [organization, setOrganization] = useState<any>({});
        const [dataSource, setDataSource] = useState([]);

        const policyEditDate = organization.policyEditDate;
        const lastUpdatedDate = new Date(policyEditDate);
        const lastUpdated = lastUpdatedDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
        const [error1, setError1] = useState('');


        useEffect(() => {
            fetch(`http://localhost:8080/api/organizations/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then(data => {
                            console.log(data)
                            const newData = data.domains.map((item: any, index: any) => {
                                return {...item, key: index}
                            });
                            setOrganization(data);
                            setDataSource(newData);
                        });
                    } else {
                        response.text().then(value => {
                            setError1(value)
                        });
                    }
                })

        }, []);

        const columns = [
            {
                title: 'DOMAIN',
                dataIndex: 'domain',
                key: 'domain',
            },
            {
                title: 'BOUNTY',
                dataIndex: 'paid',
                key: 'bounty',
                render: (paid: boolean) => {
                    return paid ? 'PAID' : 'FOR REPUTATION';
                },
            },
        ];
        return <>
            {error1 ? <ErrorPage error={error1}/> :
                <>
                    <Navbar/>
                    <section className={cls.wrapper}>
                        <div className={cls.vdp}>
                            <div className={cls["vdp-top"]}>
                                <div className={cls["img-box"]}>
                                    <img src="https://picsum.photos/200/200" alt=""/>
                                </div>
                                <h3 className={cls.title}>{organization.name}</h3>
                                <Button title="Submit report" type="secondary"/>
                            </div>
                            <div className={cls["vdp-bottom"]}>
                                <p className={cls.subtitle}>
                                    {organization.description}
                                </p>

                                <table>
                                    <thead>
                                    <tr>
                                        <th className={cls["table-th"]}>Accepted reports</th>
                                        <th className={cls["table-th"]}>Reports resolved</th>
                                        <th className={cls["table-th"]}>Launch date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={cls["table-td"]}>{organization.totalNumberOfReports}</td>
                                        <td className={cls["table-td"]}>{organization.numberOfAcceptedReports}</td>
                                        <td className={cls["table-td"]}>{organization.launchDate}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cls["policy-info"]}>
                            <h2 className={cls.title}>Policy</h2>

                            <div className={cls["policy-section"]}>
                                <h4>{organization.name} Vulnerability Disclosure Policy</h4>
                                <p>
                                    {organization.policy}
                                </p>
                            </div>
                            <div className={cls["policy-section"]}>
                                <h4>PROGRAM OVERVIEW</h4>
                                <p>
                                    The Program enables users to submit vulnerabilities and
                                    exploitation techniques to {organization.name} (“Submission”). No rewards will
                                    be issued for Submissions. {organization.name} may change or cancel this
                                    Program at any time, for any reason without notice.
                                </p>
                            </div>
                            <div className={cls["policy-section"]}>
                                <h4>PROGRAM SCOPE</h4>
                                <p>
                                    Publicly accessible information systems, web property, or data
                                    owned, operated, or controlled by {organization.name}.
                                </p>
                            </div>
                            <div className={cls["policy-section"]}>
                                <h4>Guidelines </h4>
                                <p>{organization.guideLines}</p>
                            </div>
                            <div className={cls["policy-section"]}>
                                <h4>UNSOLICITED IDEAS</h4>
                                <p>
                                    {" "}
                                    Other than your Submission, {organization.name} does not consider or accept
                                    unsolicited proposals or ideas, including without limitation ideas
                                    for new products, technologies, promotions, product names, product
                                    feedback and product improvements ("Unsolicited Feedback"). If you
                                    send any Unsolicited Feedback to {organization.name} through the Program or
                                    otherwise, {organization.name} makes no assurances that your ideas will be
                                    treated as confidential or proprietary. IF YOU DO NOT AGREE TO
                                    THESE TERMS, PLEASE DO NOT SEND US ANY SUBMISSIONS OR OTHERWISE
                                    PARTICIPATE IN THIS PROGRAM
                                </p>
                            </div>


                            <span className={cls.date}>Last updated on {lastUpdated}</span>
                        </div>


                        <div className={cls["domains"]}>

                            <h3>Search objects</h3>
                            <Table pagination={false} dataSource={dataSource} columns={columns}/>
                        </div>

                    </section>
                    <section className={cls.wrapper}>
                        <div className={cls.form}></div>
                    </section>
                    <Footer/>
                </>}

        </>
    }

;

export default Program;
