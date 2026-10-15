document.addEventListener('DOMContentLoaded', () => {
  const words = ['UX/UI Design', 'Cross Media', 'Grafik Design','3D Modeling', 'Fotografie'];
  let index = 0;
  const animatedText = document.getElementById('animated-text');

  if (animatedText) {
    setInterval(() => {
      animatedText.classList.add('fade');
      setTimeout(() => {
        index = (index + 1) % words.length;
        animatedText.textContent = words[index];
        animatedText.classList.remove('fade');
      }, 100);
    }, 1500);
  }
});