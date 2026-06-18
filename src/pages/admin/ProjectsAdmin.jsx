import { useEffect, useState } from "react";
import { getProjects } from "../../services/api";
import { deleteProject } from "../../services/admin.api";
import { Link } from "react-router-dom";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  const load = () => {
    getProjects().then((res) => setProjects(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteProject(id);
    load();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Projects</h1>

      <Link to="/admin/projects/new" className="text-blue-400">
        + New Project
      </Link>

      <div className="mt-6 space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#111] p-4 rounded-xl flex justify-between">
            <span>{p.title}</span>

            <div className="flex gap-3">
              <button className="text-blue-400">Edit</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}