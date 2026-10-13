// ===== Nav active au scroll =====
const navLinks = document.querySelectorAll('.nav a');
// Seuls les liens ancrés (#section) de la page courante suivent le scroll
const anchorLinks = [...navLinks].filter(a => a.getAttribute('href').startsWith('#'));
const sections = anchorLinks.map(a => document.querySelector(a.getAttribute('href')));

function onScroll() {
  const pos = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (!sec) return;
    if (sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
      anchorLinks.forEach(l => l.classList.remove('active'));
      anchorLinks[i].classList.add('active');
    }
  });
}
if (anchorLinks.length) window.addEventListener('scroll', onScroll, { passive: true });

// ===== Burger mobile =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.forEach(l => l.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
  }));
}

// ===== Formulaire contact → mailto =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const subject = (data.get('subject') || '').trim();
    const message = (data.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      alert('Merci de remplir tous les champs avant d\'envoyer.');
      return;
    }

    const mailSubject = encodeURIComponent(`[Trail Côtelettes] ${subject}`);
    const mailBody = encodeURIComponent(
      `Bonjour,\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:cotelettestrail@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  });
}

// ===== Galerie photos → lightbox =====
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const items = [...document.querySelectorAll('.gallery__item a')];
  const lbImg = lightbox.querySelector('img');
  const lbCap = lightbox.querySelector('figcaption');
  let current = 0;
  let lastFocus = null;

  const show = (i) => {
    current = (i + items.length) % items.length;
    const link = items[current];
    const thumb = link.querySelector('img');
    lbImg.src = link.getAttribute('href');
    lbImg.alt = thumb.alt;
    lbImg.width = link.dataset.w;
    lbImg.height = link.dataset.h;
    lbCap.textContent = thumb.alt;
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox__close').focus();
  };
  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  items.forEach((link, i) => link.addEventListener('click', (e) => {
    e.preventDefault();
    open(i);
  }));
  lightbox.querySelector('.lightbox__close').addEventListener('click', close);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', () => show(current - 1));
  lightbox.querySelector('.lightbox__next').addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Lien direct vers une photo (photos.html#barbecue-cotelettes)
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target && target.classList.contains('gallery__item')) {
    open(items.indexOf(target.querySelector('a')));
  }
}
