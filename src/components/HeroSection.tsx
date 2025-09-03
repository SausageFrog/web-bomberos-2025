import { Button } from "./ui/button";
import { Phone, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-red-900 to-red-700 text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1626195212486-5d547a51a1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlciUyMHRydWNrJTIwZW1lcmdlbmN5fGVufDF8fHx8MTc1Njc1MDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Protegiendo a nuestra comunidad
              <span className="block text-red-300">24/7</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Activo con los incendios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                132 - Emergencias
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                Más información
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2 text-red-300" />
                <div className="font-bold">24/7</div>
                <div className="text-sm text-gray-300">Respuesta</div>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2 text-red-300" />
                <div className="font-bold">Certified</div>
                <div className="text-sm text-gray-300">Professionals</div>
              </div>
              <div>
                <Phone className="w-8 h-8 mx-auto mb-2 text-red-300" />
                <div className="font-bold">Fast</div>
                <div className="text-sm text-gray-300">Response</div>
              </div>
            </div>
          </div>
          
          <div className="lg:block hidden">
            <div className="bg-red-600 p-8 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Emergency Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-300" />
                  <div>
                    <div className="font-bold">Fire Emergency: 911</div>
                    <div className="text-sm text-red-200">24/7 Emergency Response</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-300" />
                  <div>
                    <div className="font-bold">Non-Emergency: (555) 123-4567</div>
                    <div className="text-sm text-red-200">General inquiries</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-300" />
                  <div>
                    <div className="font-bold">Fire Prevention: (555) 123-4568</div>
                    <div className="text-sm text-red-200">Safety inspections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}