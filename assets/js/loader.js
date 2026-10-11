/*
 * Hinweis: Die Kommentare in dieser Datei dienen meinem eigenen Verständnis
 * und zur Dokumentation des Codes während des Lernprozesses.
 */
loadComponent(`header`, `components/header.html`);
loadComponent(`footer`, `Components/footer.html`);




async function loadComponent(selector, path) {
    // HTML-Datei vom Server laden
    const response = await fetch(path);
    // Antwort in lesbaren Text umwandeln
    const html = await response.text();
    // Zielelement auf der Seite finden
    const element = document.querySelector(selector);
    // Geladenen HTML-Code in das Element einfügen
    element.innerHTML = html;
}

