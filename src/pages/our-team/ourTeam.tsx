import React from "react";
import cls from "./ourTeam.module.scss";
import manBg from "../../assets/images/cuate.png";

import Icons from "../../components/icons";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ContactUs from "../../components/contact-us";

interface Meta {
  items: {
    name: string;
    job: string;
    social: {
      instagram: string;
      facebook: string;
      telegram: string;
    };
    photo: string;
  }[];
}

interface OurTeamProps {}

const items: Meta["items"] = [
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
  },
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000",
  },
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
  },
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
  },
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
  },
  {
    name: "Tom Cook",
    job: "Direktor, Product development",
    social: {
      telegram: "",
      instagram: "",
      facebook: "",
    },
    photo:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
  },
];

const OurTeam: React.FC<OurTeamProps> = () => (
  <>
    <Navbar />
    <div className={cls.wrapper}>
      {/* About-team */}
      <section className={cls["about-team"]}>
        <h2 className={cls.title}>Jamoa haqida</h2>
        <img src={manBg} alt="" />
        <p className={cls.subtitle}>
          Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing elit.
          Quis luctus turpis semper venenatis orci arcu cursus. Blandit non
          integer sed condimentum et odio <span>nullam non</span>. Ullamcorper
          gravida aliquam sed <span>commodo</span> in pellentesque pretium nulla
          placerat.
        </p>
      </section>
      {/* About-team */}

      {/* Our-team */}
      <section className={cls["our-team"]}>
        <h2 className={cls.title}>Bizning jamoa</h2>

      <div className={cls.members}>
        {items.map((item, idx) => (
          <div key={idx} className={cls.member}>
            <img className={cls.photo} src={item.photo} alt="" />
            <h3>{item.name}</h3>
            <p>{item.job}</p>
            <div className={cls.icons}>
              <Icons name="Facebook" size={25} />
              <Icons name="Instagram" size={25} />
              <Icons name="Telegram" size={25} />
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Our-team */}
  </div>
    <ContactUs />
    <Footer/>
  </>
);

export default OurTeam;
