import React from "react";
import Navbar from "../../components/navbar";
import cls from "./profile.module.scss";
import { Link } from "react-router-dom"

import accountImg from "../../assets/images/profile-acc.svg"
import quesIcon from "../../assets/images/profile-ques.svg"
import matchesImg from "../../assets/images/profile-matches.svg"
import planetartImg from "../../assets/images/planetart.svg"

interface Profile {
  items: {
    title: number | string;
    description: string;
  }[]
}

interface ProfileProps {}

const items: Profile["items"] = [
  {
    title: -3.00,
    description: "Signal"
  },
  {
    title: "17th",
    description: "Persentage" 
  },
  {
    title: "-",
    description: "Impact" 
  },
  {
    title: "-",
    description: "Persentage" 
  },
  {
    title: -18,
    description: "Reputation" 
  },
  {
    title: "-",
    description: "Rank" 
  }
]

const Profile: React.FC<ProfileProps> = () => {
  return (
    <>
      <Navbar />
      <section className={cls.wrapper}>
        <div className={cls["profile-leftside"]}>

          <div className={cls.account}>
            <div className={cls["account-img"]}>
              <img src={accountImg} alt="" />
            </div>          
            <p className={cls["account-username"]}>Neo(cyberboy_07)</p>
            <div className={cls.line}></div>
            <p className={cls["account-date"]}>Joined april 2022</p>
          </div>

          <div className={cls.stats}>
            <div className={cls["stats-header"]}>
              <p className={cls["stats-header_title"]}>Stats</p>
              <select> 
                <option value="90">90 days</option>
                <option value="50">50 days</option>
                <option value="10">10 days</option>
              </select>
            </div>
            <div className={cls["stats-info"]}>
              {items.map((item) => (
                <div className={cls["stats-info_item"]}>
                  <p className={cls["stats-info_item_title"]}>{item.title}</p>
                  <p className={cls["stats-info_item_desription"]}>{item.description}</p>
                </div>
              ))}
            </div>
            <div className={cls["stats-footer"]}>
                <Link to="/">Learn how your stats affect invitations to private programs</Link>
            </div>
          </div>

          <div className={cls.credits}>
            <div className={cls["credits-header"]}>
              <p className={cls["credits-header-title"]}>Credits</p>
            </div>
            <div className={cls["credits-items"]}>
              <div className={cls["credits-item"]}>
                <p className={cls["credits-item_amount"]}>0</p>
                <p className={cls["credits-item_text"]}>Vulnerabilities found</p>
              </div>
              <div className={cls["credits-item"]}>
                <p className={cls["credits-item_amount"]}>1</p>
                <p className={cls["credits-item_text"]}>Thanks received</p>
              </div>
            </div>
          </div>
        </div>


        <div className={cls["profile-rightside"]}>

          <div className={cls.hacktivity}>
            <div className={cls["hacktivity-header"]}>
              <div className={cls["leftside"]}>
                <p className={cls["leftside-title"]}>Hacktivity</p>
                <img src={quesIcon} alt="" />
              </div>
              <select>
                <option>All</option>
                <option>All</option>
              </select>
            </div>
            <div className={cls["hacktivity-matches"]}>
              <div className={cls["matches-img"]}>
                <img src={matchesImg} alt="" />
              </div>
              <h3>No matches found</h3>
              <p>Nothing to show yet</p>
            </div>
          </div>  

          <div className={cls.thanks}>
            <div className={cls["thanks-header"]}>
              <div className={cls["leftside"]}>
                <div>
                  <h4>Thanks</h4>
                  <img src={quesIcon} alt="" />
                </div>
                <p>1 thanks received</p>
              </div>
              <h4>Valid/Closed</h4>
              <h4>Reputation</h4>
              <h4>Rank</h4>
            </div>
            <div className={cls["thanks-planetart"]}>
                <div className={cls["planetart-img-wrapper"]}>
                  <img src={planetartImg} alt="" />
                  <p>PlanetArt</p>
                </div>
                <div className={cls["planetart-valid"]}>
                  <b>0</b>
                  <p>/</p>
                  <p>0</p>
                </div>
                <p className={cls["planetart-reputation-rank"]}>7</p>
                <p className={cls["planetart-reputation-rank"]}>12</p>
            </div>
          </div>   
          
          <div className={cls.testimonials}>
            <div className={cls["testimonials-header"]}>
              <p>Testimonials</p>
            </div>
            <div className={cls["testimonials-content"]}>
              <h4>No testimonials found</h4>
              <p>cyberb0y_07 hasn’t received any testimonials yet</p>
            </div>
          </div>
             
        </div>
      </section>
    </>
  );
};

export default Profile;
