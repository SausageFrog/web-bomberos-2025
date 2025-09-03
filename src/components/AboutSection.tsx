import { Button } from "./ui/button";
import { Award, Users, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    icon: Users,
    number: "45",
    label: "Active Firefighters"
  },
  {
    icon: Clock,
    number: "3.2",
    label: "Average Response Time (min)"
  },
  {
    icon: Award,
    number: "72",
    label: "Years of Service"
  },
  {
    icon: MapPin,
    number: "3",
    label: "Fire Stations"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Metro Fire Department
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over seven decades, Metro Fire Department has been the guardian of our community, 
              providing exceptional fire protection and emergency services. Our dedicated team of 
              professional firefighters and paramedics work around the clock to ensure the safety 
              and well-being of our residents.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on maintaining the highest standards of training, equipment, and 
              response times. Our commitment extends beyond emergency response to include fire 
              prevention education, community outreach, and building a safer tomorrow for everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Join Our Team
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1682409137937-95d5354c94c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3RhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1Njc1MDcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Metro Fire Station"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-600">Always Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}