import Sidebar from "../../components/admin/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-[#111] p-5 rounded-xl">Projects</div>
          <div className="bg-[#111] p-5 rounded-xl">Articles</div>
          <div className="bg-[#111] p-5 rounded-xl">Messages</div>
        </div>
      </div>
    </div>
  );
}