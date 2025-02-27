/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function HeaderPage() {
  const pathname = usePathname();

  const [currentlang, setCurrentlang] = useState("");
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "vn" || !lang) {
      setCurrentlang("vn");
    } else {
      setCurrentlang("en");
    }
  }, [currentlang]);

  const handleChangeLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang === "vn" || !lang) {
      window.location.reload();
      localStorage.setItem("lang", "en");
      setCurrentlang("en");
    } else {
      window.location.reload();
      localStorage.setItem("lang", "vn");
      setCurrentlang("vn");
    }
  };
  const titleHeader = [
    { id: 1, titlevn: "trang chủ", title2: "Home", pathname: "/" },
    { id: 2, titlevn: "giới thiệu", title2: "ABOUT", pathname: "/about" },
    { id: 3, titlevn: "Dự án", title2: "project", pathname: "/projects" },
    { id: 4, titlevn: "Liên hệ", title2: "Contact", pathname: "/contact" },
  ];

  const [opentab, setOpentab] = useState(false);

  const handleupdatetab = () => {
    setOpentab(!opentab);
  };

  useEffect(() => {
    if (opentab) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [opentab]);
  return (
    <div className="text-black">
      <div className="hidden bg-white/75 border rounded-full mx-auto container mt-6 p-4 lg:flex items-center justify-between px-10 font-sans">
        {/* Logo */}
        <div className="text-2xl font-bold text-white py-2 px-2 rounded-full">
          <a href="/" alt="logo ">
            <img
              src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740054410/Screenshot_2025-02-20_191821-removebg-preview_ylvnge.png"
              className="w-[170px] block"
            />
          </a>
        </div>

        {/* Menu */}
        <nav className="grid grid-cols-4 gap-0 font-semibold text-md">
          {titleHeader.map((e) => (
            <Link
              href={e.pathname}
              key={e.id}
              className={`group hover:text-[#1465ff] justify-center px-4 flex uppercase relative ${
                pathname === e.pathname ? "text-[#1465ff]" : "text-gray-400"
              }`}
            >
              {currentlang === "vn" ? (
                <span>{e.titlevn}</span>
              ) : (
                <span>{e.title2}</span>
              )}
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* lang Button */}
        {currentlang === "vn" ? (
          <button
            className="flex justify-center space-x-2 border p-1 rounded-lg"
            onClick={handleChangeLang}
          >
            <span>VN</span>{" "}
            <img
              src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740368042/70a1b149-eb2d-4630-b1a9-b58002041aa2.png"
              className="w-6"
            />
          </button>
        ) : (
          <button
            className="flex justify-center space-x-2 border p-1 rounded-lg"
            onClick={handleChangeLang}
          >
            <span>EN</span>{" "}
            <img
              src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740368747/7aaeb7dd-b220-4d60-9b48-6df2ecd13223.png"
              className="w-6"
            />
          </button>
        )}
      </div>

      <div className=" flex lg:hidden min-h-12 max-h-12 container justify-between mx-auto bg-white/75 border rounded-full p-3 mt-4">
        <a href="/" alt="logo ">
          <img
            src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740054410/Screenshot_2025-02-20_191821-removebg-preview_ylvnge.png"
            className="w-28"
          />
        </a>
        <button onClick={handleupdatetab} className={`relative z-40 `}>
          <FontAwesomeIcon
            icon={opentab ? faX : faBars}
            className={`w-[50px] text-2xl transition-all duration-300 ease-in-out text-black ${
              opentab ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* tab open min screen : 780px  */}
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 lg:hidden  z-30 items-center
            flex h-full transition-all ease-in-out duration-300 ${
              opentab
                ? " h-screen bg-[url(https://res.cloudinary.com/dumx42hqq/image/upload/v1740305190/5_aqp3ry.jpg)] bg-cover"
                : "pointer-events-none h-0 opacity-0"
            }`}
      >
        <div
          className={` grid grid-rows-5 gap-6 items-center h-[300px]  ${
            opentab ? "" : " opacity-0 pointer-events-none"
          }`}
        >
          {titleHeader.map((e, index) => (
            <a
              href={e.pathname}
              key={e.id}
              className={` hover:text-[#1465ff] uppercase whitespace-nowrap font-semibold text-xl px-6 transition-all ease-in-out duration-700 ${
                pathname === e.pathname ? "text-[#1465ff]" : "text-gray-400"
              }
              ${opentab ? "h-full" : "h-0"}`}
            >
              {currentlang === "vn" ? (
                <span>
                  {index + 1}. {e.titlevn}
                </span>
              ) : (
                <span>
                  {index + 1}. {e.title2}
                </span>
              )}
            </a>
          ))}

          {/* lang Button */}
          {currentlang === "vn" ? (
            <button
              className="flex px-6  space-x-2 rounded-lg"
              onClick={handleChangeLang}
            >
              <span className="border justify-center border-gray-300 flex space-x-2">
                <span>VN</span>{" "}
                <img
                  src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740368042/70a1b149-eb2d-4630-b1a9-b58002041aa2.png"
                  className="w-6"
                />
              </span>
            </button>
          ) : (
            <button
              className="flex px-6  space-x-2 rounded-lg"
              onClick={handleChangeLang}
            >
              <span className="border justify-center border-gray-300 flex space-x-2">
                <span>EN</span>{" "}
                <img
                  src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740368747/7aaeb7dd-b220-4d60-9b48-6df2ecd13223.png"
                  className="w-6"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
