import Apply from "../apply";
import cls from "./contact-us.module.scss";

function ContactUs() {
    return (
        <section className={cls.wrapper}>
            <h2>CONTACT US</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                purus sit amet luctus venenatis
            </p>
            <div className={cls["form-wrapper"]}>
                <Apply/>
            </div>
        </section>
    );
}

export default ContactUs;
