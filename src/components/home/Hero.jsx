import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Adam Mabrour
        </motion.h1>

        <p className="text-blue-400 mt-3 text-xl">
          Data Science & AI Portfolio
        </p>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Transformer les données en décisions intelligentes grâce à l'analyse, la modélisation et l'intelligence artificielle.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-blue-500 px-5 py-2 rounded-xl">
            Explorer les projets
          </button>
          <button className="border border-gray-600 px-5 py-2 rounded-xl">
            Télécharger CV
          </button>
        </div>
      </div>
    </section>
  );
}