import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import logo from "./img/logo_CBT_1600_2.png";
import { site } from "../content/site";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{site.organization.name}</h1>
              <p className="text-sm text-gray-600">
                {site.company.displayName} · {site.company.foundedOn}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Inicio</a>
            <a href="#company" className="text-gray-700 hover:text-red-600 transition-colors">Compañía</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Servicios</a>
            <a href="#authorities" className="text-gray-700 hover:text-red-600 transition-colors">Autoridades</a>
            <a href="#units" className="text-gray-700 hover:text-red-600 transition-colors">Unidades</a>
            <a href="#safety" className="text-gray-700 hover:text-red-600 transition-colors">Seguridad</a>
            <a href="#donate" className="text-gray-700 hover:text-red-600 transition-colors">Donaciones</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contacto</a>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Emergencias: {site.emergency.number}
          </Button>
        </div>
      </div>
    </header>
  );
}

