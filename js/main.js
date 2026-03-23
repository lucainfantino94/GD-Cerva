// Menu hamburger (mobile)
function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

// Ferme le menu si on clique ailleurs
document.addEventListener('click', function (e) {
  const nav = document.querySelector('nav');
  if (!nav.contains(e.target)) {
    document.getElementById('nav-links').classList.remove('open');
  }
});

// Lightbox (galerie)
function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

// Ferme lightbox avec touche Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});
