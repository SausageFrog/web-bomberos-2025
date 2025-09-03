import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Flame, Shield, Heart, Truck, Users, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Fire Suppression",
    description: "Rapid response to structural fires, wildfires, and emergency situations with state-of-the-art equipment and trained personnel."
  },
  {
    icon: Heart,
    title: "Emergency Medical Services",
    description: "Life-saving medical care and transport services with certified EMTs and paramedics available 24/7."
  },
  {
    icon: Shield,
    title: "Fire Prevention",
    description: "Educational programs, safety inspections, and community outreach to prevent fires before they start."
  },
  {
    icon: Truck,
    title: "Hazardous Materials",
    description: "Specialized response to chemical spills, gas leaks, and other hazardous material incidents."
  },
  {
    icon: Users,
    title: "Rescue Operations",
    description: "Technical rescue services including vehicle extrication, water rescue, and high-angle rescue operations."
  },
  {
    icon: AlertTriangle,
    title: "Disaster Response",
    description: "Coordinated response to natural disasters, mass casualty incidents, and large-scale emergencies."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive fire and emergency services to protect and serve our community
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