import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="bg-[#111] p-5 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          {project.description}
        </p>
      </div>
    </Link>
  );
}