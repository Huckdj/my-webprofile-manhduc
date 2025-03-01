"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

export default function Home() {
  const [currentlang, setCurrentLang] = useState<string | null>(null);

  const linkimgskill = [
    { id: 1, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740628868/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview_hilagc.png' },
    { id: 7, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740713717/Node.js_logo.svg_vyecnt.png' },
    { id: 2, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740628854/1__bJ2z2NRfTncHAv5UjUxwA-removebg-preview_kjngo5.png' },
    { id: 3, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740629197/javascript_logo_ggghxt.png' },
    { id: 4, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740713516/Npm-logo.svg_x0c0af.png' },
    { id: 5, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740713541/NET_Core_Logo.svg_t9ufa6.png' },
    { id: 6, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740713635/5968364_dvi4xa.png' },
    { id: 8, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740713693/mysql_mm9l90.svg' },
    { id: 9, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740714024/Tailwind_CSS_Logo.svg_eduoov.png' },
    { id: 10, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740714138/1175208_rbgxyu.webp' },
    { id: 11, Link: 'https://res.cloudinary.com/dumx42hqq/image/upload/v1740714223/css3_ekltr4.png' },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      const curentlangs = localStorage.getItem("lang");
      setCurrentLang(curentlangs);
    }
  }, []);


  return (
    <div className=" container mx-auto font-sans text-black p-2">
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-6 ">
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
          <div className=" text-xl grid grid-cols-2 gap-6 lg:px-12 lg:mt-5 mt-20">
            <Link href="/about" className=" p-2 bg-[#1465ff] justify-center flex text-white rounded-full font-semibold font-sans hover:bg-[#1465ff]/0 hover:text-black hover:border-2 hover:border-black transition-all delay-100 border-2 ease-in-out">
              {currentlang === 'vn' || currentlang === '' ? "Tìm hiểu thêm" : "Learn more"}
            </Link>
            <a href="https://github.com/Huckdj" className="p-2 border-2 justify-center flex border-black rounded-full font-semibold font-sans px-10 min-w-14 py-3 transition-all delay-100 ease-in-out hover:bg-[#1465ff] hover:text-white hover:border-white" target="_blank">GitHub</a>
          </div>
        </div>
        <div className="justify-center flex relative lg:mt-0 mt-20">
          <img src='https://res.cloudinary.com/dumx42hqq/image/upload/v1740305954/IMG_3117-removebg-preview_epmpfg.png' className="lg rounded-b-full z-10" alt="avatar" />
          <div className="absolute lg:left-1/4 left-0 top-1/3 font-extralight opacity-20">
            <p className="ml-4 whitespace-nowrap"><span>{"console.log('hello world')"}</span> <span className="ml-15 text-3xl">{"<HTML/>"}</span></p>
            <p className="text-3xl">$ npm install</p>
            <p className="text-2xl ml-3">$ npm run dev</p>
            <p className="text-4xl justify-end flex">$ npm start</p>
            <p className="text-4xl justify-start flex">{"//Bui Manh Duc"}</p>
          </div>
        </div>
      </div>

      {/* tab2 */}
      <div className="lg:mt-20 mt-20 ">
        <h1 className="lg:text-3xl text-lg font-bold text-[#1465ff] grid grid-cols-2 gap-0 items-center">
          <span className="uppercase">
            {currentlang === 'vn' || currentlang === '' ? " Kỹ năng " : "Skill"}
          </span>
          <span className="justify-end flex">
            <a className=" flex" href='/projects'>
              <span className="bg-[#1465ff] rounded-full p-2 text-white text-lg lg:text-xl font-semibold items-center flex px-4">{currentlang === 'vn' || currentlang === '' ? " Dự án của tôi" : "My Project"}
                <span className="items-center flex "><FontAwesomeIcon icon={faArrowRight} className='bg-white transition-all delay-150 ease-in-out hover:text-white hover:bg-[#1465ff] ml-2 border rounded-full p-1 text-black' /></span>
              </span>
            </a>
          </span>
        </h1>
      </div>
      <p className="font-extralight text-xl lg:text-2xl justify-center flex text-center py-2 lg:py-6">{currentlang === 'vn' || currentlang === '' ? 'Công nghệ, thư viện, kỹ năng mà tôi sử dụng:' : 'Technologies, libraries, and skills I use:'}</p>

      <div className="lg:block hidden">
        <div className="grid grid-cols-6 gap-28 justify-center items-center lg:px-40 mt-2 lg:mt-6">
          {linkimgskill.slice(0, 6).map((e, index) => (
            <span key={index}>
              <img src={e.Link} className="w-20" />
            </span>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-5 justify-center items-center lg:px-60 mt-12">
          {linkimgskill.slice(6, 12).map((e, index) => (
            <span key={index} className="justify-center flex">
              <img src={e.Link} className="w-20" />
            </span>
          ))}
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="grid grid-cols-3 gap-4  justify-center items-center lg:px-40 mt-2 lg:mt-6">
          {linkimgskill.map((e, index) => (
            <span key={index} className="justify-center flex">
              <img src={e.Link} className="w-20" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
