document.querySelectorAll('.toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.toggle);
    const expanded = target.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', expanded);
    btn.textContent = expanded ? 'Weniger anzeigen' : 'Mehr anzeigen';
  });
});