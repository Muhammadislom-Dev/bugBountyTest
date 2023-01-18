import {FunctionComponent, useCallback} from "react";
import "antd/dist/antd.min.css";
import {Input} from "antd";
import styles from "./settings.module.css";

const Settings: FunctionComponent = () => {
    const onAtkinsonTextClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='rectangle1']");
        if (anchor) {
            anchor.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }, []);

    const onVectorIconClick = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
            anchor.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }, []);

    return (
        <div className={styles.settings}>
            <div className={styles.bbp}>BBP</div>
            <div className={styles.uz}>UZ</div>
            <img className={styles.frameIcon} alt="" src="../frame.svg"/>
            <img className={styles.settingsChild} alt="" src="../group-1521.svg"/>
            <img className={styles.settingsItem} alt="" src="../ellipse-18@2x.png"/>
            <div className={styles.profileSettings}>Profile settings</div>
            <div
                className={styles.thisInformationExcept}
            >{`This information except (*) appears on your public profile, next to your comments, and in any reports that you submit   `}</div>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild}/>
                <img className={styles.groupItem} alt="" src="../group-1561.svg"/>
                <div
                    className={styles.pictureShouldBe}
                >{`Picture should be less than 2048x2048px and sized under 1 MB     `}</div>
                <img className={styles.groupInner} alt="" src="../group-1556.svg"/>
                <div className={styles.groupParent}>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.rectangleDiv}/>
                        <div className={styles.chooseFile}>Choose File</div>
                    </div>
                    <div className={styles.noFileChosen}>No file chosen</div>
                </div>
                <img className={styles.frameIcon1} alt=""/>
                <div className={styles.parsedWithMarkdownParent}>
                    <div className={styles.parsedWithMarkdownContainer}>
                        <span>{`  Parsed with `}</span>
                        <span className={styles.markdown}>Markdown</span>
                    </div>
                    <div className={styles.intro}>Intro</div>
                    <div className={styles.groupChild1}/>
                    <div className={styles.write}>Write</div>
                    <div className={styles.preview}>Preview</div>
                    <div className={styles.lineDiv}/>
                    <div className={styles.groupChild2}/>
                </div>
                <div className={styles.rectangleContainer}>
                    <div className={styles.groupChild3}/>
                    <div className={styles.updateProfile}>Update Profile</div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.fullnameParent}>
                        <div className={styles.noFileChosen}>Fullname(*)</div>
                        <div className={styles.johnParent}>
                            <div className={styles.john}>John</div>
                            <div className={styles.groupChild4} data-scroll-to="rectangle1"/>
                            <div className={styles.atkinson} onClick={onAtkinsonTextClick}>
                                Atkinson
                            </div>
                        </div>
                    </div>
                    <Input
                        className={styles.frameChild}
                        type="text"
                        defaultValue="john5@gmail.com"
                        size="middle"
                        placeholder="Email(*)"
                        bordered={false}
                    />
                    <div className={styles.fullnameParent}>
                        <div className={styles.noFileChosen}>Username</div>
                        <div className={styles.johnParent}>
                            <div className={styles.cyberb0y07}>cyberb0y_07</div>
                            <div className={styles.groupChild4}/>
                        </div>
                        <div className={styles.bbpuzcyberb0y07}>
                            <span>BBP.uz/</span>
                            <span className={styles.cyberb0y071}>cyberb0y_07</span>
                        </div>
                    </div>
                    <Input
                        className={styles.frameChild}
                        type="text"
                        defaultValue={`https://<website>`}
                        size="middle"
                        placeholder="Website"
                        bordered={false}
                    />
                    <div className={styles.countryParent}>
                        <div className={styles.noFileChosen}>Country</div>
                        <div className={styles.johnParent}>
                            <div className={styles.groupChild4} data-scroll-to="rectangle"/>
                            <div className={styles.vectorParent}>
                                <img
                                    className={styles.vectorIcon}
                                    alt=""
                                    src="../vector.svg"
                                    onClick={onVectorIconClick}
                                />
                                <div className={styles.noFileChosen}>
                                    Please select the country
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fullnameParent}>
                        <div className={styles.noFileChosen}>HackerOne handle</div>
                        <div className={styles.frameInner}/>
                        <div className={styles.httpshackeronecomusername}>
                            https://hackerone.com/username
                        </div>
                    </div>
                    <div className={styles.fullnameParent}>
                        <div className={styles.noFileChosen}>Linkedln handle</div>
                        <div className={styles.frameInner}/>
                        <div className={styles.httpshackeronecomusername}>
                            https://linkedin.com/username
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.myProfileParent}>
                <div className={styles.myProfile}>My profile</div>
                <div className={styles.myReports}>My reports</div>
                <div className={styles.payments}>Payments</div>
                <div className={styles.settingsParent}>
                    <div className={styles.myReports}>Settings</div>
                    <div className={styles.groupChild7}/>
                </div>
            </div>
            <Input
                className={styles.bugbountybbpuzAllRight}
                type="text"
                style={{width: "372px"}}
                size="middle"
                placeholder="2022 Bugbounty,BBP.uz All right reserved"
                bordered={false}
            />
            <div className={styles.settingsInner}>
                <div className={styles.myProfileGroup}>
                    <Input
                        className={styles.myProfile1}
                        type="text"
                        size="middle"
                        placeholder="My profile"
                        bordered={false}
                    />
                    <div className={styles.settings2}>Settings</div>
                    <div className={styles.myReportsParent}>
                        <Input
                            className={styles.myReports1}
                            type="text"
                            size="middle"
                            placeholder="My reports"
                            bordered={false}
                        />
                        <div className={styles.groupChild8}/>
                    </div>
                    <div className={styles.programs}>Programs</div>
                    <div className={styles.payments1}>Payments</div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
