import React, {useState} from "react";
import Logo from "../../assets/images/BBP.svg";
import Button from "../button/button";
import HamMenu from "../ham-menu";
import Icons from "../icons";
import "animate.css";
import cx from "classnames";
import cls from "./navbar.module.scss";
import {Link} from "react-router-dom";
import {HashLink, NavHashLink} from "react-router-hash-link";

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsopen] = useState(false);

    return (
        <section className={cls.wrapper}>
            <Link to="/"> <img className={cls.logo} src={Logo} alt=""/></Link>
            <div className={cls.links}>
                {/*<NavHashLink to={"/#whyUs"}><p>Why us?</p></NavHashLink>*/}
                <Link to={"/team"}><p>Team</p></Link>
                <Link to="/rules"><p>Rules</p></Link>
                <Link to="/programs"><p>Programs</p></Link>
                <Link to="/program"><p>Program</p></Link>
                <Link to="/profile"><p>Profile</p></Link>
                <Link to="/payment"><p>Payment</p></Link>
                <Link to="/admin/companies"><p>Companies</p></Link>
                <Link to="/admin/users"><p>Users</p></Link>
                {/*<Link to="/admin"><p>Admin</p></Link>*/}
            </div>
            <div className={cls.corner}>
                <Link to={"/signup"}><Button title="SIGN UP" type="secondary"/></Link>
            </div>
            <div
                onClick={() => {
                    setIsopen(!isOpen);
                }}
                className={cls.hamburger}
            >
                <Icons name="Hamburger" size={30}/>
            </div>
            {isOpen && (
                <div
                    className={cx(
                        cls.ham,
                        `animate__animated ${
                            isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
                        } animate__faster `
                    )}
                >
                    <HamMenu handleClose={setIsopen}/>
                </div>
            )}
        </section>
    );
};

export default Navbar;
