"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faDownload, faEnvelope, faLocationDot, faCheck, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "./hooks/useLang";
import ProjectCard from "./components/ProjectCard";
import CodeWindow from "./components/CodeWindow";
import { projects } from "@/data/projects";

const skillGroups = [
  { title: "Frontend", icon: "FE", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", icon: "BE", skills: ["Node.js", "ASP.NET Core", "C#", "REST API"] },
  { title: "Database & Tools", icon: "DB", skills: ["SQL Server", "MySQL", "Git", "Figma"] },
];

const stats = [
  { value: "7+", vn: "Dự án hoàn thành", en: "Projects completed" },
  { value: "10+", vn: "Công nghệ", en: "Technologies" },
  { value: "100%", vn: "Tinh thần học hỏi", en: "Growth mindset" },
];

export default function Home() {
  const { isVn } = useLang();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[92vh] items-center px-4 pb-20 pt-32">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="blob left-[8%] top-24 h-72 w-72 bg-blue-600/25" aria-hidden="true" />
        <div className="blob right-[5%] top-48 h-80 w-80 bg-cyan-500/15 [animation-delay:-3s]" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div className="reveal">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[.07] px-4 py-2 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
              {isVn ? "Sẵn sàng cho cơ hội mới" : "Available for new opportunities"}
            </div>
            <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[.22em] text-cyan-300">{isVn ? "Xin chào, tôi là" : "Hello, I am"}</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
              Bùi Mạnh Đức<span className="text-blue-400">.</span>
            </h1>
            <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
              {isVn ? "Tôi xây dựng " : "I build "}<span className="gradient-text">{isVn ? "sản phẩm số hữu ích." : "useful digital products."}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {isVn ? "Full-stack Developer tập trung vào trải nghiệm người dùng, kiến trúc sạch và hiệu năng. Tôi biến những bài toán thực tế thành sản phẩm web trực quan, nhanh và dễ mở rộng." : "A full-stack developer focused on user experience, clean architecture and performance. I turn real-world problems into intuitive, fast and scalable web products."}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="magnetic-btn primary-btn">{isVn ? "Xem dự án" : "View projects"}<FontAwesomeIcon icon={faArrowRight} /></Link>
              <Link href="/contact" className="magnetic-btn secondary-btn"><FontAwesomeIcon icon={faEnvelope} />{isVn ? "Liên hệ tôi" : "Contact me"}</Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-blue-400" />TP. Hồ Chí Minh, Việt Nam</span>
              <a href="https://github.com/Huckdj" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><FontAwesomeIcon icon={faCode} /></a>
              <a href="mailto:manhduc132003@gmail.com" className="social-link" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
          <div className="reveal [animation-delay:180ms]"><CodeWindow /></div>
        </div>
      </section>

      <section className="section-shell" id="about">
        <div className="section-kicker">01 / {isVn ? "Về tôi" : "About"}</div>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><h2 className="section-title">{isVn ? "Kỹ sư phần mềm với tư duy sản phẩm." : "A software engineer with a product mindset."}</h2></div>
          <div>
            <p className="text-lg leading-8 text-slate-400">{isVn ? "Tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học Nguyễn Tất Thành, tôi yêu thích việc kết hợp kỹ thuật vững chắc với thiết kế chỉn chu. Mục tiêu của tôi không chỉ là viết code chạy được, mà là tạo ra trải nghiệm người dùng đáng tin cậy." : "A Software Engineering graduate from Nguyen Tat Thanh University, I enjoy combining solid engineering with thoughtful design. My goal is not just working code, but reliable user experiences."}</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">{isVn ? "Đọc câu chuyện của tôi" : "Read my story"}<FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">{stats.map((stat) => <div className="glass-card p-6" key={stat.value}><strong className="block text-3xl text-white sm:text-4xl">{stat.value}</strong><span className="mt-2 block text-sm text-slate-500">{isVn ? stat.vn : stat.en}</span></div>)}</div>
      </section>

      <section className="section-shell" id="skills">
        <div className="section-heading"><div><div className="section-kicker">02 / {isVn ? "Năng lực" : "Expertise"}</div><h2 className="section-title">{isVn ? "Công nghệ tôi sử dụng" : "Tools I work with"}</h2></div><p>{isVn ? "Một bộ công cụ thực dụng để xây dựng sản phẩm từ ý tưởng đến triển khai." : "A pragmatic toolkit for taking products from idea to deployment."}</p></div>
        <div className="grid gap-5 md:grid-cols-3">{skillGroups.map((group) => <article className="glass-card group p-7" key={group.title}><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 font-mono text-sm font-bold text-cyan-300 transition group-hover:scale-110">{group.icon}</div><h3 className="text-xl font-semibold text-white">{group.title}</h3><div className="mt-5 space-y-3">{group.skills.map((skill) => <div className="flex items-center gap-3 text-sm text-slate-400" key={skill}><FontAwesomeIcon icon={faCheck} className="text-cyan-400" />{skill}</div>)}</div></article>)}</div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><div><div className="section-kicker">03 / {isVn ? "Hành trình" : "Journey"}</div><h2 className="section-title">{isVn ? "Kinh nghiệm & học vấn" : "Experience & education"}</h2></div></div>
        <div className="timeline mx-auto max-w-4xl space-y-6">
          <article className="timeline-card glass-card"><div className="timeline-icon"><FontAwesomeIcon icon={faBriefcase} /></div><span>08/2024 — 12/2024</span><h3>Backend Developer Intern</h3><p>NLT Group · ASP.NET Core, C#, SQL Server</p><p>{isVn ? "Phát triển REST API, xử lý dữ liệu và cộng tác trong quy trình xây dựng sản phẩm thực tế." : "Built REST APIs, worked with data and collaborated in a real product workflow."}</p></article>
          <article className="timeline-card glass-card"><div className="timeline-icon"><FontAwesomeIcon icon={faGraduationCap} /></div><span>2021 — 2025</span><h3>{isVn ? "Kỹ thuật Phần mềm" : "Software Engineering"}</h3><p>{isVn ? "Đại học Nguyễn Tất Thành" : "Nguyen Tat Thanh University"} · GPA 7.31/10</p></article>
        </div>
      </section>

      <section className="section-shell" id="projects">
        <div className="section-heading"><div><div className="section-kicker">04 / Portfolio</div><h2 className="section-title">{isVn ? "Dự án nổi bật" : "Featured projects"}</h2></div><Link href="/projects" className="secondary-btn">{isVn ? "Xem tất cả" : "View all"}<FontAwesomeIcon icon={faArrowRight} /></Link></div>
        <div className="grid gap-6 lg:grid-cols-3">{featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} isVn={isVn} index={index} />)}</div>
      </section>

      <section className="mx-auto mb-16 max-w-7xl px-4 sm:px-6">
        <div className="cta-panel relative overflow-hidden rounded-[2rem] border border-blue-400/20 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="relative z-10"><p className="section-kicker">{isVn ? "Cùng làm việc" : "Let’s work together"}</p><h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">{isVn ? "Bạn có một ý tưởng đáng để hiện thực hóa?" : "Have an idea worth bringing to life?"}</h2><p className="mx-auto mt-5 max-w-xl text-slate-400">{isVn ? "Tôi luôn sẵn sàng trao đổi về sản phẩm, cơ hội nghề nghiệp và những bài toán thú vị." : "I’m always open to product conversations, career opportunities and interesting problems."}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact" className="primary-btn"><FontAwesomeIcon icon={faEnvelope} />{isVn ? "Bắt đầu trò chuyện" : "Start a conversation"}</Link><Link href="/contact" className="secondary-btn"><FontAwesomeIcon icon={faDownload} />{isVn ? "Nhận CV" : "Request CV"}</Link></div></div>
        </div>
      </section>
    </div>
  );
}
