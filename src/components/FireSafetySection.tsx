import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, AlertTriangle, Home, Car } from "lucide-react";
import { site } from "../content/site";

const safetyTips = [
  {
    icon: Home,
    title: "Seguridad en el hogar",
    tips: [
      "Instala detectores de humo y prueba su funcionamiento mensualmente.",
      "Ten extintor en cocina y zonas de mayor riesgo, revisa su carga.",
      "Mantén vías de evacuación despejadas y planifica rutas de escape.",
      "No sobrecargues enchufes ni alargadores; revisa instalaciones eléctricas.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Prevención",
    tips: [
      "Nunca dejes la cocina desatendida cuando uses fuego o aceite.",
      "Guarda líquidos inflamables lejos de fuentes de calor.",
      "Limpia ductos, estufas y chimeneas con regularidad.",
      "Si sientes olor a gas, ventila y corta la fuente; no enciendas artefactos.",
    ],
  },
  {
    icon: Car,
    title: "Seguridad vehicular",
    tips: [
      "Lleva un extintor y verifica su estado periódicamente.",
      "Si el vehículo se recalienta, estaciónate en un lugar seguro.",
      "No fumes durante la carga de combustible.",
      "Realiza mantenciones preventivas.",
    ],
  },
];

export function FireSafetySection() {
  return (
    <section id="safety" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Consejos de seguridad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La prevención es clave. Comparte estas recomendaciones con tu familia y comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="grid gap-8">
              {safetyTips.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">Acciones ante emergencia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Si sientes olor a gas</h4>
                    <p className="text-red-700 text-sm">Ventila el lugar, no enciendas interruptores ni llamas y comunica la emergencia.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Si hay incendio</h4>
                    <p className="text-red-700 text-sm">Evacúa de inmediato, mantente fuera del lugar y llama a Bomberos: {site.emergency.number}.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

