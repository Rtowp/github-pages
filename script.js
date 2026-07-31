/* ==========================================================================
   GALIH PRATAMA PORTFOLIO - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initProjectsTabs();
  initContentFilter();
  initScrollAnimations();
  initGrowthCalculator();
  initCaseModal();
  initCursorGlow();
  initThemeToggle();
});

/* --------------------------------------------------------------------------
   0. Theme Toggle (⚡ MODE - Dark / Warm Cream Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-cream-mode');
  });
}

/* --------------------------------------------------------------------------
   3. Featured Projects Rich Data Rendering (Matching Reference Screenshots)
   -------------------------------------------------------------------------- */
const projectsData = {
  otomax: {
    brandSub: '01 | BRAND 01',
    title: 'Otomax Store',
    role: 'Social Media Specialist',
    subtitle: 'Toko velg & ban custom automotive & fitment specialist.',
    desc: 'Mengelola strategi konten end-to-end untuk Otomax.store sebagai brand utama. Berfokus pada konten edukasi otomotif, tips perawatan mobil, promosi produk, dan branding untuk meningkatkan engagement dan brand awareness.',
    kpi: [
      { num: '2,42Jt+', lbl: 'TOTAL TAYANGAN' },
      { num: '83,3%', lbl: 'AKUN NON-PENGIKUT' },
      { num: '888Rb', lbl: 'TOTAL PLAY/VIEWS' },
      { num: '+227%', lbl: 'LONJAKAN INTERAKSI' }
    ],
    dashboardImg: 'assets/otomax-dashboard.jpg',
    strategyText: 'Pendekatan saya di Otomax fokus pada konten edukatif, bukan hard-selling. Tiap carousel dan reel dirancang untuk menjawab pertanyaan nyata calon pembeli velg & ban — ukuran, offset, PCD, cara baca spek — dengan tone "konsultan yang paham", bukan sales yang agresif. Pendekatan yang sama saya terapkan untuk konten edukasi seputar ban & velg mobil listrik (EV), demi menjaga posisi brand yang netral dan informatif.',
    insights: [
      { title: 'Puncak Jangkauan Organik (November 2025)', text: 'Menghasilkan total 975.000 tayangan, melonjak tajam sebesar +182% dari bulan sebelumnya. Didominasi oleh struktur konten berbasis tren modifikasi kaki-kaki mobil yang memicu interaksi tinggi, di mana 81% dari total audiens berasal dari non-followers (+227%).' },
      { title: 'Validasi Pola Konten Viral (Agustus 2025)', text: 'Fase awal strategi berhasil menembus angka 501.000 tayangan (+147% dari bulan Juli) dengan rasio penemuan akun baru dari non-followers sebesar 87%. Hal ini membuktikan bahwa algoritma video pendek (Reels) bekerja optimal merambah audiens target di luar basis pengikut yang ada.' },
      { title: 'Retensi Pengikut yang Sehat (Desember 2025)', text: 'Setelah lonjakan besar di November, grafik penayangan bertumpu stabil di angka 582.000 tayangan dengan rasio non-followers sebesar 79%, namun berhasil memperkuat basis komunitas dengan total pertumbuhan pengikut bersih mencapai 58.000 followers (+467 pertumbuhan baru).' },
      { title: 'Efisiensi Strategi', text: 'Komposisi distribusi penayangan menunjukkan performa organik yang sangat dominan, di mana sebanyak 83.3% dari total 2.422.912 tayangan murni digerakkan secara organik lewat penyusunan "hook" visual dan optimasi SEO konten, sementara porsi iklan berbayar (Ads) hanya berkontribusi minim sebesar 16.7%.' }
    ],
    samples: [
      { img: 'assets/reel-mazda3hb.jpg', type: 'KONTEN ULASAN / EDUKASI', caption: 'Video ulasan produk dan edukasi mendalam mengenai fitment kaki-kaki mobil. Dibuat khusus untuk memicu interaksi, menaikkan engagement, dan membangun trust audiens secara organik.' },
      { img: 'assets/reel-buruan-deh.jpg', type: 'KONTEN IKLAN ADS', caption: 'Video komersial dengan penekanan pada promosi dan penawaran terukur. Menggunakan hook visual yang kuat, dirancang untuk kebutuhan paid ads demi meningkatkan penjualan langsung.' }
    ]
  },

  otozip: {
    brandSub: '02 | BRAND 02',
    title: 'Otozip',
    role: 'Social Media Specialist',
    subtitle: 'Layanan velg & ban panggilan 24 jam, Jangkauan Jabodetabek & Bandung.',
    desc: 'Otozip melayani perbaikan & penggantian ban langsung di lokasi pelanggan, kapan pun dibutuhkan. Karena konsepnya "ban rusak, kita datang", banyak kontennya mengangkat situasi darurat sehari-hari di jalan.',
    kpi: [
      { num: '575K+', lbl: 'IG VIEWS' },
      { num: '229K+', lbl: 'TIKTOK VIEWS' },
      { num: '908K+', lbl: 'THREADS VIEWS' },
      { num: '91,8%', lbl: 'NON-FOLLOWERS' },
      { num: '6,1Rb+', lbl: 'TOTAL INTERAKSI' },
      { num: '63,4%', lbl: 'FYP TRAFFIC' }
    ],
    strategyText: 'Saya kembangkan konten berbasis skenario darurat sehari-hari — ban benjol mendadak, interior yang perlu ditambal, sampai family road trip pas musim libur sekolah. Salah satu formula yang konsisten berperforma tinggi: skenario "pagi-pagi panik" dengan mobil-mobil premium, karena relate ke banyak orang tapi tetap punya daya tarik visual. Performa akun juga didorong lewat kolaborasi micro-influencer dan cross-promotion dari Otomax store sebagai bagian dari ekosistem brand yang sama.',
    insights: [
      { title: 'Dominasi Penemuan Akun Baru (Instagram)', text: 'Dari total 575.685 penayangan yang diraih, sebanyak 91.8% di antaranya murni datang dari akun non-followers. Distribusi format konten didominasi kuat oleh Reels sebesar 62.7% dan disusul oleh Stories sebesar 25.4%.' },
      { title: 'Optimasi Alur FYP TikTok', text: 'Mengamankan total 229.200 tayangan video dalam periode 60 hari terakhir, dengan lonjakan grafik masif berikut distribusi sumber lalu lintas utama (Traffic Source) via halaman For You Page (FYP) yang menyentuh angka 63.4% serta pencarian organik (Search) sebesar 33.5%.' },
      { title: 'Efisiensi Lintas Platform (Threads)', text: 'Strategi integrasi konten berhasil memicu lonjakan interaksi organik masif di Threads hingga menyentuh angka 908.000 total tayangan dalam satu momentum siklus, dengan kontribusi konversi langsung ke Instagram mencapai 77.77%.' },
      { title: 'Kualitas Interaksi & Tindakan Profil', text: 'Mampu mempertahankan 6.112 total interaksi aktif dengan dominasi interaksi Reels sebesar 67.4%. Efisiensi konten ini sukses mendorong konversi nyata berupa 11.677 kunjungan profil (Profile Visits) dan 902 ketukan tautan eksternal (External Link Taps) menuju WhatsApp/toko digital.' }
    ],
    samples: [
      { img: 'assets/reel-otozip-van.jpg', type: 'KONTEN EDUKASI', caption: 'Video ulasan lokasi ban darurat dan tips berkendara untuk memicu interaksi tinggi serta menaikkan organic engagement secara konsisten.' },
      { img: 'assets/reel-otozip-van.jpg', type: 'KONTEN IKLAN ADS', caption: 'Video komersial 24 jam dengan hook visual kuat dan penawaran terukur. Dirancang khusus untuk paid ads demi mendatangkan penjualan langsung.' },
      { img: 'assets/otozip-threads.jpg', type: 'KONTEN THREADS', caption: 'Optimasi konten berbasis teks interaktif dan visual real-time di ekosistem Meta. Berfokus pada kecepatan ketepatan informasi untuk memperluas jangkauan brand.' }
    ]
  },

  metawrap: {
    brandSub: '03 | BRAND 03',
    title: 'Meta Auto Wrap',
    role: 'Content Creator & Strategist',
    subtitle: 'Layanan wrapping & detailing mobil premium (Pet Series, PPF Protection, Custom Color Wrap).',
    desc: 'Menjadi salah satu talent dalam produksi konten Meta Auto Wrap yang menampilkan layanan wrapping dan detailing mobil premium. Berkontribusi dalam penyampaian pesan brand melalui konten visual yang informatif dan menarik untuk media sosial.',
    kpi: [
      { num: '467K+', lbl: 'REELS VIEWS' },
      { num: '92,4%', lbl: 'NON-FOLLOWERS' },
      { num: '14.8K+', lbl: 'TOTAL INTERAKSI' },
      { num: '+320%', lbl: 'LEADS WA' }
    ],
    gridReels: [
      { img: 'assets/reel-5kelebihan.jpg', title: '5 KELEBIHAN WRAPPING', views: '876' },
      { img: 'assets/reel-pinklucu.jpg', title: 'PINK LUCU GINI, BUKAN CAT LOH!', views: '140K' },
      { img: 'assets/reel-bosenwarna.jpg', title: 'BOSEN SAMA WARNA MOBIL STANDAR?', views: '47K' },
      { img: 'assets/reel-petseries.jpg', title: 'PET SERIES FREE COATING!', views: '13.6K' }
    ],
    strategyText: 'Strategi visual berfokus pada estetika tinggi, ketelitian pengerjaan wrapping, dan edukasi seputar perlindungan cat asli mobil. Penyampaian pesan berfokus pada daya tahan bahan Pet Series, daya tahan terhadap cuaca, dan hasil akhir yang presisi.',
    insights: [
      { title: 'Dominasi Reels Organik', text: '92.4% penayangan murni dari audiens non-followers yang tertarik dengan transformasi warna mobil.' },
      { title: 'Lonjakan Pesan Masuk WA', text: 'Konten "5 Kelebihan Wrapping" berhasil mendatangkan lonjakan 320% leads konsultasi di WhatsApp.' },
      { title: 'Retensi Penonton Tinggi', text: 'Durasi tonton rata-rata di atas 85% karena visual transformasi before-after yang memanjakan mata.' },
      { title: 'Targeting Segmen Premium', text: 'Menjangkau pemilik mobil baru dan luxury sedan di area Jabodetabek.' }
    ],
    samples: [
      { img: 'assets/reel-5kelebihan.jpg', type: 'KONTEN EDUKASI & BRANDING', caption: 'Video edukasi 30 detik yang membahas 5 kelebihan wrapping dibanding cat ulang.' },
      { img: 'assets/reel-pinklucu.jpg', type: 'KONTEN PROMOSI CUSTOM COLOR', caption: 'Showcase color wrap custom pink pastel pada mobil listrik modern.' },
      { img: 'assets/reel-bosenwarna.jpg', type: 'KONTEN CAROUSEL SOLUSI', caption: 'Carousel solusi ganti warna mobil tanpa merusak garansi cat ori.' },
      { img: 'assets/reel-petseries.jpg', type: 'KONTEN PROMOSI ADS', caption: 'Penawaran promosi bonus coating untuk pengerjaan wrap Pet Series.' }
    ]
  }
};

function renderProjectCard(key) {
  const data = projectsData[key];
  const container = document.getElementById('activeProjectCard');
  if (!data || !container) return;

  // KPI boxes HTML
  const kpiHTML = data.kpi.map(k => `
    <div class="cs-kpi-card">
      <div class="cs-kpi-num">${k.num}</div>
      <div class="cs-kpi-lbl">${k.lbl}</div>
    </div>
  `).join('');

  // Dashboard image HTML if available
  const dashHTML = data.dashboardImg ? `
    <div style="margin:20px 0;">
      <img src="${data.dashboardImg}" alt="Dashboard Insights" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
    </div>
  ` : '';

  // Grid reels HTML if available (Meta Auto Wrap special layout)
  const gridReelsHTML = data.gridReels ? `
    <div class="project-top-row" style="margin-bottom:24px;">
      <div class="content-cards-scroll" style="grid-template-columns:1fr 1fr; gap:12px;">
        ${data.gridReels.map(r => `
          <div class="content-reel-card" style="height:170px;">
            <img src="${r.img}" alt="${r.title}">
            <div class="reel-card-overlay">
              <span class="reel-views-pill">▶ ${r.views}</span>
              <span class="reel-card-title">${r.title}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div>
        <span class="cs-brand-sub">${data.brandSub}</span>
        <h2 class="brand-main-title" style="margin-top:2px;">${data.title}</h2>
        <p style="font-size:0.85rem; color:var(--text-muted); font-weight:600; margin-bottom:12px;">${data.subtitle}</p>
        <p class="project-desc-text">${data.desc}</p>
      </div>
    </div>
  ` : `
    <div>
      <span class="cs-brand-sub">${data.brandSub}</span>
      <h2 class="brand-main-title" style="margin-top:2px;">${data.title}</h2>
      <p style="font-size:0.85rem; color:var(--text-muted); font-weight:600; margin-bottom:12px;">${data.subtitle}</p>
      <p class="project-desc-text">${data.desc}</p>
    </div>
  `;

  // Insights bullet list HTML
  const insightsHTML = data.insights.map(ins => `
    <li><strong>${ins.title}:</strong> ${ins.text}</li>
  `).join('');

  // Samples grid HTML
  const samplesHTML = data.samples.map(s => `
    <div class="cs-sample-card">
      <img src="${s.img}" alt="${s.type}" class="cs-sample-img">
      <div class="cs-sample-body">
        <div class="cs-sample-type">${s.type}</div>
        <div class="cs-sample-caption">${s.caption}</div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    ${gridReelsHTML}

    <div class="cs-section-label">KPI (REAL TIME PERFORMA)</div>
    <div class="cs-kpi-grid">${kpiHTML}</div>

    ${dashHTML}

    <div class="cs-section-label">STRATEGY</div>
    <p class="project-desc-text">${data.strategyText}</p>

    <div class="cs-section-label">DATA &amp; INSIGHT BREAKDOWN</div>
    <ul class="cs-insights-list">${insightsHTML}</ul>

    <div class="cs-section-label">SAMPLE CONTENT TYPE</div>
    <div class="cs-samples-grid">${samplesHTML}</div>
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
