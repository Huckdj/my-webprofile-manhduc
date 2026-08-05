"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function BrandIcon({ name }) {
  const paths = {
    github: "M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.1 4.4 4.4 0 0 1 .1-3.1s1-.3 3.1 1.2a10.7 10.7 0 0 1 5.7 0c2.1-1.5 3.1-1.2 3.1-1.2a4.4 4.4 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5A11.3 11.3 0 0 0 12 .7Z",
    linkedin: "M20.5 3.5A2.5 2.5 0 1 1 15.5 3.5a2.5 2.5 0 0 1 5 0ZM16 8h4v12h-4V8Zm-12 0h4v12H4V8Zm2-6.5A2.5 2.5 0 1 1 6 6.5a2.5 2.5 0 0 1 0-5ZM11 8h3.8v1.6h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V20h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-4V8Z",
    facebook: "M14 8.5V6.7c0-.8.5-1 1-1h2.7V2.2L14.6 2C11.5 2 10 3.8 10 6.3v2.2H7V12h3v10h4V12h3.2l.5-3.5H14Z",
  };
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d={paths[name]} /></svg>;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-mono text-sm font-black text-slate-950">MD</span>
            <span className="font-semibold text-white">Bùi Mạnh Đức</span>
          </Link>

          <div className="flex gap-3">
            <a className="social-link" href="https://github.com/Huckdj" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a>
            <a className="social-link" href="https://www.linkedin.com/in/manhduc-huckdj2003/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a>
            <a className="social-link" href="mailto:manhduc132003@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="social-link" href="https://www.facebook.com/bmduc03/" target="_blank" rel="noreferrer" aria-label="Facebook"><BrandIcon name="facebook" /></a>
            <button className="social-link" onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp} /></button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-white/[.07] pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Bùi Mạnh Đức. All rights reserved.</p>
          <p>Designed &amp; built with care in Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}
