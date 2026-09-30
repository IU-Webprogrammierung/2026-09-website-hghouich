# Persönlicher Webauftritt von Hebat-Allah Ghouich
## Projektbeschreibung 
Dieses Projekt entsteht im Rahmen des Wahlpflichtmoduls Projekt: Web-Programmierung (DLBUXPWP01) im Bachelorstudiengang Mediendesign an der IU Internationalen Hochschule.

Ziel des Projekts ist die Erstellung eines responsiven, nutzerfreundlichen Portfolios zur Präsentation meiner Arbeiten und Skills. Während die Inhalte und Projektergebnisse im Mittelpunkt stehen, liegt der technische Schwerpunkt auf der konsequenten Einhaltung von Usability- und Barrierefreiheitsstandards (WCAG 2.1, WAI-ARIA) sowie der Gestaltung eines technisch anspruchsvollen und interaktiven Nutzungserlebnisses.

## Seitenübersicht
### Hauptseiten
- `index.html`- Startseite
- `about.html`- Über Mich
- `projects.html`- Projekte
- `contact.html` - Kontakt

### Unterseiten
- `uxui.html`- Projekte Übersicht 
- `loaghapp.html`- Loagh App
- `multikulti-hotel.html`- Multi Kulti Website
- `crossmedia.html`- Projekte Übersicht 
- `villaoliveto.html`- Villa Oliveto Kampagne
- `grafikdesign.html`- Projekte Übersicht
- `tdg.html`- Theater der Gegenwart Logo & Visitenkarte
- `3d-scenes.html`- Projekte Übersicht
- `aquarium.html`- Aquarium 3D-Szene
- `vo-flasche.html`- Villa Oliveto 3D Flasche
- `fotografie.html` - Fotografie Seite mit Tabs 

### Rechtliches 
- `impressum.html`
- `datenschutz.html` 

### Sonstiges
- `404.html` – Fehlerseite (Seite nicht gefunden)

## Technologien 
| Technologie | Zweck | Phase |
| ----------- | ----- | ----- |
| **HTML5** | Semantische Seitenstruktur | Phase 1
| **CSS3** | Layout, Animationen, Dark Mode | Phase 2
| **Media Queries** | Responsive Breakpoints (Mobile 402px, Tablet 744px, Desktop 1512px) | Phase 2
| **JavaScript** | Tabs, Modal, Dark Mode Toggle, Sprach-Toggle (DE/EN/AR), Load-Animationen | Phase 2 & 3
| **Figma** | Hi-Fi Wireframes | Phase 1
| **Git/GitHub** | Versionskontrolle mit Conventional Commits | Phase 1, 2 & 3
| **Font Awesome** | Icon-Bibliothek | Phase 1
| **Fontshare** | Schriftart | Phase 2 

## Git-Strategie
**Branch:** main / *conventional Commits*
| Prefix | Verwendung |
| ------ | ---------- | 
| feat: | Neue Seite oder neue Funtkion hinzugefügt |
| fix: | Fehler behoben (Struktur, Barrierefreiheit, etc.) |
| chore: | Wartungsaufgaben (z.B. .gitignore) |
| refractor: | Code umstrukturiert ohne Funktionsänderung |
| docs: | Dokumentation |

### Tags
Jede Projektphase wird mit einem Git-Tag markiert:
- `v1.0-konzept` – Phase 1: Konzeptionsphase
- `v2.0-design` – Phase 2: Erarbeitungsphase
- `v3.0-final` – Phase 3: Finalisierungsphase

## Barrierefreiheit
- Semantisches HTML 
  - `<header>`
  - `<main>`
  - `<footer>`
  - `<nav>`
  - `<aside>`
  - `<form>`

- `lang="de"` 
- aria-label --> auf `<nav>` und Back-to-top Button
- `alt=""` --> auf allen Bilder
- `aria-hidden="true"` --> auf dekorative Icons und Elementen 
- `<label>` --> für alle Formularfelder
- `aria-current="page"`--> in der Breadcrumb Navigation
- `required` --> auf allen Pflichtfeldern im Formular

### Geplant
- prefers-reduced motion
- ARIA für Tabs und Modal

## Geplante Schritte
### CSS & Responsive Design (Phase II)
- CSS Custom Properties (Variablen) für Farben und Abstände *(8-Punkt-Rastersystem)*
- CSS Grid & Flexbox 
- Responsive Design mit Media Queries
- Dark Mode via CSS-Klassen
- Animationen & subtle Übergänge 

### JavaScript & Interaktivität (Phase III)
- Dark Mode Toggle 
- evt. Sprach-Toggle (DE / EN / AR)
- Tab-Navigation (Fotografie Seite)
- Sneak Peek Modal
- Lightbox für Bildgalerien
- Scroll- & Load-Animationen 
- Hamburger-Menü (Mobile)
- Wasserzeichen-Einbettung beim Bilddownload 







