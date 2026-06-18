import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../services/api";

import ProjectHeader from "../components/project/ProjectHeader";
import SectionRenderer from "../components/project/SectionRenderer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(slug).then((res) => setProject(res.data));
  }, [slug]);

  if (!project) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <ProjectHeader project={project} />

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {project.sections?.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </div>
    </div>
  );
}