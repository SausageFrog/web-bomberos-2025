import React, { useState } from "react";

interface NewsItem {
  title: string;
  date: string;
  description: string;
}

const newsData: NewsItem[] = [
  {
    title: "Bomberos de Santiago reciben nuevos equipos",
    date: "12 de septiembre 2025",
    description: "La compañía de bomberos de Santiago estrenó nuevos cascos y uniformes de última tecnología para mejorar la seguridad en emergencias."
  },
  {
    title: "Incendio forestal controlado en Valparaíso",
    date: "10 de septiembre 2025",
    description: "Gracias al trabajo coordinado de más de 200 voluntarios, se logró controlar un incendio que amenazaba varias viviendas en la región."
  },
  {
    title: "Capacitación en rescate vehicular",
    date: "5 de septiembre 2025",
    description: "Bomberos de distintas comunas participaron en un curso intensivo sobre rescate en accidentes de tránsito."
  },
  {
    title: "Nueva estación de bomberos en Temuco",
    date: "1 de septiembre 2025",
    description: "Se inauguró una nueva estación con capacidad para 50 voluntarios, equipada con tecnología de última generación."
  }
];

export default function News() {
  const [showAll, setShowAll] = useState(false);

  // Si showAll es true, mostramos todas; si no, solo 3
  const visibleNews = showAll ? newsData : newsData.slice(0, 3);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
        Noticias Recientes
      </h2>
      <div className="grid gap-6">
        {visibleNews.map((item, index) => (
          <article
            key={index}
            className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Botón para ver más / ver menos */}
      {newsData.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-red-700 text-red-700 rounded-lg shadow hover:bg-red-800 transition"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </section>
  );
}