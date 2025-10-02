// Contenido centralizable del sitio de la Primera Compañía
// Cambia aquí textos, contactos, redes, autoridades y unidades.

export type Authority = {
  role: string
  name: string
  period?: string
};

export type Unit = {
  code: string // Ej: "B-1", "RX-1"
  type?: string // Ej: "Bomba Urbana", "Rescate", etc.
  brand?: string
  model?: string
  year?: string
  plate?: string
  notes?: string
  features?: string[]
  detailsUrl?: string
};

export const site = {
  organization: {
    name: "Cuerpo de Bomberos de Temuco",
    city: "Temuco",
    region: "La Araucanía",
  },
  company: {
    displayName: "Primera Compañía",
    motto: "Labor Omnia Vincit – Todo lo vence el trabajo",
    foundedOn: "22 de julio de 1900", // Actualiza si corresponde
    shortDescription:
      "Compañía de tradición y servicio voluntario dedicada al combate de incendios, rescate y prevención en Temuco.",
  },
  emergency: {
    number: "132",
    nonEmergencyPhones: [
      { label: "Central (Referencia)", phone: "+56 45 221 0116" },
      { label: "Comandancia (Referencia)", phone: "+56 45 221 4702" },
    ],
    emails: [
      { label: "Contacto general", email: "contacto@bomberostemuco.cl" },
    ],
    officeHours: [
      { label: "Administración", value: "Lun–Vie 09:00–17:00" },
    ],
  },
  location: {
    addressLine: "Callejón Inglés Nº 449",
    city: "Temuco",
    region: "Región de La Araucanía, Chile",
    googleMapsUrl: "https://maps.google.com/?q=Temuco%2C+Chile", // Reemplaza por URL exacta
    // lat: -38.7359, lon: -72.5904, // Opcional
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/@",
  },
  stats: {
    volunteers: 0, // Edita con el número real
    avgResponseMinutes: 0,
    yearsOfService: 0, // O calcula según fundación
    stations: 1,
  },
  history: {
    paragraphs: [
      "La Primera Compañía del Cuerpo de Bomberos de Temuco es una de las unidades fundadoras y ha contribuido históricamente a la protección de la comunidad.",
      "Su lema ‘Labor Omnia Vincit’ refleja la vocación de servicio, disciplina y trabajo en equipo de sus voluntarias y voluntarios.",
      "Actualiza esta sección con hitos relevantes: fundación, modernización de material mayor, reconocimientos, emergencias significativas y programas comunitarios.",
    ],
  },
  authorities: {
    cuerpo: [
      { role: "Superintendente", name: "Por definir" },
      { role: "Vicesuperintendente", name: "Por definir" },
      { role: "Comandante", name: "Por definir" },
      { role: "Segundo Comandante", name: "Por definir" },
    ] as Authority[],
    compania: [
      { role: "Capitán", name: "Por definir" },
      { role: "Teniente 1º", name: "Por definir" },
      { role: "Teniente 2º", name: "Por definir" },
      { role: "Teniente 3º", name: "Por definir" },
      { role: "Maquinista", name: "Por definir" },
      { role: "Tesorero", name: "Por definir" },
      { role: "Secretario", name: "Por definir" },
    ] as Authority[],
  },
  units: [
    {
      code: "B-1",
      type: "Bomba Urbana",
      brand: "",
      model: "",
      year: "",
      plate: "",
      features: [],
      notes: "Completar con datos del carro bomba.",
      detailsUrl: "/units/b-1.html",
    },
    {
      code: "Q-1",
      type: "Quinta (Escala + Bomba)",
      brand: "",
      model: "",
      year: "",
      plate: "",
      features: [],
      notes: "Completar con datos del carro escala.",
      detailsUrl: "/units/q-1.html",
    },
    {
      code: "M-1",
      type: "Móvil de apoyo",
      brand: "",
      model: "",
      year: "",
      plate: "",
      features: [],
      notes: "Completar con datos del móvil de apoyo.",
      detailsUrl: "/units/m-1.html",
    },
  ] as Unit[],
  training: {
    days: ["Por definir"], // Ej: "Miércoles 20:00–22:00"
    recruitment: "Si te interesa postular, contáctanos por redes o correo y te guiaremos en los requisitos y el proceso de admisión.",
  },
  donation: {
    headline: "Apoya a la Primera Compañía",
    description:
      "Tu aporte nos ayuda a mantener y modernizar nuestro equipamiento, capacitaciones y programas de prevención.",
    bank: {
      accountName: "Primera Compañía – CBT Temuco",
      rut: "00.000.000-0",
      bankName: "Banco (actualiza)",
      accountType: "Cuenta Corriente",
      accountNumber: "00000000",
      email: "donaciones@bomberostemuco.cl",
    },
    donationLink: "https://",
    notes: "Reemplaza los datos por la información oficial de la Compañía.",
  },
} as const;

export type SiteContent = typeof site;
