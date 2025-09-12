// Mantener espacio para header al navegar por anclas
document.querySelectorAll('.anchor').forEach((a)=>{
  a.style.scrollMarginTop = 'calc(var(--header-h) + 16px)';
});

// (Opcional) realzar foco al navegar por teclado
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab') document.documentElement.classList.add('using-tab');
});
