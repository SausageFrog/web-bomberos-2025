import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import logo from "./img/logo_CBT_1600_2.png";
import { site } from "../content/site";

export function Header() {
  const openRadio = (e: React.MouseEvent) => {
    e.preventDefault();
    const w = 520, h = 760;
    const y = (window.top?.outerHeight ? Math.max(0, (window.top.outerHeight - h) / 2) : 0);
    const x = (window.top?.outerWidth ? Math.max(0, (window.top.outerWidth - w) / 2) : 0);
    window.open(
      "/radio-live.html",
      "Radio Live – CBT",
      `popup=yes,width=${w},height=${h},left=${x},top=${y},menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes`
    );
  };
  return (
    <header className="site-header bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="Cuerpo de Bomberos de Temuco"
                className="site-logo h-10 md:h-12 w-auto object-contain select-none shrink-0"
                decoding="async"
                fetchPriority="high"
              />
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
            <a href="/companias.html" className="text-gray-700 hover:text-red-600 transition-colors">Compañías</a>
            <a href="#safety" className="text-gray-700 hover:text-red-600 transition-colors">Seguridad</a>
            <a href="#donate" className="text-gray-700 hover:text-red-600 transition-colors">Donaciones</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contacto</a>
          </nav>

          {/* Único botón Radio Live, visible en desktop y mobile */}
          <a
            href="/radio-live.html"
            onClick={openRadio}
            className="mr-3 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-sm font-semibold shadow hover:shadow-md text-red-700"
            aria-label="Abrir Radio en vivo"
            title="Abrir Radio en vivo"
          >
            <span className="relative inline-flex">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
            </span>
            Radio Live
          </a>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-8 h-4 mr-2" />
            Emergencias: {site.emergency.number}
          </Button>
        </div>
      </div>
    </header>
  );
}
