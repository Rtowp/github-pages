// Daftar section: id tempat kosong di index.html -> file potongannya di folder partials/
const sections = [
  { slot: 'slot-nav',        file: 'partials/nav.html' },
  { slot: 'slot-hero',       file: 'partials/hero.html' },
  { slot: 'slot-about',      file: 'partials/about.html' },
  { slot: 'slot-education',  file: 'partials/education.html' },
  { slot: 'slot-experience', file: 'partials/experience.html' },
  { slot: 'slot-skills',     file: 'partials/skills.html' },
  { slot: 'slot-portfolio',  file: 'partials/portfolio.html' },
  { slot: 'slot-contact',    file: 'partials/contact.html' },
  { slot: 'slot-footer',     file: 'partials/footer.html' },
];

async function loadAllSections() {
  await Promise.all(sections.map(async ({ slot, file }) => {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Gagal ambil ${file}: ${res.status}`);
      const html = await res.text();
      document.getElementById(slot).outerHTML = html;
    } catch (err) {
      console.error(err);
      document.getElementById(slot).innerHTML =
        `<p style="padding:20px;color:red;">Gagal load ${file}</p>`;
    }
  }));
}

function setupNavToggle() {
  const toggle = document.getElementById('navToggle');
  const navlinks = document.getElementById('navlinks');
  if (!toggle || !navlinks) return;
  toggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }));
}

function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
}

// Urutan penting: tunggu semua section kebaca dulu, baru pasang interaksinya
loadAllSections().then(() => {
  setupNavToggle();
  setupScrollReveal();
});
