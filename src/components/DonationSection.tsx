import { HandCoins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { site } from "../content/site";

export function DonationSection() {
  const b = site.donation.bank;
  return (
    <section id="donate" className="relative py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <HandCoins className="w-12 h-12 text-yellow-700" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{site.donation.headline}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{site.donation.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Datos bancarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <div><span className="font-semibold">Titular: </span>{b.accountName}</div>
              <div><span className="font-semibold">RUT: </span>{b.rut}</div>
              <div><span className="font-semibold">Banco: </span>{b.bankName}</div>
              <div><span className="font-semibold">Tipo de cuenta: </span>{b.accountType}</div>
              <div><span className="font-semibold">Nº de cuenta: </span>{b.accountNumber}</div>
              <div><span className="font-semibold">Correo: </span>{b.email}</div>
              <p className="text-sm text-gray-500 pt-2">{site.donation.notes}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Otras formas de aportar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Puedes aportar en línea o coordinar donaciones en especie y patrocinios.</p>
              <div>
                <a href={site.donation.donationLink} target="_blank" rel="noreferrer">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">Quiero donar</Button>
                </a>
              </div>
              <div className="text-sm text-gray-500">
                Si tu empresa quiere colaborar, escríbenos al correo de contacto para gestionar certificados y recepción.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
