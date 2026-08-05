"use client";

import { useLang } from "../hooks/useLang";

export default function AboutPage() {
  const { isVn } = useLang();

  const sections = isVn
    ? [
        {
          title: "Giới thiệu bản thân",
          content: (
            <p>
              Tôi tên Bùi Mạnh Đức, sinh năm 2003. Một người hòa đồng, có thể nhanh chóng thích nghi với môi trường làm việc mới và có niềm đam mê với công nghệ máy tính. Tốt nghiệp chuyên ngành Kỹ thuật phần mềm.
            </p>
          ),
        },
        {
          title: "Học vấn",
          content: (
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li>8/2024 - 5/2025: Sinh viên năm 4 ĐH Nguyễn Tất Thành</li>
              <li>GPA: 7.31/10</li>
            </ul>
          ),
        },
        {
          title: "Kỹ năng",
          content: (
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li>Ngôn ngữ: HTML, CSS, JavaScript, C#, Python</li>
              <li>Công nghệ: ReactJS, NodeJS, .NET, Tailwind CSS, Next.js</li>
              <li>Database: SQL Server, MySQL</li>
            </ul>
          ),
        },
        {
          title: "Kinh nghiệm",
          content: (
            <p className="text-slate-400">
              <strong className="text-white">8/2024 - 12/2024:</strong> Thực tập Backend C# ASP.Net Core tại Tập Đoàn Đầu Tư Công Nghệ Nam Long (NLT Group).
            </p>
          ),
        },
        {
          title: "Mục tiêu nghề nghiệp",
          content: (
            <p className="text-slate-400">
              Xây dựng sự nghiệp lâu dài trong lĩnh vực phát triển phần mềm, tích lũy kinh nghiệm và không ngừng học hỏi công nghệ mới.
            </p>
          ),
        },
      ]
    : [
        {
          title: "About Me",
          content: (
            <p>
              My name is Bui Manh Duc, born in 2003. A sociable person, able to quickly adapt to new work environments, and passionate about computer technology. Software Engineering graduate.
            </p>
          ),
        },
        {
          title: "Education",
          content: (
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li>8/2024 - 5/2025: Fourth-year student at Nguyen Tat Thanh University</li>
              <li>GPA: 7.31/10</li>
            </ul>
          ),
        },
        {
          title: "Skills",
          content: (
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li>Languages: HTML, CSS, JavaScript, C#, Python</li>
              <li>Technologies: ReactJS, NodeJS, .NET, Tailwind CSS, Next.js</li>
              <li>Databases: SQL Server, MySQL</li>
            </ul>
          ),
        },
        {
          title: "Experience",
          content: (
            <p className="text-slate-400">
              <strong className="text-white">08/2024 - 12/2024:</strong> Backend Internship in C# ASP.Net Core at Nam Long Technology Investment Group (NLT Group).
            </p>
          ),
        },
        {
          title: "Career Goals",
          content: (
            <p className="text-slate-400">
              Build a long-term career in software development, gain more experience, and continuously learn new technologies.
            </p>
          ),
        },
      ];

  return (
    <div className="container mx-auto px-4 pb-20 pt-28">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
          {isVn ? "Về tôi" : "About"}
        </p>
        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          {isVn ? "Giới thiệu" : "Introduction"}
        </h1>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        {sections.map((section, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <h2 className="mb-3 text-xl font-semibold text-white">{section.title}</h2>
            <div className="leading-relaxed text-slate-300">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
