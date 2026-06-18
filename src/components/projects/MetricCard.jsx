export default function MetricCard({ title, value }) {
  return (
    <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}