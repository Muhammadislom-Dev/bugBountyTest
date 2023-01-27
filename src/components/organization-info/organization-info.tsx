import React from "react";
import cls from "./organization-info.module.scss";
import {Link} from "react-router-dom";
import Button from "../button";

interface OrganizationProps {
    organization: any;
    id: string | undefined;
}

const OrganizationInfo: React.FC<OrganizationProps> = ({organization, id}) => {
    return (
        <div className={cls.vdp}>
            <div className={cls["vdp-top"]}>
                <div className={cls["img-box"]}>
                    <img src="https://picsum.photos/200/200" alt=""/>
                </div>
                <h3 className={cls.title}>{organization.name}</h3>
                <Link to={`/submit-report/${id}`}>
                    <Button title="Submit report" type="secondary"/>
                </Link>
            </div>
            <div className={cls["vdp-bottom"]}>
                <p className={cls.subtitle}>{organization.description}</p>
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
    );
};

export default OrganizationInfo;