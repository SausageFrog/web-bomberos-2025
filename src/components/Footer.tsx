import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FD</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Cuartel de Bomberos de Temuco</h3>
                  <h3 className="font-bold text-lg">Primera compañia</h3>
                  <p className="text-gray-400 text-sm">"Labor Omnia Vincit" – Todo lo Vence el Trabajo</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Dedicated to serving and protecting our community with professional 
                fire and emergency medical services since 1952.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#safety" className="text-gray-400 hover:text-white transition-colors">Fire Safety</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Fire Suppression</span></li>
                <li><span className="text-gray-400">Emergency Medical</span></li>
                <li><span className="text-gray-400">Fire Prevention</span></li>
                <li><span className="text-gray-400">Hazmat Response</span></li>
                <li><span className="text-gray-400">Rescue Operations</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="font-semibold text-red-400">Emergencias: 132</div>
                    <div className="text-sm text-gray-400">Respuesta 24/7</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <div>Telefono Comandancia</div>
                    <div className="text-sm text-gray-400">(+56) 45 2214702 </div>
                    <div>Telefono Superintendencia</div>
                    <div className="text-sm text-gray-400">(+56) 45 2210116</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <div>Email</div>
                    <div className="text-sm text-gray-400">superintendencia@bomberostemuco.cl</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div>Direccion Cuartel</div>
                    <div className="text-sm text-gray-400">Callejón Inglés Nº449, Temuco</div>
                    <div className="text-sm text-gray-400">Region de La Araucania, Chile</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Cuerpo de Bomberos de Temuco.
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