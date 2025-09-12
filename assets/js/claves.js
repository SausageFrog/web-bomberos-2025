// Compatibilidad: claves.html (#results) y radio-live.html (#keysList)
const input = document.getElementById('q') || document.getElementById('keysSearch');
const LIST_EL = document.getElementById('keysList') || document.getElementById('results');
let DATA = [];

// Carga flexible: intenta radio-codes primero, luego claves.json
(async function loadData(){
  let data = null;
  try{
    const r1 = await fetch('/data/radio-codes.temuco.json',{cache:'force-cache'});
    if(r1.ok){ data = await r1.json(); }
  }catch{}
  if(!data){
    try{
      const r2 = await fetch('/data/claves.json');
      if(r2.ok){ data = await r2.json(); }
    }catch{}
  }
  if(!data) data = {};

  // Normaliza a arreglo [{k,v}]
  if(Array.isArray(data.codes)){
    DATA = data.codes.map(it=>({ k: String(it.key||''), v: String(it.label||'') }));
  } else {
    DATA = Object.entries(data || {}).map(([k,v])=>({k,v}));
  }
  render(DATA);
})();

function render(list){
  if(!LIST_EL) return;
  const html = (list || []).map(({k,v}) =>
    `<div class="key-item result-item" role="option"><strong>${k}</strong><br><span>${v}</span></div>`
  ).join('');
  LIST_EL.innerHTML = html;
  // quitar cualquier restricción vieja aplicada por estilos previos
  LIST_EL.style.maxHeight = 'none';
  LIST_EL.style.height = 'auto';
  LIST_EL.scrollTop = 0;
}

function search(q){
  q = (q || '').trim().toLowerCase();
  if(!q) return render(DATA);
  const out = DATA.filter(({k,v}) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
  render(out);
}

input?.addEventListener('input', e => search(e.target.value));

(function hardenScroll(){
  // si algún estilo heredado bloquea el scroll, lo desactivamos
  document.body.style.overflow = 'auto';
  ['keys-pane','keys-wrap','sidebar','panel'].forEach(cls=>{
    document.querySelectorAll('.'+cls).forEach(el=>{ el.style.overflow = 'visible'; });
  });
})();
