import { motion } from "framer-motion";

export default function ProjectHeader({ project }) {
  return (
    <div className="border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          {project.title}
        </motion.h1>

        <p className="text-gray-400 mt-4">
          {project.description}
        </p>

        <div className="flex gap-3 mt-6">
          {project.githubUrl && (
            <a className="px-4 py-2 bg-gray-800 rounded-xl" href={project.githubUrl}>
              GitHub
            </a>
          )}
          {project.reportUrl && (
            <a className="px-4 py-2 bg-blue-600 rounded-xl" href={project.reportUrl}>
              Rapport PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}