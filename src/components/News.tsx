'use client';
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NewsItem {
  title: string;
  date: string;
  description: string;
}

const newsData: NewsItem[] = [
  {
    title: "Bomberos de Santiago reciben nuevos equipos",
    date: "12 de septiembre 2025",
    description:
      "La compañía de bomberos de Santiago estrenó nuevos cascos y uniformes de última tecnología para mejorar la seguridad en emergencias."
  },
  {
    title: "Incendio forestal controlado en Valparaíso",
    date: "10 de septiembre 2025",
    description:
      "Gracias al trabajo coordinado de más de 200 voluntarios, se logró controlar un incendio que amenazaba varias viviendas en la región."
  },
  {
    title: "Capacitación en rescate vehicular",
    date: "5 de septiembre 2025",
    description:
      "Bomberos de distintas comunas participaron en un curso intensivo sobre rescate en accidentes de tránsito."
  },
  {
    title: "Nueva estación de bomberos en Temuco",
    date: "1 de septiembre 2025",
    description:
      "Se inauguró una nueva estación con capacidad para 50 voluntarios, equipada con tecnología de última generación."
  }
];

export default function News() {
  const [showAll, setShowAll] = useState(false);

  const initialNews = newsData.slice(0, 3);
  const extraNews = newsData.slice(3);

  // Variants con tipado explícito
  const containerVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1, // efecto escalonado
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
        Noticias Recientes
      </h2>

      <div className="grid gap-6">
        {/* Primeras 3 noticias */}
        {initialNews.map((item, index) => (
          <motion.article
            key={item.title}
            layout
            className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </motion.article>
        ))}

        {/* Contenedor tipo acordeón con stagger */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              style={{ overflow: "hidden" }}
            >
              {extraNews.map((item) => (
                <motion.article
                  key={item.title}
                  layout
                  variants={itemVariants}
                  className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg mb-4"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botón animado */}
      {newsData.length > 3 && (
        <div className="text-center mt-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-red-700 text-red rounded-lg shadow hover:bg-red-800 transition"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </motion.button>
        </div>
      )}
    </section>
  );
}