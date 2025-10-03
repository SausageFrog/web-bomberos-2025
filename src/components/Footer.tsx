import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { site } from "../content/site";
import Logo from "./img/Logos/logo_CBT_1600_2.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/15 bg-white/5">
                  <img
                  src={Logo}
                  alt={`${site.organization.name} logo`}
                  className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{site.organization.name}</h3>
                </div>
              </div>

              <div className="flex space-x-4">
                {site.social.facebook && (
                  <a href={site.social.facebook} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </a>
                )}
                {site.social.x && (
                  <a href={site.social.x} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </a>
                )}
                {site.social.instagram && (
                  <a href={site.social.instagram} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#company" className="text-gray-400 hover:text-white transition-colors">Compañía</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="fixed top-1/2 right-4 bg-gray-900 text-white p-4 rounded shadow-lg z-50">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="font-semibold text-red-400">Emergencias: {site.emergency.number}</div>
                    <div className="text-sm text-gray-400">Atención 24/7</div>
                  </div>
                </div>
                {site.emergency.nonEmergencyPhones.map((p, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{p.label}</div>
                      <div className="text-sm text-gray-400">{p.phone}</div>
                    </div>
                  </div>
                ))}
                {site.emergency.emails.map((e, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{e.label}</div>
                      <div className="text-sm text-gray-400">{e.email}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div>{site.location.addressLine}</div>
                    <div className="text-sm text-gray-400">{site.location.city}</div>
                    <div className="text-sm text-gray-400">{site.location.region}</div>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 {site.organization.name} · {site.company.displayName}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*
       <li><a href="#authorities" className="text-gray-400 hover:text-white transition-colors">Autoridades</a></li>
                <li><a href="#units" className="text-gray-400 hover:text-white transition-colors">Unidades</a></li>
                <li><a href="#safety" className="text-gray-400 hover:text-white transition-colors">Seguridad</a></li>
                <li><a href="#donate" className="text-gray-400 hover:text-white transition-colors">Donaciones</a></li>

                 <div>
              <h4 className="font-semibold mb-4">Horario</h4>
              <ul className="space-y-2">
                {site.emergency.officeHours.map((h, i) => (
                  <li key={i} className="text-gray-400 flex justify-between">
                    <span>{h.label}:</span>
                    <span className="text-gray-300">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
*/ 
