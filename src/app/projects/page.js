"use client";

import { useLang } from "../hooks/useLang";
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { isVn } = useLang();

  return (
    <div className="container mx-auto px-4 pb-20 pt-28">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          {isVn ? "Tất cả dự án" : "All Projects"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {isVn
            ? "Danh sách đầy đủ các dự án tôi đã thực hiện từ năm 2022 đến nay."
            : "Complete list of projects I've worked on from 2022 to present."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isVn={isVn} />
        ))}
      </div>
    </div>
  );
}
