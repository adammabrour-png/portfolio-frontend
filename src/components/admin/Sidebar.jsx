import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0f0f14] border-r border-gray-800 p-5">
      <h1 className="text-xl font-bold mb-10">Admin Panel</h1>

      <div className="space-y-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/blog">Blog</Link>
      </div>
    </div>
  );
}