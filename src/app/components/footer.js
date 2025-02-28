
"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
export default function FooterPage() {
  const [currentlang, setCurrentLang] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const curentlangs = localStorage.getItem("lang");
      setCurrentLang(curentlangs);
    }
  }, []);

  return (
    <div className=" bg-white/80 lg:min-h-[00px] mt-60">
      <div className="grid grid-cols-1 gap-3 pt-10 container mx-auto">
        <div className="justify-center grid">
          <span className="text-5xl lg:text-9xl font-mono text-center">
            {currentlang === "vn" || currentlang === "" ? (
              <>
                Cảm Ơn Đã <br /> Ghé Thăm
              </>
            ) : (
              <>
                Thank You For <br /> Watching
              </>
            )}
          </span>
          <div className="grid grid-cols-1 justify-center gap-3 mt-4">
            <div className="justify-center grid">
              <p className="uppercase text-lg lg:text-xl font-extralight justify-center grid">
                Contact
              </p>
              <a
                href="mailto:manhduc132003@gmail.com"
                className="flex items-center text-lg lg:text-xl text-[#134197] hover:text-[#3c6bc4]"
              >
                <span className="mr-2">
                  <img
                    src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740724394/4171344_card_day_letter_love_mail_icon_s298wq.png"
                    className="w-6 lg:w-10"
                  />
                </span>
                manhduc132003@gmail.com
              </a>
              <div className="gap-3 grid grid-cols-3 justify-center mt-6">
                <a href="https://www.facebook.com/bmduc03/" className="justify-center flex">
                  <img
                    src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740724715/874b8a0a-0a32-40f2-a7b2-1a5d437e2d6f.png"
                    className="w-6"
                  />
                </a>
                <a href="https://www.instagram.com/manh_duc_03/" className="justify-center flex">
                  <img
                    src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740724793/2e50d851-316d-44ce-9fae-d3d1e54d85eb.png"
                    className="w-6"
                  />
                </a>
                <a href="https://github.com/Huckdj" className="justify-center flex">
                  <img
                    src="https://res.cloudinary.com/dumx42hqq/image/upload/v1740724825/bdec3eac-aad8-49ed-9edc-c7a35d18829b.png"
                    className="w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/15 mt-6 text-sm justify-center flex">
            <p>Portfolio by Mạnh Đức, © 2024 . Code by Nextjs</p>
      </div>
    </div>
  );
}
