"use client"
// import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  const currentlang = localStorage.getItem('lang')
  return (
    <div className=" container mx-auto font-sans">
      <div className="mt-12 grid grid-cols-2 gap-1 ">
        <div className=" font-bold">
          <span className=" p-2 border-2 text-3xl border-[#1465ff] rounded-md">
            {currentlang === 'vn' || currentlang === '' ? <span>Xin Chào!</span> : <span>Hello!</span>}
          </span>
          <div className="text-6xl">
            <div className="mt-6 flex ">
              <p>{currentlang === 'vn' || currentlang === '' ? "Tôi là" : "I'm"}&nbsp;</p>
              <p className="text-[#1465ff]">
                {currentlang === 'vn' || currentlang === '' ? 'Bùi Mạnh Đức' : 'Bui Manh Duc'}
              </p>
            </div>
            <p className="">
              Web Developer & &nbsp; BackEnd Developer
            </p>
          </div>
          <div className="font-medium mt-6 text-gray-400 text-xl">
            {currentlang === 'vn' || currentlang === '' ?
              "Tôi là sinh viên trường Đại học Nguyễn Tất Thành tốt nghiệp cử nhân ngành Kỹ Thuật Phần Mềm." :
              "I am a graduate of Nguyễn Tất Thành University with a Bachelor's degree in Software Engineering."
            }
          </div>
          <div className="mt-6 text-xl">
            <Link href="/about" className=" p-2 bg-[#1465ff] text-white rounded-full font-semibold font-sans px-6 py-3 mr-6 w-10 hover:bg-[#1465ff]/0 hover:text-black hover:border-2 hover:border-black transition-all delay-100 border-2 ease-in-out">
            {currentlang === 'vn' || currentlang === '' ? "Tìm hiểu thêm" : "Learn more"}
            </Link>
            <a href="https://github.com/Huckdj" className="p-2 border-2 border-black rounded-full font-semibold font-sans px-10 min-w-14 py-3 transition-all delay-100 ease-in-out hover:bg-[#1465ff] hover:text-white hover:border-white" target="_blank">GitHub</a>
          </div>
        </div>
        <div className="justify-center flex relative">
          <img src='https://res.cloudinary.com/dumx42hqq/image/upload/v1740305954/IMG_3117-removebg-preview_epmpfg.png' className="rounded-b-full" />
        </div>
      </div>

      {/* tab2 */}
      <div className="lg:mt-20 mt-0">
        <h1 className=" text-3xl font-bold text-[#1465ff] grid grid-cols-2 gap-0">
          <span className="uppercase">
            {currentlang === 'vn' || currentlang === '' ? " Kỹ năng " : "Skill" }
          </span>
          <span className="justify-end flex"><Link href='/projects' className="bg-[#1465ff] rounded-full p-2 text-white text-xl font-semibold items-center flex px-4">{currentlang === 'vn' || currentlang === '' ? " Dự án của tôi" : "My Project" }
            <span className="items-center flex "><FontAwesomeIcon icon={faArrowRight} className='bg-white transition-all delay-150 ease-in-out hover:text-white hover:bg-[#1465ff] ml-2 border rounded-full p-1 text-black' /></span>
          </Link></span>
        </h1>
      </div>
    </div>
  );
}
