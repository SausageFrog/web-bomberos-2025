import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { site } from "../content/site";

export function AuthoritiesSection() {
  return (
    <section id="authorities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Autoridades</h2>
          <p className="text-gray-600">Directiva del Cuerpo y Oficialidad de la Compañía</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Directiva del Cuerpo</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-gray-100">
                {site.authorities.cuerpo.map((a, i) => (
                  <li key={i} className="py-3 flex justify-between">
                    <span className="text-gray-600">{a.role}</span>
                    <span className="font-medium text-gray-900">{a.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Oficialidad de Compañía</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-gray-100">
                {site.authorities.compania.map((a, i) => (
                  <li key={i} className="py-3 flex justify-between">
                    <span className="text-gray-600">{a.role}</span>
                    <span className="font-medium text-gray-900">{a.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

