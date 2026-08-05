"use client";

import { useEffect, useState } from "react";

export function useLang() {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => { const stored = localStorage.getItem("lang"); setLang(stored === "en" ? "en" : "vn"); };
    sync();
    window.addEventListener("languagechange", sync);
    return () => window.removeEventListener("languagechange", sync);
  }, []);

  const isVn = lang === "vn" || lang === null;

  return { lang, isVn, isReady: lang !== null };
}
