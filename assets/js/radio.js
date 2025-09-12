// Radio Live modal accesible con focus trap básico
const STREAM_URL = 'https://<URL_DEL_STREAM>'; // configurar
const openBtn = document.getElementById('radioBtn');

const modal = document.createElement('div');
modal.id = 'radioModal';
modal.hidden = true;
modal.setAttribute('aria-hidden','true');
modal.innerHTML = `
  <div class="radio-overlay" style="position:fixed; inset:0; display:grid; place-items:center; background:rgba(0,0,0,.55);">
    <div role="dialog" aria-modal="true" aria-labelledby="radioTitle" class="radio-dialog" style="background:#fff; padding:20px; border-radius:14px; inline-size:min(560px,90vw)">
      <h2 id="radioTitle" style="margin-top:0">Radio Live</h2>
      <audio id="radioAudio" controls preload="none" style="inline-size:100%"></audio>
      <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:12px">
        <button id="closeRadio" class="btn btn-ghost">Cerrar</button>
      </div>
    </div>
  </div>`;
document.body.appendChild(modal);

const audio = modal.querySelector('#radioAudio');
if (audio) audio.src = STREAM_URL;

let lastFocused = null;

function getFocusable(){
  return Array.from(modal.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'))
    .filter(el => el.offsetParent !== null);
}

function trapKeydown(e){
  if(e.key !== 'Tab') return;
  const f = getFocusable();
  if(!f.length) return;
  const first = f[0];
  const last  = f[f.length - 1];
  const active = document.activeElement;
  if(e.shiftKey){
    if(active === first || active === modal){ e.preventDefault(); last.focus(); }
  } else {
    if(active === last){ e.preventDefault(); first.focus(); }
  }
}

function escClose(e){ if(e.key === 'Escape') closeModal(); }

function openModal(){
  if(modal.hidden === false) return;
  lastFocused = document.activeElement;
  modal.hidden = false;
  modal.removeAttribute('aria-hidden');
  openBtn?.setAttribute('aria-expanded','true');
  const f = getFocusable();
  (f[0] || modal.querySelector('#closeRadio'))?.focus();
  document.addEventListener('keydown', escClose);
  modal.addEventListener('keydown', trapKeydown);
}

function closeModal(){
  if(modal.hidden === true) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden','true');
  openBtn?.setAttribute('aria-expanded','false');
  if(audio) audio.pause();
  document.removeEventListener('keydown', escClose);
  modal.removeEventListener('keydown', trapKeydown);
  if(lastFocused && typeof lastFocused.focus === 'function'){
    lastFocused.focus();
  } else {
    openBtn?.focus();
  }
}

openBtn?.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
modal.addEventListener('click', (e)=>{
  if(e.target === modal || e.target === modal.firstElementChild){
    // Clic en overlay
    closeModal();
  }
});
modal.querySelector('#closeRadio')?.addEventListener('click', closeModal);
