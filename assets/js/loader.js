/*
 * Hinweis: Die Kommentare in dieser Datei dienen meinem eigenen Verständnis
 * und zur Dokumentation des Codes während des Lernprozesses.
 */
loadComponent(`header`, `components/header.html`).then(() => {
  const navLinks = document.querySelectorAll('.global-navigation a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
loadComponent(`footer`, `components/footer.html`);




async function loadComponent(selector, path) {
  try {
    // HTML-Datei vom Server laden
    const response = await fetch(path);
    if (!response.ok) throw new Error('nicht gefunden');
    // Antwort in lesbaren Text umwandeln
    const html = await response.text();
    // Zielelement auf der Seite finden
    const element = document.querySelector(selector);
    // Geladenen HTML-Code in das Element einfügen
    element.innerHTML = html;
  } catch (error) {
    console.error(`Fehler beim Laden: ${path}`, error);
  }
}