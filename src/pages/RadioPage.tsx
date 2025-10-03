import { useEffect, useMemo, useRef, useState } from "react";
import {
  Radio,
  Play,
  ExternalLink,
  Phone,
  Copy,
  Volume2,
  Search,
  BookOpenText,
} from "lucide-react";
import { site } from "../content/site";

// ========================
// CONFIGURA AQUÍ TU FEED
// ========================
const FEED_EMBED_URL =
  "https://m.broadcastify.com/listen/feed/xxxxx?nocache=1"; // <-- reemplaza xxxxx
const FEED_POPOUT_URL =
  "https://m.broadcastify.com/listen/feed/xxxxx/web"; // <-- pop-out/standalone
const FEED_PUBLIC_URL =
  "https://www.broadcastify.com/listen/feed/xxxxx"; // <-- página pública del feed

// Diccionario de claves (ejemplo, ajusta o extiende)
type KeyItem = { code: string; text: string };
const RAW_KEYS: KeyItem[] = [
  { code: "0-0", text: "Silenciar transmisiones (fin: “Fin clave 0-0”)" },
  { code: "0-1", text: "Dar o ampliar preinforme" },
  { code: "0-2", text: "Se consulta y se informa / espere" },
  { code: "0-3", text: "Repita la información en forma lenta y pausada" },
  { code: "0-4", text: "Se trata de … (identificar naturaleza)" },
  { code: "0-5", text: "Indique su ubicación" },
  { code: "0-6", text: "Diríjase al lugar con alarmas" },
  { code: "0-7", text: "Llegue al lugar sin alarmas" },
  { code: "0-8", text: "Material mayor fuera de servicio" },
  { code: "0-9", text: "Material mayor en servicio" },
  // agrega el resto…
];

export default function RadioPage() {
  const [q, setQ] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Filtro de claves
  const keys = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RAW_KEYS;
    return RAW_KEYS.filter(
      (k) =>
        k.code.toLowerCase().includes(t) ||
        k.text.toLowerCase().includes(t) ||
        // atajos tipo “10-4”, “qap”
        (t === "qap" && k.text.toLowerCase().includes("recibido"))
    );
  }, [q]);

  // Limpieza TTS al desmontar
  useEffect(() => {
    return () => {
      if (speechSynthesis && speechSynthesis.speaking) speechSynthesis.cancel();
    };
  }, []);

  const speak = (text: string) => {
    try {
      if (!("speechSynthesis" in window)) return;
      if (speechSynthesis.speaking) speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(text);
      // español por defecto si está disponible
      const voice =
        speechSynthesis.getVoices().find((v) => v.lang.startsWith("es")) ??
        null;
      if (voice) u.voice = voice;
      u.rate = 1;
      u.pitch = 1;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      utterRef.current = u;
      speechSynthesis.speak(u);
    } catch {
      // no-op
    }
  };

  const handleCopy = async () => {
    const url = FEED_PUBLIC_URL;
    try {
      await navigator.clipboard.writeText(url);
      alert("Enlace copiado");
    } catch {
      prompt("Copia el enlace:", url);
    }
  };

  const openPop = () => {
    window.open(
      FEED_POPOUT_URL,
      "_blank",
      "noopener,noreferrer,width=460,height=720"
    );
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header local de la página */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-red-400" />
            <h1 className="font-semibold">Central de Alarmas — CBT</h1>
            <span className="ml-2 rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-medium text-red-300">
              Radio Live
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openPop}
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              title="Abrir player (ventana flotante)"
            >
              <Play className="w-4 h-4" />
              Abrir player
            </button>
            <a
              href={FEED_PUBLIC_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              title="Abrir página del feed"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir en pestaña
            </a>
            <button
              onClick={() => speak("Atención. Transmisión en vivo activa.")}
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              title="Leer"
            >
              <BookOpenText className="w-4 h-4" />
              Leer
            </button>
            <a
              href={`tel:${site.emergency.number}`}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium hover:bg-red-700"
              title={`Llamar ${site.emergency.number}`}
            >
              <Phone className="w-4 h-4" />
              {site.emergency.number}
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              title="Copiar enlace"
            >
              <Copy className="w-4 h-4" />
              Copiar enlace
            </button>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reproductor */}
        <section className="rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-lg">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
            <Volume2 className="w-4 h-4" />
            Reproductor
          </h2>

          <div className="rounded-md bg-neutral-800 ring-1 ring-white/10 overflow-hidden h-[520px]">
            <iframe
              title="Broadcastify Player"
              src={FEED_EMBED_URL}
              className="h-full w-full"
              allow="autoplay; encrypted-media"
              sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            />
          </div>

          <p className="mt-2 text-center text-xs text-neutral-400">
            Si el reproductor no carga aquí, usa “Abrir en pestaña”.
          </p>

          <p className="mt-4 text-center text-[11px] text-neutral-500">
            Cuerpo de Bomberos de Temuco · Frecuencia 5-3 · Uso demostrativo
          </p>
        </section>

        {/* Diccionario de claves */}
        <section className="rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-lg">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
            Diccionario de claves
          </h2>

          {/* búsqueda */}
          <div className="mb-3 flex items-center gap-2 rounded-md bg-neutral-800 px-2 py-1.5 ring-1 ring-white/10">
            <Search className="w-4 h-4 text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar: 0-4, 10-4, qap… (Enter)"
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              onKeyDown={(e) => {
                if (e.key === "Enter" && keys.length > 0) {
                  speak(`${keys[0].code}. ${keys[0].text}`);
                }
              }}
            />
          </div>

          {/* lista */}
          <div className="h-[520px] overflow-y-auto rounded-md bg-neutral-800 ring-1 ring-white/10">
            <ul className="divide-y divide-white/10">
              {keys.map((k) => (
                <li key={k.code}>
                  <button
                    onClick={() => speak(`${k.code}. ${k.text}`)}
                    className="group w-full text-left px-3 py-3 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex min-w-[3.25rem] justify-center rounded-md bg-neutral-900 px-2 py-1 text-xs font-semibold ring-1 ring-white/10 group-hover:bg-neutral-700/40">
                        {k.code}
                      </span>
                      <span className="text-sm text-neutral-200">{k.text}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 text-xs text-neutral-400">
            {speaking ? "Leyendo…" : "Haz click en una clave para leerla."}
          </div>
        </section>
      </div>
    </main>
  );
}
