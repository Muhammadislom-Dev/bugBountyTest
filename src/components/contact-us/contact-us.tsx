import { useTranslation } from "react-i18next";
import Apply from "../apply";
import cls from "./contact-us.module.scss";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <section className={cls.wrapper}>
      <h2>{t("contact")}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>
      <div className={cls["form-wrapper"]}>
        <Apply />
      </div>
    </section>
  );
}

export default ContactUs;
