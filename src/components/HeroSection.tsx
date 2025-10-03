import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Phone, Shield, Clock } from "lucide-react";
import Background1 from "./img/BomberosHero1.png";
import Background2 from "./img/Background/BomberosHero2.jpg"
import Background3 from "./img/Background/BomberosHero3.jpg"
import { site } from "../content/site";

export function HeroSection() {
  const images = [Background1, Background2, Background3]; // tus fotos
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
  // inicia el intervalo
  timerRef.current = setInterval(() => {
    setIdx((i) => (i + 1) % images.length);
  }, 6000);
    return () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  }, [idx, images.length]);

  return (

    <section id="home" className="relative isolate text-white overflow-hidden min-h-[70vh]">
      {/* (opcional) oscurecedor extra encima del fondo */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* CAPAS DE FONDO con crossfade */}
      {images.map((src, i) => (
      <div
        key={src + i}
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          i === idx ? "opacity-100" : "opacity-0"
        } -z-20`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${src})`,
      }}
      aria-hidden={i !== idx}
      />
      ))}


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {site.organization.name}
              <span className="block text-white-300">{site.company.displayName}</span>
            </h1>
            <h4 className="text-2xl lg:text-3xl font-semibold mb-6">
              “{site.company.motto}”
              <span className="block text-blue-300">Fundada el {site.company.foundedOn}</span>
            </h4>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                {site.emergency.number} · Emergencias
              </Button>
              <a href="#company">
                <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-red-900">
                  Más información
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">24/7</div>
                <div className="text-sm text-gray-300">Respuesta</div>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Voluntariado</div>
                <div className="text-sm text-gray-300">Profesionalismo</div>
              </div>
              <div>
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Rápida</div>
                <div className="text-sm text-gray-300">Respuesta</div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}

/* Bloque rojo de contactos de emergencia - ELIMINADO
<div className="lg:block hidden">
            <div className="bg-red-600 p-8 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Contactos de emergencia</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-300" />
                  <div>
                    <div className="font-bold">Bomberos: {site.emergency.number}</div>
                    <div className="text-sm text-red-200">Atención 24/7</div>
                  </div>
                </div>
                {site.emergency.nonEmergencyPhones.map((p, i) => (
                  <div key={i} className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-red-300" />
                    <div>
                      <div className="font-bold">{p.label}: {p.phone}</div>
                      <div className="text-sm text-red-200">Consultas no emergencias</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
*/
