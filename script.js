// Daftar section: id tempat kosong di index.html -> nama file section-nya (flat, tanpa folder)
const sections = [
  { slot: 'slot-nav',       file: 'nav.html' },
  { slot: 'slot-hero',      file: 'hero.html' },
  { slot: 'slot-about',     file: 'about.html' },
  { slot: 'slot-otomax',    file: 'otomax.html' },
  { slot: 'slot-otozip',    file: 'otozip.html' },
  { slot: 'slot-metawrap',  file: 'metawrap.html' },
  { slot: 'slot-skills',    file: 'skills.html' },
  { slot: 'slot-contact',   file: 'contact.html' },
  { slot: 'slot-footer',    file: 'footer.html' },
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
      const el = document.getElementById(slot);
      if (el) el.innerHTML = `<p style="padding:20px;color:red;">Gagal load ${file}</p>`;
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
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
}

function setupThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = btn.querySelector('.theme-icon');
  const text = btn.querySelector('.theme-text');
  function applyTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    icon.textContent = isDark ? '☀️' : '⚡';
    text.textContent = isDark ? 'LIGHT' : 'MODE';
  }
  applyTheme(localStorage.getItem('portfolio-theme') === 'dark');
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('portfolio-theme', isDark ? 'light' : 'dark');
    applyTheme(!isDark);
  });
}

function setupPortfolioFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cases = document.querySelectorAll('.portfolio-grid .case');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cases.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

function setup3DTilt() {
  document.querySelectorAll('.portfolio-grid .case').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const rotateX = -((y - rect.height / 2) / rect.height) * 6;
      const rotateY = ((x - rect.width / 2) / rect.width) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; });
  });
}

function setupSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.width = e.target.dataset.pct + '%'; io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => io.observe(b));
}

function setupBeforeAfterSlider() {
  const range = document.getElementById('sliderRange');
  const before = document.getElementById('sliderBeforeImg');
  const bar = document.getElementById('sliderBar');
  if (!range || !before || !bar) return;
  function update(value) {
    before.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
    bar.style.left = `${value}%`;
  }
  range.addEventListener('input', (e) => update(e.target.value));
  update(range.value);
}

// Form kontak: buka email client dengan pesan siap kirim (jujur, tanpa backend/server)
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccessMessage');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('femail').value;
    const msg = document.getElementById('fmsg').value;

    const originalText = btn.textContent;
    btn.textContent = 'Menyiapkan Pesan...';
    btn.disabled = true;

    setTimeout(() => {
      const subject = encodeURIComponent(`Pesan dari ${name} lewat Portofolio`);
      const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
      window.location.href = `mailto:ratamagalih111@gmail.com?subject=${subject}&body=${body}`;
      btn.textContent = originalText;
      btn.disabled = false;
      if (successMsg) successMsg.classList.add('show');
    }, 700);
  });
}

// Urutan penting: tunggu semua section kebaca dulu, baru pasang interaksinya
loadAllSections().then(() => {
  setupNavToggle();
  setupScrollReveal();
  setupThemeToggle();
  setupPortfolioFilter();
  setup3DTilt();
  setupSkillBars();
  setupBeforeAfterSlider();
  setupContactForm();
});
