import { Award, Users, Clock, MapPin } from "lucide-react";
import { site } from "../content/site";

const stats = [
  { icon: Users, number: String(site.stats.volunteers || 0), label: "Voluntarias y voluntarios" },
  { icon: Clock, number: String(site.stats.avgResponseMinutes || 0), label: "Tiempo medio respuesta (min)" },
  { icon: Award, number: String(site.stats.yearsOfService || 125), label: "Años de servicio" },
  { icon: MapPin, number: String(site.stats.stations || 1), label: "Cuarteles" },
];

export function AboutSection() {
  return (
    <section id="company" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {site.company.displayName} · {site.organization.name}
            </h2>
            {site.history.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 mb-4">{p}</p>
            ))}
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-lg bg-red-50 text-red-900">
              <div className="font-semibold">Ubicación</div>
              <div className="text-sm">{site.location.addressLine}</div>
              <div className="text-sm">{site.location.city} · {site.location.region}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

