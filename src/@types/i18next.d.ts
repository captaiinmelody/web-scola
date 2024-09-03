
import "i18next";
import en from "../locales/en/translation.json";
import id from "../locales/id/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      id: typeof id;
    };
    // other
  }
}