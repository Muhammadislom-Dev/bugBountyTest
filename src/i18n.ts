import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const supportedLngs: string[] = ["uz", "en"];

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uz",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
