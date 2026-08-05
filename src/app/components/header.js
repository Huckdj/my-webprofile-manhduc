"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const nav = [
  { vi: "Trang chủ", en: "Home", href: "/" },
  { vi: "Giới thiệu", en: "About", href: "/about" },
  { vi: "Dự án", en: "Projects", href: "/projects" },
  { vi: "Liên hệ", en: "Contact", href: "/contact" },
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("vn");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setLang(localStorage.getItem("lang") === "en" ? "en" : "vn");
    const fn = () => setScrolled(scrollY > 20);
    addEventListener("scroll", fn);
    return () => removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const toggleLang = () => {
    const next = lang === "vn" ? "en" : "vn";
    localStorage.setItem("lang", next);
    setLang(next);
    window.dispatchEvent(new Event("languagechange"));
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-5 ${scrolled ? "border-white/10 bg-[#070b16]/85 shadow-2xl shadow-black/30 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Trang chủ"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-mono text-sm font-black text-slate-950">
            MD
          </span>
          <span className="hidden font-semibold text-white sm:block uppercase">
            Mạnh Đức
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-lg px-4 py-2 text-sm transition ${pathname === n.href ? "bg-white/[.06] text-white" : "text-slate-400 hover:text-white"}`}
            >
              {lang === "vn" ? n.vi : n.en}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLang}
            className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-slate-300"
          >
            {lang === "vn" ? "VI" : "EN"}
          </button>
          <Link href="/contact" className="primary-btn !min-h-0 !px-4 !py-2">
            {lang === "vn" ? "Trao đổi" : "Let’s talk"}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={open ? faX : faBars} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 -z-10 flex flex-col items-center justify-center gap-7 bg-[#050814]/95 backdrop-blur-xl md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`text-3xl font-semibold ${pathname === n.href ? "text-cyan-300" : "text-slate-300"}`}
            >
              {lang === "vn" ? n.vi : n.en}
            </Link>
          ))}
          <button onClick={toggleLang} className="secondary-btn mt-4">
            {lang === "vn" ? "English" : "Tiếng Việt"}
          </button>
        </div>
      )}
    </header>
  );
}
