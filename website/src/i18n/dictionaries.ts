import en from "../../dictionaries/en.json";
import zhCN from "../../dictionaries/zh-CN.json";

import type { Locale } from "@/i18n/config";

type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "zh-CN": zhCN satisfies Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
