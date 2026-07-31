/* ==========================================================================
   GALIH PRATAMA PORTFOLIO - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initProjectsTabs();
  initContentFilter();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Header Glass Effect on Scroll
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}

/* --------------------------------------------------------------------------
   3. Featured Projects Interactive Tabs & Data Rendering
   -------------------------------------------------------------------------- */
const projectsData = {
  otomax: {
    title: 'OTOMAX STORE',
    role: 'Social Media Specialist',
    desc: 'Mengelola strategi konten end-to-end untuk Otomax.store sebagai brand utama. Berfokus pada konten edukasi otomotif, tips perawatan mobil, promosi produk, dan branding untuk meningkatkan engagement dan brand awareness.',
    tags: ['Content Strategy', 'Copywriting', 'Design', 'Video Editing', 'Analytics'],
    image: 'assets/otomax-dashboard.jpg',
    stats: [
      { num: '2,4 Juta', lbl: 'Total Views' },
      { num: '83,3K', lbl: 'Akun Tercapai' },
      { num: '888K', lbl: 'Total Play' },
      { num: '+227%', lbl: 'Pertumbuhan', isGrowth: true }
    ],
    strategies: [
      { title: 'HOOK KUAT', desc: 'Menarik perhatian dalam 3 detik pertama.', icon: '🎯' },
      { title: 'EDUKASI & SOLUSI', desc: 'Memberi nilai bermanfaat bagi audiens.', icon: '💡' },
      { title: 'VISUAL MENARIK', desc: 'Desain & editing yang clean, jelas, dan informatif.', icon: '✨' },
      { title: 'CTA & INTERAKSI', desc: 'Mendorong audiens untuk berinteraksi & follow.', icon: '💬' }
    ]
  },
  otozip: {
    title: 'OTOZIP 24H',
    role: 'Social Media Specialist',
    desc: 'Strategi campaign darurat 24 jam untuk layanan velg & ban panggilan. Mengoptimalkan Threads & Reels untuk jangkauan organik tinggi dan mendatangkan leads instan ke tim operasional.',
    tags: ['Campaign Strategy', 'Viral Content', 'Emergency Branding', 'Threads Organic'],
    image: 'assets/otozip-threads.jpg',
    stats: [
      { num: '908K+', lbl: 'Threads Views' },
      { num: '91.8%', lbl: 'Non-Followers' },
      { num: '229K+', lbl: 'TikTok Views' },
      { num: '+182%', lbl: 'Pertumbuhan', isGrowth: true }
    ],
    strategies: [
      { title: 'EMERGENCY HOOK', desc: 'Memanfaatkan skenario darurat sehari-hari di jalan.', icon: '⚡' },
      { title: 'SHORT FORM REELS', desc: 'Format cepat & ringkas dengan storytelling kuat.', icon: '🎬' },
      { title: 'CROSS PLATFORM', desc: 'Integrasi Instagram, TikTok & Threads.', icon: '🌐' },
      { title: 'ORGANIC REACH', desc: 'Menjangkau 91.8% non-followers murni.', icon: '📈' }
    ]
  },
  metawrap: {
    title: 'META AUTO WRAP',
    role: 'Content Creator & Strategist',
    desc: 'Branding & visual showcase untuk wrapping & detailing mobil premium. Menampilkan kualitas pengerjaan Pet Series & PPF Protection dengan estetika warna tinggi.',
    tags: ['Premium Branding', 'Visual Reels', 'Car Wrapping', 'Color Aesthetics'],
    image: 'assets/reel-5kelebihan.jpg',
    stats: [
      { num: '500K+', lbl: 'Total Impressions' },
      { num: '78.5%', lbl: 'Audience Reach' },
      { num: '180K+', lbl: 'Video Views' },
      { num: '+147%', lbl: 'Pertumbuhan', isGrowth: true }
    ],
    strategies: [
      { title: 'HIGH-END VISUALS', desc: 'Cinematics detail & tekstur bahan wrapping.', icon: '🎥' },
      { title: 'EDUCATIONAL REELS', desc: 'Penjelasan daya tahan & proteksi cat asli.', icon: '🛡️' },
      { title: 'BEFORE-AFTER', desc: 'Demonstrasi transformasi fisik kendaraan.', icon: '🔄' },
      { title: 'TARGETED ADS', desc: 'Optimasi campaign ads ke segmen mobil mewah.', icon: '🎯' }
    ]
  }
};

function renderProjectCard(key) {
  const data = projectsData[key];
  const container = document.getElementById('activeProjectCard');
  if (!data || !container) return;

  const tagsHTML = data.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
  const statsHTML = data.stats.map(s => `
    <div class="perf-stat-box">
      <div class="perf-stat-num ${s.isGrowth ? 'growth' : ''}">${s.num}</div>
      <div class="perf-stat-lbl">${s.lbl}</div>
    </div>
  `).join('');

  const stratHTML = data.strategies.map(st => `
    <div class="strategy-box">
      <div class="strat-icon">${st.icon}</div>
      <div class="strat-title">${st.title}</div>
      <div class="strat-desc">${st.desc}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="project-top-row">
      <div>
        <div class="project-card-header">
          <div class="brand-title-badge">
            <h3 class="brand-main-title">${data.title}</h3>
            <span class="badge-role">${data.role}</span>
          </div>
        </div>
        <p class="project-desc-text">${data.desc}</p>
        <div class="project-tags-row">${tagsHTML}</div>
      </div>
      <div class="project-media-wrapper">
        <img src="${data.image}" alt="${data.title}">
      </div>
    </div>

    <div class="performance-subcard">
      <div class="subcard-head-title">PERFORMA KONTEN (30 HARI TERAKHIR)</div>
      <div class="performance-stats-grid">${statsHTML}</div>

      <!-- Area Line Chart SVG -->
      <div class="chart-container">
        <svg class="chart-svg" viewBox="0 0 500 110" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,90 Q50,40 100,75 T200,60 T300,85 T400,20 L500,65 L500,110 L0,110 Z" fill="url(#chartGrad)"/>
          <path d="M0,90 Q50,40 100,75 T200,60 T300,85 T400,20 L500,65" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="400" cy="20" r="4" fill="#EAB308" stroke="#FFFFFF" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <div>
      <div class="subcard-head-title" style="margin-bottom:14px;">STRATEGI KONTEN</div>
      <div class="strategy-cards-grid">${stratHTML}</div>
    </div>
  `;
}

function initProjectsTabs() {
  const tabBtns = document.querySelectorAll('.project-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-project');
      renderProjectCard(key);
    });
  });

  // Render initial project
  renderProjectCard('otomax');
}

/* --------------------------------------------------------------------------
   4. Content Showcase Filter Pills
   -------------------------------------------------------------------------- */
function initContentFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const reelCards = document.querySelectorAll('.content-reel-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      reelCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Intersection Animations for Skill Bars & Items
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}
