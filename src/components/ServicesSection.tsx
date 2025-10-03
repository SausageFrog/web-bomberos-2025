import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Flame, Shield, Heart, Truck, Users, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Combate de incendios",
    description: "Respuesta rápida a incendios estructurales, forestales y emergencias relacionadas, con material y entrenamiento permanente.",
  },
  {
    icon: Users,
    title: "Rescate y extricación",
    description: "Apoyo técnico en rescate vehicular, búsqueda y otras emergencias especializadas según coordinación del Cuerpo.",
  },
  {
    icon: Shield,
    title: "Prevención y educación",
    description: "Charlas, difusión y actividades de prevención para la comunidad, establecimientos y organizaciones.",
  },
  {
    icon: Truck,
    title: "Apoyo logístico",
    description: "Abastecimiento, apoyo de agua y coordinación con otras compañías y organismos de respuesta.",
  },
  {
    icon: Heart,
    title: "Primeros auxilios básicos",
    description: "Primera respuesta y asistencia inicial hasta la llegada de servicios especializados, según protocolos.",
  },
  {
    icon: AlertTriangle,
    title: "Respuesta a emergencias",
    description: "Coordinación en eventos mayores y desastres, en apoyo al Sistema de Protección Civil.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Especialidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprometidos con la protección, prevención y apoyo a nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

