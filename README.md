# 📸 Fotogram

Ein responsives Fotogalerie-Projekt mit JavaScript, HTML und CSS.  
Die Anwendung zeigt eine Bildergalerie mit Dialog-Ansicht, Navigation zwischen Bildern sowie einem modernen Responsive Design.

---

## 🚀 Features

- 📷 Dynamische Bildergalerie
- 🔍 Dialog / Lightbox für einzelne Bilder
- ⬅️➡️ Navigation zwischen Bildern
- 📱 Responsive Design mit mehreren Breakpoints
- 🎨 Modernes UI mit CSS Variablen
- ♿ Accessibility mit `aria-label`
- 🖼️ Dynamisches Rendern über JavaScript Arrays & Objekte

---

## 🛠️ Verwendete Technologien

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Projektstruktur

```bash
Fotogram/
│
├── img/
│   ├── auto.svg
│   ├── coden.svg
│   ├── ...
│
├── style.css
├── script.js
└── index.html
```

---

## ⚙️ Funktionen im Projekt

### `initGallary()`

Initialisiert die Galerie und rendert alle Bilder dynamisch.

```javascript
function initGallary() {
    dialogInitPhoto.innerHTML = "";

    for(let index = 0; index < allImages.length; index++){
        dialogInitPhoto.innerHTML += photoTemplet(index);
    }

    updateLayout();
}
```

---

### `openDialog(photoId)`

Öffnet das Dialogfenster mit dem ausgewählten Bild.

```javascript
function openDialog(photoId) {
    renderPhoto(photoId);
    dialogREF.showModal();
}
```

---

### `updateDialog()`

Aktualisiert Bild, Titel und Seitenzahl beim Navigieren.

```javascript
function updateDialog() {
    let img = allImages[dialogIndex];

    dialogHeadline.innerText = img.name;
    dialogPhoto.src = img.link;
    dialogPhoto.alt = img.alt;
    dialogPageNumber.innerText = `${dialogIndex + 1} / ${allImages.length}`;
}
```

---

## 🧠 Arbeiten mit Arrays & Objekten

Alle Bilder werden in einem Array aus Objekten gespeichert:

```javascript
let allImages = [
    {
        id: 1,
        name: "Mein Traumauto.",
        link: "img/auto.svg",
        alt: "Traumauto"
    }
];
```

Dadurch können Bilder dynamisch gerendert und einfach erweitert werden.

---

## 📱 Responsive Design

Das Projekt nutzt mehrere Media Queries für verschiedene Bildschirmgrößen:

```css
@media (max-width: 600px) {
    .photoGallary {
        grid-template-columns: repeat(2, 0.15fr);
    }
}
```

Optimiert für:

- Desktop
- Tablet
- Smartphone

---

## 🖼️ Dialog / Lightbox

Die Bilder können per Klick vergrößert werden.

### Features der Lightbox:

- Bildtitel
- Bildnummer
- Vor / Zurück Navigation
- Klick außerhalb schließt Dialog
- Close Button

---

## 🎨 CSS Besonderheiten

- CSS Variablen (`:root`)
- Flexbox
- CSS Grid
- Responsive Layouts
- Dialog Styling
- Hover & Button Effekte

---

## ▶️ Projekt starten

### Repository klonen

```bash
git clone https://github.com/deinusername/fotogram.git
```

### Projektordner öffnen

```bash
cd fotogram
```

### Anwendung starten

Einfach die `index.html` im Browser öffnen.

---

## 📚 Lerninhalte aus diesem Projekt

Mit diesem Projekt wurden folgende Themen vertieft:

- DOM Manipulation
- Dynamisches Rendering
- Arrays & Objekte
- EventListener
- Dialog API
- Responsive Webdesign
- CSS Grid & Flexbox
- Clean Code Strukturierung

---

## 👨‍💻 Autor

**Kadir Kahraman**

Projekt aus der Developer Akademie 🚀
