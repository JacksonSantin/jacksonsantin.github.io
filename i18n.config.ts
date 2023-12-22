import pt from "./i18n/pt.json";
import en from "./i18n/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: {
    pt,
    en
  }
}))
