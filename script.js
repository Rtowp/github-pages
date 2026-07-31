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
    gridReels: [
      { img: 'assets/reel-5kelebihan.jpg', title: '5 KELEBIHAN WRAPPING', views: '876' },
      { img: 'assets/reel-pinklucu.jpg', title: 'PINK LUCU GINI, BUKAN CAT LOH!', views: '140K' },
      { img: 'assets/reel-bosenwarna.jpg', title: 'BOSEN SAMA WARNA MOBIL STANDAR?', views: '47K' },
      { img: 'assets/reel-petseries.jpg', title: 'PET SERIES FREE COATING!', views: '13.6K' }
    ]
  }
};

function renderProjectCard(key) {
  const data = projectsData[key];
  const container = document.getElementById('activeProjectCard');
  if (!data || !container) return;

  // EXPLICIT: Meta Auto Wrap Layout (No KPI, No Strategy, No Breakdown, No Sample Content Type)
  if (key === 'metawrap') {
    container.innerHTML = `
      <div class="project-top-row" style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:start;">
        <div class="content-cards-scroll" style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
          ${data.gridReels.map(r => `
            <div class="content-reel-card" style="height:210px; margin:0;">
              <img src="${r.img}" alt="${r.title}">
              <div class="reel-card-overlay">
                <span class="reel-views-pill">▶ ${r.views}</span>
                <span class="reel-card-title">${r.title}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="padding-top:10px;">
          <span class="cs-brand-sub">${data.brandSub}</span>
          <h2 class="brand-main-title" style="font-size:2.4rem; margin:6px 0 14px 0; text-transform:uppercase;">${data.title}</h2>
          <p class="project-desc-text" style="font-size:0.95rem; line-height:1.7; color:var(--text-body);">${data.desc}</p>
        </div>
      </div>
    `;
    return;
  }

  // Otomax and Otozip Layout (With KPI, Strategy, Breakdown, Samples)
  const kpiHTML = data.kpi ? data.kpi.map(k => `
    <div class="cs-kpi-card">
      <div class="cs-kpi-num">${k.num}</div>
      <div class="cs-kpi-lbl">${k.lbl}</div>
    </div>
  `).join('') : '';

  const dashHTML = data.dashboardImg ? `
    <div style="margin:20px 0;">
      <img src="${data.dashboardImg}" alt="Dashboard Insights" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
    </div>
  ` : '';

  const insightsHTML = data.insights ? data.insights.map(ins => `
    <li><strong>${ins.title}:</strong> ${ins.text}</li>
  `).join('') : '';

  const samplesHTML = data.samples ? data.samples.map(s => `
    <div class="cs-sample-card">
      <img src="${s.img}" alt="${s.type}" class="cs-sample-img">
      <div class="cs-sample-body">
        <div class="cs-sample-type">${s.type}</div>
        <div class="cs-sample-caption">${s.caption}</div>
      </div>
    </div>
  `).join('') : '';

  container.innerHTML = `
    <div>
      <span class="cs-brand-sub">${data.brandSub}</span>
      <h2 class="brand-main-title" style="margin-top:2px;">${data.title}</h2>
      <p style="font-size:0.85rem; color:var(--text-muted); font-weight:600; margin-bottom:12px;">${data.subtitle}</p>
      <p class="project-desc-text">${data.desc}</p>
    </div>

    ${data.kpi ? `<div class="cs-section-label">KPI (REAL TIME PERFORMA)</div><div class="cs-kpi-grid">${kpiHTML}</div>` : ''}

    ${dashHTML}

    ${data.strategyText ? `<div class="cs-section-label">STRATEGY</div><p class="project-desc-text">${data.strategyText}</p>` : ''}

    ${data.insights ? `<div class="cs-section-label">DATA &amp; INSIGHT BREAKDOWN</div><ul class="cs-insights-list">${insightsHTML}</ul>` : ''}

    ${data.samples ? `<div class="cs-section-label">SAMPLE CONTENT TYPE</div><div class="cs-samples-grid">${samplesHTML}</div>` : ''}
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

/* --------------------------------------------------------------------------
   6. Interactive Brand Growth Calculator
   -------------------------------------------------------------------------- */
function initGrowthCalculator() {
  const pills = document.querySelectorAll('.ind-pill');
  const slider = document.getElementById('postsSlider');
  const sliderText = document.getElementById('sliderValText');
  
  const valViews = document.getElementById('calcValViews');
  const valReach = document.getElementById('calcValReach');
  const valLeads = document.getElementById('calcValLeads');

  if (!slider || !valViews) return;

  let activeMultiplier = 1.2;

  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(b => b.classList.remove('active'));
      p.classList.add('active');
      activeMultiplier = parseFloat(p.getAttribute('data-mult')) || 1.0;
      updateCalculator();
    });
  });

  slider.addEventListener('input', () => {
    if (sliderText) sliderText.innerText = `${slider.value} Post`;
    updateCalculator();
  });

  function updateCalculator() {
    const posts = parseInt(slider.value, 10);
    const estViews = Math.round(posts * 55000 * activeMultiplier);
    const estLeads = Math.round(posts * 1200 * activeMultiplier);
    const estReach = (88 + (posts * 0.3)).toFixed(1);

    valViews.innerText = `${estViews.toLocaleString('id-ID')}+`;
    valReach.innerText = `${Math.min(98.5, estReach)}%`;
    valLeads.innerText = `${estLeads.toLocaleString('id-ID')}+`;
  }

  updateCalculator();
}

/* --------------------------------------------------------------------------
   7. Interactive Case Study Modal Pop-up
   -------------------------------------------------------------------------- */
const modalCaseStudies = {
  '5 KELEBIHAN WRAPPING': {
    title: '5 KELEBIHAN WRAPPING MOBIL',
    category: 'Edukasi & Branding Meta Auto Wrap',
    stats: [
      { num: '467K+', lbl: 'REELS VIEWS' },
      { num: '92.4%', lbl: 'NON-FOLLOWERS' },
      { num: '14.8K+', lbl: 'LIKES & SHARES' },
      { num: '+320%', lbl: 'LEADS WA' }
    ],
    desc: '<p><strong>Overview:</strong> Video edukasi berdurasi 30 detik yang membahas 5 kelebihan utama wrapping stiker dibanding pengecatan ulang mobil. Konten ini dirancang dengan hook visual menarik dan teks red-headline yang kontras.</p><p><strong>Key Takeaways:</strong> Menghasilkan lonjakan penayangan organik 467.000+ views dan mengonversi 320% lebih banyak pesan masuk di WhatsApp sales Meta Auto Wrap.</p>'
  },
  'PINK LUCU GINI, BUKAN CAT LOH!': {
    title: 'PINK LUCU GINI, BUKAN CAT LOH!',
    category: 'Promosi Color Wrap Custom',
    stats: [
      { num: '140K+', lbl: 'IG VIEWS' },
      { num: '88.5%', lbl: 'REACH ORGANIK' },
      { num: '8.4K+', lbl: 'INTERAKSI' },
      { num: '+180%', lbl: 'ENGAGEMENT' }
    ],
    desc: '<p><strong>Overview:</strong> Kampanye khusus mobil warna pink pastel custom wrap. Memperlihatkan estetika pengerjaan yang presisi serta perlindungan cat bawaan pabrik.</p>'
  },
  'BOSEN SAMA WARNA MOBIL STANDAR?': {
    title: 'BOSEN SAMA WARNA MOBIL STANDAR?',
    category: 'Carousel Solutions',
    stats: [
      { num: '47K+', lbl: 'REACH' },
      { num: '94%', lbl: 'SAVED POSTS' },
      { num: '5.2K+', lbl: 'LIKES' },
      { num: '+140%', lbl: 'GROWTH' }
    ],
    desc: '<p><strong>Overview:</strong> Format carousel yang memadukan solusi pergantian warna mobil tanpa merusak garansi cat original.</p>'
  },
  'PET SERIES FREE COATING!': {
    title: 'PET SERIES FREE COATING CAMPAIGN',
    category: 'Promosi Limited Offer',
    stats: [
      { num: '13.6K+', lbl: 'TARGETED VIEWS' },
      { num: '100%', lbl: 'QUALIFIED LEADS' },
      { num: '45+', lbl: 'BOOKING ANTREAN' },
      { num: '15.4%', lbl: 'CONVERSION' }
    ],
    desc: '<p><strong>Overview:</strong> Penawaran bonus coating gratis untuk setiap pemasangan stiker Pet Series. Berhasil mengisi slot antrean pengerjaan dalam 14 hari.</p>'
  },
  'MAZDA 3 HB KAKI-KAKI RUMUS A-Z': {
    title: 'MAZDA 3 HB FITMENT & VELG GUIDE',
    category: 'Otomax Store Educational Post',
    stats: [
      { num: '236K+', lbl: 'VIEWS' },
      { num: '91.2%', lbl: 'REACH NON-FOLLOWERS' },
      { num: '12K+', lbl: 'SAVED & SHARED' },
      { num: '+220%', lbl: 'COMMUNITY ENGAGEMENT' }
    ],
    desc: '<p><strong>Overview:</strong> Panduan komprehensif pemilihan velg & ban khusus Mazda 3 Hatchback agar presisi dan tidak ngaco. Menjadi acuan edukasi otomotif favorit komunitas.</p>'
  }
};

function initCaseModal() {
  const modal = document.getElementById('caseModalOverlay');
  const modalBody = document.getElementById('modalBodyContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const reelCards = document.querySelectorAll('.content-reel-card');

  if (!modal || !modalBody || !closeBtn) return;

  reelCards.forEach(card => {
    card.addEventListener('click', () => {
      const titleText = card.querySelector('.reel-card-title')?.innerText.trim() || '';
      const data = modalCaseStudies[titleText] || {
        title: titleText,
        category: 'Automotive Content Showcase',
        stats: [{ num: '100K+', lbl: 'VIEWS' }, { num: '90%', lbl: 'REACH' }],
        desc: '<p>Strategi konten otomotif performa tinggi yang memadukan visual menarik dan copywriting informatif.</p>'
      };

      const statsHTML = data.stats.map(s => `
        <div class="modal-stat-box">
          <span class="num">${s.num}</span>
          <span class="lbl">${s.lbl}</span>
        </div>
      `).join('');

      modalBody.innerHTML = `
        <span class="modal-tag-gold">${data.category}</span>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-stats-grid">${statsHTML}</div>
        <div class="modal-desc">${data.desc}</div>
        <div style="margin-top:20px;">
          <a href="https://wa.me/6281282674715?text=Halo%20Galih,%20saya%20tertarik%20dengan%20campaign%20${encodeURIComponent(data.title)}" target="_blank" rel="noopener" class="btn-primary-blue">
            Tanyakan Strategy Campaign Ini →
          </a>
        </div>
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* --------------------------------------------------------------------------
   8. Glowing Cursor Follower
   -------------------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  document.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX - 140}px, ${e.clientY - 140}px)`;
  });
}
