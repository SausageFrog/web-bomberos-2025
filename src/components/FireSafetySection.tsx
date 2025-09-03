import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, AlertTriangle, Home, Car } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const safetyTips = [
  {
    icon: Home,
    title: "Home Fire Safety",
    tips: [
      "Install smoke alarms on every level and in every bedroom",
      "Test smoke alarms monthly and replace batteries yearly",
      "Create and practice a home fire escape plan",
      "Keep fire extinguishers in key areas like kitchen and garage"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Fire Prevention",
    tips: [
      "Never leave cooking unattended",
      "Keep flammable materials away from heat sources",
      "Maintain electrical systems and replace damaged cords",
      "Clean dryer vents and chimneys regularly"
    ]
  },
  {
    icon: Car,
    title: "Vehicle Safety",
    tips: [
      "Keep a fire extinguisher in your vehicle",
      "Never smoke while refueling",
      "Pull over safely if your vehicle overheats",
      "Have your vehicle serviced regularly"
    ]
  }
];

export function FireSafetySection() {
  return (
    <section id="safety" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fire Safety Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prevention is the best protection. Follow these essential safety tips to keep your family safe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="grid gap-8">
              {safetyTips.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1563062067-7700e1d9ae1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlciUyMGdlYXIlMjBoZWxtZXR8ZW58MXx8fHwxNzU2NzUwNzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Firefighter equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-red-900/20 rounded-lg"></div>
            </div>
            
            <Card className="mt-8 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">Emergency Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">If you smell gas:</h4>
                    <p className="text-red-700 text-sm">Leave immediately, don't use electrical switches, and call 911 from a safe location.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">If there's a fire:</h4>
                    <p className="text-red-700 text-sm">Get out, stay out, and call 911. Never go back inside for belongings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}