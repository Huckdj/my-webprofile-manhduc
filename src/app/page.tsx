/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
export default function Home() {
  const [currentlang, setCurrentLang] = useState<string | null>(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const curentlangs = localStorage.getItem("lang");
      setCurrentLang(curentlangs);
    }
  }, []);


  return (
    <div className=" container mx-auto font-sans text-black p-2">
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-1 ">
        <div className=" intro-homepage font-bold duration-500">
          <span className=" text-4xl  text-black">
            {currentlang === 'vn' || currentlang === '' ? <span>Xin Chào!</span> : <span>Hello!</span>}
          </span>
          <div className="lg:text-6xl text-xl">
            <div className="mt-6 flex ">
              <p>{currentlang === 'vn' || currentlang === '' ? "Tôi là" : "I'm"}&nbsp;</p>
              <p className="text-[#1465ff]">
                {currentlang === 'vn' || currentlang === '' ? 'Bùi Mạnh Đức' : 'Bui Manh Duc'}
              </p>
            </div>
            <p className="">
              Web Developer &&nbsp;BackEnd Developer
            </p>
          </div>
          <div className="font-medium mt-6 text-gray-500 lg:text-gray-400 text-xl">
            {currentlang === 'vn' || currentlang === '' ?
              "Tôi là sinh viên trường Đại học Nguyễn Tất Thành tốt nghiệp cử nhân ngành Kỹ Thuật Phần Mềm." :
              "I am a graduate of Nguyễn Tất Thành University with a Bachelor's degree in Software Engineering."
            }
          </div>
          <div className=" text-xl grid grid-cols-2 gap-6 lg:px-12 lg:mt-0 mt-20">
            <Link href="/about" className=" p-2 bg-[#1465ff] justify-center flex text-white rounded-full font-semibold font-sans hover:bg-[#1465ff]/0 hover:text-black hover:border-2 hover:border-black transition-all delay-100 border-2 ease-in-out">
              {currentlang === 'vn' || currentlang === '' ? "Tìm hiểu thêm" : "Learn more"}
            </Link>
            <a href="https://github.com/Huckdj" className="p-2 border-2 justify-center flex border-black rounded-full font-semibold font-sans px-10 min-w-14 py-3 transition-all delay-100 ease-in-out hover:bg-[#1465ff] hover:text-white hover:border-white" target="_blank">GitHub</a>
          </div>
        </div>
        <div className="justify-center flex relative lg:mt-0 mt-20">
          <img src='https://res.cloudinary.com/dumx42hqq/image/upload/v1740305954/IMG_3117-removebg-preview_epmpfg.png' className="lg rounded-b-full z-10" alt="avatar" />
        </div>
      </div>

      {/* tab2 */}
      <div className="lg:mt-20 mt-20">
        <h1 className="lg:text-3xl text-lg font-bold text-[#1465ff] grid grid-cols-2 gap-0 items-center">
          <span className="uppercase">
            {currentlang === 'vn' || currentlang === '' ? " Kỹ năng " : "Skill"}
          </span>
          <a className="justify-end flex" href='/projects'>
            <span className="bg-[#1465ff] rounded-full p-2 text-white text-lg lg:text-xl font-semibold items-center flex px-4">{currentlang === 'vn' || currentlang === '' ? " Dự án của tôi" : "My Project"}
              <span className="items-center flex "><FontAwesomeIcon icon={faArrowRight} className='bg-white transition-all delay-150 ease-in-out hover:text-white hover:bg-[#1465ff] ml-2 border rounded-full p-1 text-black' /></span>
            </span>
          </a>
        </h1>
      </div>
    </div>
  );
}
