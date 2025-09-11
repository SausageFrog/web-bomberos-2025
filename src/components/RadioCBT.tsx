import React from "react";

const BROADCASTIFY_FEED_WEB = "https://www.broadcastify.com/webPlayer/14178";
const POPUP_WINDOW_NAME = "Central Alarmas Bomberos Temuco";

export function RadioCBT() {
  const openRadio = React.useCallback(() => {
    const features = [
      "popup",
      "width=420",
      "height=720",
      "menubar=no",
      "toolbar=no",
      "location=no",
      "status=no",
      "scrollbars=yes",
      "resizable=yes",
    ].join(",");
    window.open(BROADCASTIFY_FEED_WEB, POPUP_WINDOW_NAME, features);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={openRadio}
        aria-label="Abrir Radio CBT: Central de Alarmas – Cuerpo de Bomberos de Temuco"
        className="group flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500/40"
      >
        <span className="relative inline-flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75 group-hover:opacity-90 animate-ping"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </span>
        <span className="select-none">Radio CBT</span>
      </button>
    </div>
  );
}

