import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency",
    info: "911",
    description: "For fire, medical emergencies"
  },
  {
    icon: Phone,
    title: "Non-Emergency",
    info: "(555) 123-4567",
    description: "General inquiries"
  },
  {
    icon: Mail,
    title: "Email",
    info: "info@metrofire.gov",
    description: "General information"
  },
  {
    icon: MapPin,
    title: "Address",
    info: "123 Fire Station Rd",
    description: "Metro City, State 12345"
  }
];

const stations = [
  {
    name: "Station 1 (Headquarters)",
    address: "123 Fire Station Rd",
    phone: "(555) 123-4567"
  },
  {
    name: "Station 2 (Downtown)",
    address: "456 Main Street",
    phone: "(555) 123-4568"
  },
  {
    name: "Station 3 (Eastside)",
    address: "789 Oak Avenue",
    phone: "(555) 123-4569"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Metro Fire Department for non-emergency questions or services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-lg font-medium text-red-600 mb-1">{contact.info}</p>
                        <p className="text-sm text-gray-600">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-0 shadow-md bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Services:</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Administrative:</span>
                      <span className="font-medium">Mon-Fri 8AM-5PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fire Prevention:</span>
                      <span className="font-medium">Mon-Fri 9AM-4PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  For non-emergency inquiries, fire safety questions, or general information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please describe your inquiry..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Fire Stations */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Fire Stations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stations.map((station, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{station.name}</h4>
                      <p className="text-gray-600 mb-2">{station.address}</p>
                      <p className="text-red-600 font-medium">{station.phone}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}