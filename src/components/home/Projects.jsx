import { useEffect, useState } from "react";
import { getProjects } from "../../services/api";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => setProjects(res.data));
  }, []);

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">
        Projets (Case Studies)
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}