import { useState } from "react";
import { createProject } from "../../services/admin.api";

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    githubUrl: "",
    reportUrl: ""
  });

  const handleSubmit = async () => {
    await createProject(form);
    alert("Project created");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">New Project</h1>

      <input
        placeholder="Title"
        className="w-full p-2 bg-[#111] mt-4"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 bg-[#111] mt-4"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 px-4 py-2 rounded-xl"
      >
        Create
      </button>
    </div>
  );
}