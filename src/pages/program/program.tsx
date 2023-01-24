import React from "react";
import Navbar from "../../components/navbar";
import cls from "./program.module.scss";
import Button from "../../components/button/button";
import Footer from "../../components/footer";

interface ProgramProps {
}

const Program: React.FC<ProgramProps> = () => (
    <>
        <Navbar/>
        <section className={cls.wrapper}>
            <div className={cls.vdp}>
                <div className={cls["vdp-top"]}>
                    <div className={cls["img-box"]}>
                        <img src="https://picsum.photos/200/200" alt=""/>
                    </div>
                    <h3 className={cls.title}>Go daddy VDP</h3>
                    <Button title="Submit report" type="secondary"/>
                </div>
                <div className={cls["vdp-bottom"]}>
                    <p className={cls.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna,
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis
                        leo
                    </p>

                    {/*<div className={cls.links}>*/}
                    {/*  <span>http/Go daddy</span>*/}
                    {/*  <span>@godaddy</span>*/}
                    {/*</div>*/}

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
                            <td className={cls["table-td"]}>0</td>
                            <td className={cls["table-td"]}>10</td>
                            <td className={cls["table-td"]}>10-10-2020</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={cls["policy-info"]}>
                <h2 className={cls.title}>Policy</h2>

                <div className={cls["policy-section"]}>
                    <h4>GoDaddy Vulnerability Disclosure Policy</h4>
                    <p>
                        GoDaddy’s Vulnerability Disclosure Program Terms and Conditions
                        ("Terms") cover your participation in the Vulnerability Disclosure
                        Program (the "Program"). By submitting any vulnerabilities to
                        GoDaddy or otherwise participating in the Program in any manner,
                        you agree and accept these Terms made between you and GoDaddy.com
                        LLC (“GoDaddy,” “us” or “we”). Each Service has a separate set of
                        terms applicable to that Service (the "Service Agreements"), to
                        include GoDaddy’s Universal Terms of Service, all of which are
                        incorporated by reference into these Terms. In the event of a
                        conflict between these Terms and the Service Agreements for a
                        particular Service, the Service Agreement control for that
                        particular Service only.
                    </p>
                </div>
                <div className={cls["policy-section"]}>
                    <h4>PROGRAM OVERVIEW</h4>
                    <p>
                        The Program enables users to submit vulnerabilities and
                        exploitation techniques to GoDaddy (“Submission”). No rewards will
                        be issued for Submissions. GoDaddy may change or cancel this
                        Program at any time, for any reason without notice.
                    </p>
                </div>
                <div className={cls["policy-section"]}>
                    <h4>PROGRAM SCOPE</h4>
                    <p>
                        Publicly accessible information systems, web property, or data
                        owned, operated, or controlled by GoDaddy.
                    </p>
                </div>
                <div className={cls["policy-section"]}>
                    <h4>Borderline Out-of-scope Vulnerabilities: </h4>
                    <ul>
                        <li>Autocomplete attribute on web forms</li>
                        <li> “Self” exploitation (such as Self-XSS)</li>
                        <li>Verbose error pages (without proof of exploitability)</li>
                        <li>Disclosure of server or software version numbers</li>
                        <li>
                            Use of known-vulnerable library (without proof of exploitability
                        </li>
                        <li>
                            Clickjacking / UI Redressing (without proof of exploitability)
                        </li>
                        <li> Content spoofing / text injection</li>
                        <li> Tabnabbing</li>
                        <li> Open Redirects that are not chained into a more</li>
                        <li> impactful vulnerability</li>
                    </ul>
                </div>
                <div className={cls["policy-section"]}>
                    <h4>UNSOLICITED IDEAS</h4>
                    <p>
                        {" "}
                        Other than your Submission, GoDaddy does not consider or accept
                        unsolicited proposals or ideas, including without limitation ideas
                        for new products, technologies, promotions, product names, product
                        feedback and product improvements ("Unsolicited Feedback"). If you
                        send any Unsolicited Feedback to GoDaddy through the Program or
                        otherwise, GoDaddy makes no assurances that your ideas will be
                        treated as confidential or proprietary. IF YOU DO NOT AGREE TO
                        THESE TERMS, PLEASE DO NOT SEND US ANY SUBMISSIONS OR OTHERWISE
                        PARTICIPATE IN THIS PROGRAM
                    </p>
                </div>

                <span className={cls.date}>Last updated on July 18, 2022</span>
            </div>

        </section>
        <section className={cls.wrapper}>
            <div className={cls.form}></div>
        </section>
        <Footer/>
    </>
);

export default Program;
