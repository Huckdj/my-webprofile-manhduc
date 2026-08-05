"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, isVn, index = 0 }: { project: Project; isVn: boolean; index?: number }) {
  return <article className="project-card group">
    <div className={`project-visual visual-${index % 3}`}><span className="font-mono text-5xl font-bold text-white/10">0{project.id}</span><div className="project-window"><i /><i /><i /><div /></div></div>
    <div className="flex flex-1 flex-col p-6">
      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">{isVn ? project.period.vn : project.period.en}</span>
      <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-cyan-300">{isVn ? project.title.vn : project.title.en}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{isVn ? project.description.vn : project.description.en}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span className="tech-pill" key={item}>{item}</span>)}</div>
      {!!project.links?.length && <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">{project.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url} className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300">{isVn ? link.label.vn : link.label.en} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-xs" /></a>)}</div>}
    </div>
  </article>;
}
