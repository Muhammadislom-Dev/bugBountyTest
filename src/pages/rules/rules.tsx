import React from "react";
import ContactUs from "../../components/contact-us/contact-us";
import Footer from "../../components/footer/footer";
import Icons from "../../components/icons";
import Navbar from "../../components/navbar";
import cls from "./rules.module.scss";

interface RulesProps {}

const data = new Array(4).fill(1);


const Rules: React.FC<RulesProps> = () => (
  <>
    <Navbar />
    <section className={cls.wrapper}>
      <h2 className={cls.title}>Qoidalar</h2>

      {data.map((item, idx) => (
        <div key={idx} className={cls["card-wrapper"]}>
          <div className={cls.card}>
            <div className={cls.icon}>
              <Icons name="Rule" size={85} color="#0073e2" />
            </div>
              {/*todo edit rules*/}
            <p className={cls.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              luctus turpis semper venenatis orci arcu cursus. Blandit non
              integer sed condimentum et odio nullam non. Ullamcorper gravida
              aliquam sed commodo in pellentesque pretium nulla placerat.
            </p>
          </div>
        </div>
      ))}
    </section>
    <ContactUs />
    <Footer />
  </>
);

export default Rules;
