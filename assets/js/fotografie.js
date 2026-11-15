
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        tabs.forEach((t) => {
            t.setAttribute('aria-selected', 'false');
        });
        tab.setAttribute('aria-selected', 'true');

        panels.forEach((p) => {
            p.hidden = true;
        });

        panel.hidden = false;
    });
});


const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-img');
const galleryImages = document.querySelectorAll('.photo-thumbnails img');
const closeBtn = lightbox.querySelector('.lightbox-close');

let images = [];
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + images.length) % images.length;
  const current = images[currentIndex];
  lightboxImage.src = current.dataset.full || current.src;
  lightboxImage.alt = current.alt;
}

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    const panel = img.closest('[role="tabpanel"]');
    images = Array.from(panel.querySelectorAll('.photo-thumbnails img'));
    showImage(images.indexOf(img));
    lightbox.showModal();
  });
});

const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

nextBtn.addEventListener('click', () => {
  showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});



