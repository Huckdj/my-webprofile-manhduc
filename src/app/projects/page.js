"use client";
import { useEffect, useState } from "react";
export default function ProjectPage() {
  const [currentlang, setCurrentLang] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const curentlangs = localStorage.getItem("lang");
      setCurrentLang(curentlangs);
    }
  }, []);

  return (
    <div className="text-black">
      <div className="min-h-[200px] justify-center items-center flex bg-[#7ea2e4] text-white text-6xl font-mono">
        {currentlang === "vn" || currentlang === "" ? (
          <div>DỰ ÁN</div>
        ) : (
          <div>PROJECT</div>
        )}
      </div>

      {currentlang === "vn" || currentlang === "" ? (
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>26/09/2024 - 05/01/2025</strong>
              <p>
                Website đặt lịch tiêm vaccine sử dụng ReactJS và ASP.NET Core 6
              </p>
              <div className="">
                <a
                  href="https://github.com/Huckdj/reactjs_.netcore_VaccineProject_FE"
                  className="text-[#1465ff] block mt-2"
                >
                  Frontend
                </a>
                <a
                  href="https://github.com/Huckdj/Vaccine_api_ManhDuc"
                  className="text-[#1465ff] block mt-2"
                >
                  Backend ASP.NET CORE 6
                </a>
                <a
                  href="https://maduvaccinations.vercel.app/"
                  className="text-[#1465ff] block mt-2"
                >
                  Link Web Deploy
                </a>
              </div>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>13/06/2022 - 15/08/2022</strong>
              <p>Thiết kế website sử dụng HTML và CSS – Giới thiệu về rắn</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>26/12/2022 - 09/01/2023</strong>
              <p>Thiết kế và phát triển website cửa hàng giày bằng ASP.NET</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>21/06/2023 - 25/08/2023</strong>
              <p>Hệ thống quản lý kho dược phẩm sử dụng WinForms</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>20/04/2024 - 28/05/2024</strong>
              <p>
                Website thương mại điện tử đồng hồ cao cấp sử dụng ReactJS,
                NodeJS và MySQL
              </p>
              <a
                href="https://github.com/Huckdj/watchstore-reactjs-mysql"
                className="text-[#1465ff] block mt-2"
              >
                Link SoucreCode
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>30/06/2024 - 30/07/2024</strong>
              <p>
                Website đặt phòng và quản lý khách sạn sử dụng ReactJS, NodeJS
                và MySQL
              </p>
              <a
                href="https://github.com/Huckdj/hotel_mustekeers_project"
                className="text-[#1465ff] block mt-2"
              >
                Link SoucreCode
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>05/07/2024 - 24/09/2024</strong>
              <p>Website cửa hàng thiết bị gia dụng</p>
              <a
                href="https://github.com/Huckdj/home-appliance-website-reactjs-nodels-mysql"
                className="text-[#1465ff] block mt-2"
              >
                Link SoucreCode
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>26/09/2024 - 05/01/2025</strong>
              <p>
                Vaccine appointment booking website using ReactJS and ASP.NET
                Core 6
              </p>
              <div className="">
                <a
                  href="https://github.com/Huckdj/reactjs_.netcore_VaccineProject_FE"
                  className="text-[#1465ff] block mt-2"
                >
                  Frontend
                </a>
                <a
                  href="https://github.com/Huckdj/Vaccine_api_ManhDuc"
                  className="text-[#1465ff] block mt-2"
                >
                  Backend ASP.NET CORE 6
                </a>
                <a
                  href="https://maduvaccinations.vercel.app/"
                  className="text-[#1465ff] block mt-2"
                >
                  Web Deploy Link
                </a>
              </div>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>13/06/2022 - 15/08/2022</strong>
              <p>Website design using HTML and CSS – Introduction to snakes</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>26/12/2022 - 09/01/2023</strong>
              <p>
                Design and development of a shoe store website using ASP.NET
              </p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>21/06/2023 - 25/08/2023</strong>
              <p>Pharmaceutical warehouse management system using WinForms</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>20/04/2024 - 28/05/2024</strong>
              <p>
                Luxury watch e-commerce website using ReactJS, NodeJS, and MySQL
              </p>
              <a
                href="https://github.com/Huckdj/watchstore-reactjs-mysql"
                className="text-[#1465ff] block mt-2"
              >
                Source Code Link
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>30/06/2024 - 30/07/2024</strong>
              <p>
                Hotel booking and management website using ReactJS, NodeJS, and
                MySQL
              </p>
              <a
                href="https://github.com/Huckdj/hotel_mustekeers_project"
                className="text-[#1465ff] block mt-2"
              >
                Source Code Link
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow">
              <strong>05/07/2024 - 24/09/2024</strong>
              <p>Home appliance store website</p>
              <a
                href="https://github.com/Huckdj/home-appliance-website-reactjs-nodels-mysql"
                className="text-[#1465ff] block mt-2"
              >
                Source Code Link
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
