import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Language.module.scss";

const languages = [
  {
    title: "uz",
  },
  {
    title: "en",
  },
];

function Language() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value: string): void => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  console.log(selectedLanguage);

  return (
    <div className={cls.language}>
      <div>
        {languages?.map((lang) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => onChangeLanguage(lang.title)}>
            {lang.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Language;
