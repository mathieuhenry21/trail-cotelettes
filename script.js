// ===== Nav active au scroll =====
const navLinks = document.querySelectorAll('.nav a');
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href')));

function onScroll() {
  const pos = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (!sec) return;
    if (sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
      navLinks.forEach(l => l.classList.remove('active'));
      navLinks[i].classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

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
