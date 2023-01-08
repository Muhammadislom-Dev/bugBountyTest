import {Collapse} from "antd";
import React from "react";
import cls from "./commonQuestions.module.scss";

const {Panel} = Collapse;

const items = [
    {
        header: "How does your platform operate?",
        texts: [
            `The platform operation involves several stages: 
            1. A researcher registers on the platform; Generates a vulnerability report for a particular program participating in the Bug Bounty; Sends a report with full description of the vulnerability exploitation; 
            2. The platform security analyst reviews the report and confirms the vulnerability; Prepares the report accordingly and submits it to the Coordinator; 
            3. The Coordinator generates a cover letter, attaches the vulnerability report to the letter and sends it to the owner of the information system where the vulnerability was discovered; 
            4.  The system owner either accepts or rejects the report indicating the substantiated reasons. If the report is accepted  the system owner sends the reward amount.`,
        ],
    },
    {
        header: "Where can I register and how do I submit a report?",
        texts: [
           `To register on the platform, follow the link (*sign up link). After registering in the Personal Account the researcher can send a report by going to the “send vulnerability” section.`,
        ],
    },
    {
        header: "How can I receive a reward?",
        texts: [
            `To receive a reward, you must fill in the valid bank details in your Personal Account. If your report is accepted by the information system owner, you may be allocated a certain reward amount, which will be displayed in your Personal Account. For further procedures to get a reward, the platform coordinator will personally contact you.`,
        ],
    },
    {
        header: "I`m interested in partnering with the business and using the products. How do we contact you?",
        texts: [
            `For questions about interaction with Bug Bounty please contact (*email)`,
        ],
    }
];

const CommonQuestions: React.FC = () => (
    <section className={cls.wrapper}>
        <h2 className={cls.title}>FAQ</h2>
        <Collapse accordion defaultActiveKey={0} ghost>
            {items.map((item, idx) => (
                <Panel className={cls.panel} header={item.header} key={idx}>
                    {item.texts.map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </Panel>
            ))}
        </Collapse>
    </section>
);
export default CommonQuestions;
