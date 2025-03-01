"use client";
import { useEffect, useState } from "react";
export default function AboutPage() {
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
          <div>GIỚI THIỆU</div>
        ) : (
          <div>ABOUT</div>
        )}
      </div>
      {currentlang === "vn" || currentlang === "" ? (
        <div className="container mx-auto mt-2">
          <h2 className="text-2xl font-bold">1. Giới thiệu bản thân</h2>
          <p className="text-lg p-4">
            - Tôi tên Bùi Mạnh Đức, sinh năm 2003 <br />- Một người hòa đồng, có
            thể nhanh chóng thích nghi với môi trường làm việc mới và có niềm
            đam mê với công nghệ máy tính. Hiện là sinh viên năm thứ cuối chuyên
            ngành Kỹ thuật phần mềm.
          </p>

          <h2 className="text-2xl font-bold">2. Học vấn</h2>
          <p className="text-lg p-4">
            - 8/2024-5/2025
            <ul className="pl-4">
              <li>+ Sinh viên năm 4 đại học Nguyễn Tất Thành</li>
              <li>+ GPA: 7.31/10</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">3. Kỹ năng</h2>
          <p className="text-lg p-4">
            <ul className="list-disc p-4">
              <li>Ngôn ngữ lập trình: HTML, CSS, JavaScript, C#, Python</li>
              <li>Kỹ năng lập trình cơ bản</li>
              <li>Công nghệ: ReactJS, NodeJS, .NET, Tailwind CSS, Nextjs</li>
              <li>Database: SQL server, MySQL</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">4. Cuộc thi tham gia</h2>
          <p className="text-lg p-4">
            Cuộc thi Kỹ thuật phần mềm của Khoa CNTT
            <p className="pl-2">
              + Sản phẩm dự thi: Website đặt phòng khách sạn sử dụng ReactJS và
              NodeJS
            </p>
          </p>

          <h2 className="text-2xl font-bold">5. Dự án cá nhân</h2>
          <p className="text-lg p-4">
            <ul className="list-disc p-4">
              <li>
                <strong>13/06/2022 - 15/08/2022:</strong> Thiết kế web sử dụng
                HTML và CSS – Giới thiệu về rắn
              </li>

              <li>
                <strong>26/12/2022 - 09/01/2023:</strong> Thiết kế và lập trình
                website bán giày sử dụng ASP .NET
              </li>
              <li>
                <strong>21/06/2023 - 25/08/2023:</strong> Hệ thống quản lý hàng
                tồn kho cho dược phẩm sử dụng WinForms
              </li>
              <li>
                <strong>20/4/2024 - 28/5/2024:</strong> Trang web bán đồng hồ
                cao cấp sử dụng ReactJS, NodeJS và MySQL
              </li>
              <ul>
                <li>
                  Link Github:{" "}
                  <a
                    href="https://github.com/Huckdj/watchstore-reactjs-mysql-"
                    className="text-[#1465ff]"
                  >
                    Xem dự án
                  </a>
                </li>
              </ul>

              <li>
                <strong>30/6/2024 - 30/7/2024:</strong> Trang web đặt phòng và
                quản lý khách sạn sử dụng ReactJS, NodeJS và MySQL
              </li>
              <ul>
                <li>
                  Link Github:{" "}
                  <a
                    href="https://github.com/Huckdj/hotel_mustekeers_project"
                    className="text-[#1465ff]"
                  >
                    Xem dự án
                  </a>
                </li>
              </ul>

              <li>
                <strong>5/7/2024 - 24/9/2024:</strong> Trang web cửa hàng đồ gia
                dụng
              </li>
              <ul>
                <li>
                  Link Github:{" "}
                  <a
                    href="https://github.com/Huckdj/home-appliance-website-reactjs-nodels-mysql"
                    className="text-[#1465ff]"
                  >
                    Xem dự án
                  </a>
                </li>
              </ul>

              <li>
                <strong>26/9/2024 - 5/1/2025:</strong> Trang web đặt lịch tiêm
                vaccine sử dụng reactjs và ASP.NET CORE 6
              </li>
              <ul>
                <li>
                  Link FE:{" "}
                  <a
                    href="https://github.com/Huckdj/reactjs_.netcore_VaccineProject_FE"
                    className="text-[#1465ff]"
                  >
                    Xem dự án
                  </a>
                </li>
                <li>
                  Link BE:{" "}
                  <a
                    href="https://github.com/Huckdj/Vaccine_api_ManhDuc"
                    className="text-[#1465ff]"
                  >
                    Xem dự án
                  </a>
                </li>
              </ul>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">6. Kinh Nghiệm</h2>
          <p className="text-lg p-4">
            8-2024-12-2024 <br/>
            <span className="p-4">
              - Thực tập Backend C# ASP.Net Core Tại Tập Đoàn Đầu Tư Công Nghệ Nam
              Long(NLT Group)
            </span>
          </p>

          <h2 className="text-2xl font-bold">7. Mục tiêu nghề nghiệp</h2>
          <p className="text-lg p-4">
            Xây dựng sự nghiệp lâu dài trong lĩnh vực này, tích lũy thêm kinh
            nghiệm và thăng tiến hơn nữa trong lĩnh vực.
          </p>
        </div>
      ) : (
        <div className="container mx-auto mt-2">
          <h2 className="text-2xl font-bold">1. About Me</h2>
          <p className="text-lg p-4">
            - My name is Bui Manh Duc, born in 2003. <br />- A sociable person,
            able to quickly adapt to new work environments, and passionate about
            computer technology. Currently, a final-year student majoring in
            Software Engineering.
          </p>

          <h2 className="text-2xl font-bold">2. Education</h2>
          <p className="text-lg p-4">
            - 8/2024 - 5/2025
            <ul className="pl-4">
              <li>+ Fourth-year student at Nguyen Tat Thanh University</li>
              <li>+ GPA: 7.31/10</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">3. Skills</h2>
          <p className="text-lg p-4">
            <ul className="list-disc p-4">
              <li>Programming Languages: HTML, CSS, JavaScript, C#, Python</li>
              <li>Basic Programming Skills</li>
              <li>
                Technologies: ReactJS, NodeJS, .NET, Tailwind CSS, Next.js
              </li>
              <li>Databases: SQL Server, MySQL</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">4. Competitions</h2>
          <p className="text-lg p-4">
            Software Engineering Competition by the Faculty of IT
            <p className="pl-2">
              + Project: Hotel booking website using ReactJS and NodeJS
            </p>
          </p>

          <h2 className="text-2xl font-bold">5. Personal Projects</h2>
          <p className="text-lg p-4">
            <ul className="list-disc p-4">
              <li>
                <strong>13/06/2022 - 15/08/2022:</strong> Web design using HTML
                and CSS – Snake introduction
              </li>

              <li>
                <strong>26/12/2022 - 09/01/2023:</strong> Designed and developed
                a shoe store website using ASP.NET
              </li>

              <li>
                <strong>21/06/2023 - 25/08/2023:</strong> Inventory management
                system for pharmaceuticals using WinForms
              </li>

              <li>
                <strong>20/04/2024 - 28/05/2024:</strong> Luxury watch
                e-commerce website using ReactJS, NodeJS, and MySQL
              </li>
              <ul>
                <li>
                  GitHub Link:{" "}
                  <a
                    href="https://github.com/Huckdj/watchstore-reactjs-mysql-"
                    className="text-[#1465ff]"
                  >
                    View Project
                  </a>
                </li>
              </ul>

              <li>
                <strong>30/06/2024 - 30/07/2024:</strong> Hotel booking and
                management website using ReactJS, NodeJS, and MySQL
              </li>
              <ul>
                <li>
                  GitHub Link:{" "}
                  <a
                    href="https://github.com/Huckdj/hotel_mustekeers_project"
                    className="text-[#1465ff]"
                  >
                    View Project
                  </a>
                </li>
              </ul>

              <li>
                <strong>05/07/2024 - Present:</strong> Home appliance e-commerce
                website
              </li>
              <ul>
                <li>
                  GitHub Link:{" "}
                  <a
                    href="https://github.com/Huckdj/home-appliance-website-reactjs-nodels-mysql"
                    className="text-[#1465ff]"
                  >
                    View Project
                  </a>
                </li>
              </ul>

              <li>
                <strong>26/09/2024 - 05/01/2025:</strong> Vaccine appointment
                booking website using ReactJS and ASP.NET Core 6
              </li>
              <ul>
                <li>
                  Frontend GitHub Link:{" "}
                  <a
                    href="https://github.com/Huckdj/reactjs_.netcore_VaccineProject_FE"
                    className="text-[#1465ff]"
                  >
                    View Project
                  </a>
                </li>
                <li>
                  Backend GitHub Link:{" "}
                  <a
                    href="https://github.com/Huckdj/Vaccine_api_ManhDuc"
                    className="text-[#1465ff]"
                  >
                    View Project
                  </a>
                </li>
              </ul>
            </ul>
          </p>

          <h2 className="text-2xl font-bold">6. Experience</h2>
          <p className="text-lg p-4">
            08/2024 - 12/2024 <br/>
            <span className="p-4">
              - Backend Internship in C# ASP.Net Core at Nam Long Technology
              Investment Group (NLT Group)
            </span>
          </p>

          <h2 className="text-2xl font-bold">7. Career Goals</h2>
          <p className="text-lg p-4">
            - To build a long-term career in this field, gain more experience, and
            advance further in the industry.
          </p>
        </div>
      )}
    </div>
  );
}
