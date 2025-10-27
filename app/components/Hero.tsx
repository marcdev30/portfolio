"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="card flex flex-col lg:flex-row items-start gap-8">
      <div className="w-full lg:w-2/3">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Marc Colldeforns Armero
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl"
        >
          CTO & Full-stack developer — Experiencia en React, Node.js, Express,
          Next.js y proyectos que integran IA. Liderazgo técnico en equipos
          remotos y entrega de productos a escala.
        </motion.p>

        <div className="mt-6 flex gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition shadow-sm"
          >
            Experiencia
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 text-white hover:brightness-95 transition shadow"
          >
            Contacto
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          <strong>Email:</strong>{" "}
          <a className="underline" href="mailto:marcc3004@gmail.com">
            marcc3004@gmail.com
          </a>{" "}
          · <strong>Ubicación:</strong> Barcelona · <strong>LinkedIn:</strong>{" "}
          <a
            className="underline"
            href="https://linkedin.com/in/marc-colldeforns-643b56376"
          >
            /marc-colldeforns-643b56376
          </a>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.18 }}
        className="w-full lg:w-1/3 flex justify-center lg:justify-end"
      >
        <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
          {/* Replace with your image: /public/profile.jpg */}
          <img
            src="/profile.jpg"
            alt="Marc Colldeforns"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300x300.png?text=Marc";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
