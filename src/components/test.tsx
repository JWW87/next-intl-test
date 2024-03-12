"use client"

import { useTranslations } from "next-intl";

export default function Test() {
  // Deze t methode bevat nu alle vertalingen die je in de bovenliggende layout.tsx aan de context provider meegeeft
  const t = useTranslations('IndexPage');

  return <p>
    {t("test")}
  </p>
}
