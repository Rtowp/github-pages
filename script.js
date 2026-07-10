document.addEventListener('DOMContentLoaded', () => {
  setupNavToggle();
  setupScrollReveal();
  setupThemeToggle();
  setupPortfolioFilter();
  setup3DTilt();
  setupSkillBars();
  setupContactForm();
});

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

// Form kontak: buka email client dengan pesan siap kirim (tanpa backend/server)
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('femail').value;
    const msg = document.getElementById('fmsg').value;
    const subject = encodeURIComponent(`Pesan dari ${name} lewat Portofolio`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:ratamagalih111@gmail.com?subject=${subject}&body=${body}`;
  });
}