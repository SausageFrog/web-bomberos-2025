import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">BT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Cuerpo de jdajdksjdjdklsaj Temuco</h1>
              <p className="text-sm text-gray-600">“Labor Omnia Vincit” – Todo lo Vence el Trabajo</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
            <a href="#safety" className="text-gray-700 hover:text-red-600 transition-colors">Fire Safety</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Emergencias: 132
          </Button>
        </div>
      </div>
    </header>
  );
}