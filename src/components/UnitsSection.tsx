import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { site } from "../content/site";

export function UnitsSection() {
  return (
    <section id="units" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Material Mayor</h2>
          <p className="text-gray-600">Unidades de la Compañía</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.units.map((u, i) => {
            const card = (
              <Card key={i} className="border-0 shadow-md group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{u.code}</CardTitle>
                    {u.type && <Badge variant="secondary">{u.type}</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-1">
                  {u.brand && u.model && (
                    <div>
                      <span className="font-semibold">Modelo: </span>
                      {u.brand} {u.model}
                    </div>
                  )}
                  {u.year && (
                    <div>
                      <span className="font-semibold">Año: </span>
                      {u.year}
                    </div>
                  )}
                  {u.plate && (
                    <div>
                      <span className="font-semibold">Patente: </span>
                      {u.plate}
                    </div>
                  )}
                  {u.notes && (
                    <p className="text-sm text-gray-600 pt-2">{u.notes}</p>
                  )}
                  {u.features?.length ? (
                    <div className="pt-2">
                      <div className="text-sm font-semibold mb-1">Características</div>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {u.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            );

            return u.detailsUrl ? (
              <a
                key={i}
                href={u.detailsUrl}
                target="_blank"
                rel="noopener"
                title={`Abrir detalles de ${u.code}`}
                className="block focus:outline-none focus:ring-2 focus:ring-red-500/40 rounded-lg"
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
}
