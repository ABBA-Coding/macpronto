import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "MbKubc8LxeSQBhNfb4zKZg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",
    debug: false,  
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"]
    },
    supportedLngs: ["uz","ru","en","zh","sw"],
    interpolation: {
      escapeValue: false
    },
    
    backend: {
      loadPath: loadPath
    }
  })

