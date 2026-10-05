# Persönlicher Webauftritt von Hebat-Allah Ghouich
## Projektbeschreibung 
Dieses Projekt entsteht im Rahmen des Wahlpflichtmoduls Projekt: Web-Programmierung (DLBUXPWP01) im Bachelorstudiengang Mediendesign an der IU Internationalen Hochschule.

Ziel des Projekts ist die Erstellung eines responsiven, nutzerfreundlichen Portfolios zur Präsentation meiner Arbeiten und Skills. Während die Inhalte und Projektergebnisse im Mittelpunkt stehen, liegt der technische Schwerpunkt auf der konsequenten Einhaltung von Usability- und Barrierefreiheitsstandards (WCAG 2.1, WAI-ARIA) sowie der Gestaltung eines technisch anspruchsvollen und interaktiven Nutzungserlebnisses.

## Seitenübersicht
### Hauptseiten
| Datei | Seite | Inhalt |
| ----- | ----- | ------ |
| `index.html` | Startseite | Hero-Bereich mit Name, animierte Tagline („Serving clean [Disziplin]" wechselt zwischen UX/UI Design, Cross Media, Fotografie, etc.), Intro-Text, CTA-Buttons (Projekte ansehen) & (Kontakt), Footer mit Datenschutz und Impressum. | 
|`about.html` | Über Mich | Portrait, Bio-Text, Design-Philosophie, Skills-Liste, Software-Kenntnisse, CTA Buttons (Projekte ansehen) & (Kontakt). |
| `projects.html`| Projekte | Grid-Übersicht aller Projektbereiche mit   Sneak Peeks und Verlinkung zu Unterseiten. |
| `contact.html` | Kontakt | Kontaktformular (Vorname, Nachname, E-Mail, Kategorie, Nachricht), Kontaktdaten, Social-Links | 

### Projektübersichten
| Datei | Seite | Inhalt |
| ----- | ----- | ------ |
| `uxui-preview.html` | UX/UI Sneak Peek | Teaser-Ansicht mit ausgewählten UX/UI-Projekten als Modal-Vorschau. |
| `uxui.html`| UX/UI Design Projekte | Projektvorschaukarten, Verlinkung zu Einzelprojekten | 
| `fotografie-preview.html`| Fotografie Sneak Peek | Teaser-Ansicht der Fotografie-Kategorie. | 
| `3d-preview.html` | 3D-Scenes Sneak Peek | Teaser-Ansicht der 3D-Visualisierungen. | 
| `3d-scenes.html` | 3D-Scenes | Projektübersicht 3D-Visualisierungen. | 

### Einzelprojektseiten
| Datei | Seite | Inhalt |
| ----- | ----- | ------ |
| `loaghapp.html` | Loagh App | Projektbeschreibung, Flows, Prozess (User Research, Konkurrenzanalyse, Informationsarchitektur, Design System), Scribbles, Plakat als finales Mockup. |
| `aquarium.html` | Aquarium 3D-Szene | Konzeptskizze, Clay-Render, Materialien (Node Editor Screenshots), finales Rendering, Detailaufnahmen (Discokugel, Lampen, Goldfische, Vase). |
| `fotografie.html` | Fotografie Seite mit Tabs | Tab-Navigation (Wild Life / Architecture / Nature) mit Bildgalerien und Texten pro Kategorie. |

### Rechtliches 
| Datei | Seite | Inhalt |
| ----- | ----- | ------ |
| `impressum.html` | Impressum | Angaben gemäß § 5 TMG, Kontaktdaten, Urheberrechtshinweis, Hinweis auf studentisches Projekt. | 
| `datenschutz.html` |  Datenschutz | DSGVO-konforme Datenschutzerklärung. |

### Sonstiges
| Datei | Seite | Inhalt |
| ----- | ----- | ------ |
 `404.html` | Fehlerseite (Seite nicht gefunden) | Benutzerdefinierte Fehlerseite: „404 — lost in the pixels. Ein Pixel zu weit gegangen." mit Link zur Startseite. | 
| Footer | (alle Seiten, exclusiv Home & 404 Seiten) | Impressum- und Datenschutz-Links, Copyright-Hinweis mit Urheberrechtsschutzvermerk für alle gezeigten Arbeiten, Designs, Fotografien und 3D-Renderings.|



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
- `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`,`aria-controls`, `aria-labelledb`y` für Tab-Navigation (Fotografie)

### Geplant
- prefers-reduced motion
- ARIA für Tabs und Modal
- Fokus-Management bei Tab-Navigation

## Geplante Schritte
### Fehlende Seiten (Phase 2)
- grafikdesign.html
- cross-media.html
- 3d-öl-flasche.html
- multikulti.html

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







