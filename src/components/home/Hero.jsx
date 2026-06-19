import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Adam Mabrour
        </motion.h1>

        <p className="mt-4 text-xl text-blue-400">
          Data Science & AI Portfolio
        </p>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          Transformer les données en décisions intelligentes grâce à
          l'analyse, la modélisation et l'intelligence artificielle.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            Explorer les projets
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            Télécharger CV
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}