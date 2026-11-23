// theme toggle (light / dark)

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('#theme-toggle, #theme-toggle-mobile')) return;

  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});