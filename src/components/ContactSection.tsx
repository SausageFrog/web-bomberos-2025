import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { site } from "../content/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escríbenos para consultas no relacionadas a emergencias o información institucional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emergencias</h3>
                      <p className="text-lg font-medium text-red-600 mb-1">{site.emergency.number}</p>
                      <p className="text-sm text-gray-600">Atención 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {site.emergency.nonEmergencyPhones.map((p, i) => (
                <Card key={i} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{p.label}</h3>
                        <p className="text-lg font-medium text-gray-700 mb-1">{p.phone}</p>
                        <p className="text-sm text-gray-600">Consultas generales</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-0 shadow-md bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" /> Horario administrativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergencias:</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    {site.emergency.officeHours.map((h, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-600">{h.label}:</span>
                        <span className="font-medium">{h.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-700">{site.location.addressLine}</p>
                      <p className="text-sm text-gray-600">{site.location.city} · {site.location.region}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {site.emergency.emails.map((e, i) => (
                <Card key={i} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{e.label}</h3>
                        <p className="text-gray-700">{e.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Escríbenos</CardTitle>
                <CardDescription>
                  Para consultas no relacionadas a emergencias o información institucional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                      <Input placeholder="Tu apellido" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                    <Input type="email" placeholder="tu@correo.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <Input type="tel" placeholder="+56 9 1234 5678" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                    <Input placeholder="¿Cómo podemos ayudarte?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <Textarea placeholder="Describe tu consulta..." rows={4} />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Enviar</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
