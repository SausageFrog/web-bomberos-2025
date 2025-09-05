import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, ExternalLink } from "lucide-react";
import { site } from "../content/site";

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Ubicación</h2>
          <p className="text-gray-600">Cuartel y datos de contacto</p>
        </div>
        <Card className="border-0 shadow-md max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" /> Dirección
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <div>{site.location.addressLine}</div>
            <div>{site.location.city}</div>
            <div className="text-sm text-gray-500">{site.location.region}</div>
            {site.location.googleMapsUrl && (
              <a href={site.location.googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-700 mt-4">
                Ver en Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

