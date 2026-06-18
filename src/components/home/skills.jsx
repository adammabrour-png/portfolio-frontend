import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Compétences</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([key, values]) => (
          <div key={key} className="bg-[#111] p-5 rounded-xl">
            <h3 className="text-blue-400 mb-3">{key}</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}