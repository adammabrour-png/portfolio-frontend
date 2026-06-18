import DataViz from "./DataViz";

export default function SectionRenderer({ section }) {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
      
      {section.type === "context" && (
        <>
          <h2 className="text-blue-400 text-xl mb-2">Contexte</h2>
          <p className="text-gray-300">{section.content}</p>
        </>
      )}

      {section.type === "problem" && (
        <>
          <h2 className="text-red-400 text-xl mb-2">Problématique</h2>
          <p className="text-gray-300">{section.content}</p>
        </>
      )}

      {section.type === "analysis" && (
        <>
          <h2 className="text-green-400 text-xl mb-2">Analyse</h2>
          <p className="text-gray-300">{section.content}</p>
          <DataViz />
        </>
      )}

      {section.type === "visualization" && (
        <>
          <h2 className="text-purple-400 text-xl mb-2">Visualisation</h2>
          <DataViz />
        </>
      )}

      {section.type === "conclusion" && (
        <>
          <h2 className="text-yellow-400 text-xl mb-2">Conclusion</h2>
          <p className="text-gray-300">{section.content}</p>
        </>
      )}
    </div>
  );
}