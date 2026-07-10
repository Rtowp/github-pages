/**
 * script.js - File JavaScript Utama
 * Mengatur modul modular Fetch, Dark Mode, Filter Portofolio, Slider Before/After, dan 3D Tilt Hover.
 */

document.addEventListener('DOMContentLoaded', () => {
  loadAllSections();
});

/**
 * Memuat semua partials HTML ke dalam slot masing-masing secara paralel menggunakan Fetch.
 */
async function loadAllSections() {
  const slots = [
    { id: 'slot-nav', path: '/partials/nav.html' },
    { id: 'slot-hero', path: '/partials/hero.html' },
    { id: 'slot-about', path: '/partials/about.html' },
    { id: 'slot-education', path: '/partials/education.html' },
    { id: 'slot-experience', path: '/partials/experience.html' },
    { id: 'slot-skills', path: '/partials/skills.html' },
    { id: 'slot-portfolio', path: '/partials/portfolio.html' },
    { id: 'slot-contact', path: '/partials/contact.html' },
    { id: 'slot-footer', path: '/partials/footer.html' }
  ];

  try {
    // Jalankan semua fetch secara paralel untuk performa memuat halaman yang instan
    await Promise.all(slots.map(async (slot) => {
      const container = document.getElementById(slot.id);
      if (!container) return;

      const response = await fetch(slot.path);
      if (response.ok) {
        const html = await response.text();
        // Mengisi slot tanpa menghapus elemen kontainer asli (ID tetap utuh)
        container.innerHTML = html;
      } else {
        console.error(`[Error] Gagal memuat komponen: ${slot.path} (Status: ${response.status})`);
        container.innerHTML = `<div style="padding: 2rem; border: 1px dashed red; text-align: center; color: red;">Gagal memuat ${slot.path}</div>`;
      }
    }));

    // Inisialisasi semua interaksi setelah seluruh elemen HTML berhasil dirender
    initAllInteractions();
  } catch (error) {
    console.error('Terjadi kesalahan saat memuat arsitektur modular website:', error);
  }
}

/**
 * Menginisialisasi semua fungsi interaktif di website
 */
function initAllInteractions() {
  initThemeAndMenu();
  initPortfolioFilter();
  initBeforeAfterSlider();
  init3DHoverTilt();
  initContactForm();
}

/**
 * 1. Navigasi & Dark Mode Toggle
 * Mengatur pergantian tema terang/gelap serta menu laci (drawer) navigasi mobile.
 */
function initThemeAndMenu() {
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navContainer = document.querySelector('.nav-container');
  const navlinks = document.querySelectorAll('.navlinks a');

  // A. Logika Dark Mode
  if (themeToggle) {
    // Periksa preferensi tersimpan di localStorage atau default ke terang
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      updateThemeButtonIcon(themeToggle, true);
    } else {
      updateThemeButtonIcon(themeToggle, false);
    }

    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
      updateThemeButtonIcon(themeToggle, isDark);
    });
  }

  function updateThemeButtonIcon(button, isDark) {
    const iconSpan = button.querySelector('.theme-icon');
    const textSpan = button.querySelector('.theme-text');
    if (iconSpan) {
      iconSpan.textContent = isDark ? '☀️' : '⚡';
    }
    if (textSpan) {
      textSpan.textContent = isDark ? 'LIGHT' : 'MODE';
    }
  }

  // B. Logika Drawer Menu Navigasi Mobile
  if (navToggle && navContainer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navContainer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Tutup menu drawer ketika salah satu tautan navigasi diklik
    navlinks.forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Tutup drawer jika mengklik di luar area drawer
    document.addEventListener('click', (e) => {
      if (navContainer.classList.contains('open') && 
          !navContainer.contains(e.target) && 
          !navToggle.contains(e.target)) {
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * 2. Filter Portofolio
 * Menyaring item portofolio (.case) berdasarkan kategori kampanye klien.
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cases = document.querySelectorAll('.portfolio-grid .case');

  if (filterButtons.length === 0 || cases.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Ubah kelas aktif pada tombol filter
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      cases.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          // Tampilkan dengan transisi halus
          item.style.display = 'flex';
          // Trigger reflow untuk memastikan transisi CSS dipicu
          item.offsetHeight;
          item.style.opacity = '1';
          item.style.transform = 'scale(1) translateY(0)';
          item.style.pointerEvents = 'auto';
        } else {
          // Sembunyikan dengan animasi pudar keluar
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95) translateY(10px)';
          item.style.pointerEvents = 'none';
          
          // Tunggu transisi selesai sebelum mengganti properti display
          setTimeout(() => {
            if (item.style.opacity === '0') {
              item.style.display = 'none';
            }
          }, 350);
        }
      });
    });
  });
}

/**
 * 3. Before/After Slider (Kasus 02 - Meta Auto Wrap)
 * Membandingkan foto mobil sebelum dan sesudah dipasang wrapping premium secara interaktif.
 */
function initBeforeAfterSlider() {
  const slider = document.getElementById('beforeAfterSlider');
  const rangeInput = document.getElementById('sliderRange');
  const beforeImg = document.getElementById('sliderBeforeImg');
  const sliderBar = document.getElementById('sliderBar');

  if (!slider || !rangeInput || !beforeImg || !sliderBar) return;

  // Fungsi pengupdate posisi slider
  function updateSliderPosition(value) {
    // 1. Mengubah kliping (clip-path) pada gambar "Sebelum"
    beforeImg.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
    // 2. Menggeser garis pembatas putih dan tombol geser tengah
    sliderBar.style.left = `${value}%`;
  }

  // Dengarkan event pergeseran range input (berfungsi baik pada mouse maupun touch gesture)
  rangeInput.addEventListener('input', (e) => {
    updateSliderPosition(e.target.value);
  });

  // Set nilai inisial ke tengah (50%) saat halaman dimuat
  updateSliderPosition(rangeInput.value);
}

/**
 * 4. Efek Hover 3D Tilt
 * Menghadirkan kedalaman visual 3D halus pada kartu kasus portofolio (.case)
 * dengan performa tinggi menggunakan requestAnimationFrame.
 */
function init3DHoverTilt() {
  const cases = document.querySelectorAll('.portfolio-grid .case');
  if (cases.length === 0) return;

  cases.forEach(card => {
    let rect = card.getBoundingClientRect();
    let isInside = false;
    let rAFId = null;

    // Simpan koordinat mouse relatif
    let mouseX = 0;
    let mouseY = 0;

    // Perbarui bounding box saat window di-resize
    window.addEventListener('resize', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mouseenter', () => {
      isInside = true;
      rect = card.getBoundingClientRect(); // Ambil koordinat terbaru
      card.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease';
    });

    card.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (isInside && rAFId === null) {
        rAFId = requestAnimationFrame(tiltAnimation);
      }
    });

    card.addEventListener('mouseleave', () => {
      isInside = false;
      if (rAFId !== null) {
        cancelAnimationFrame(rAFId);
        rAFId = null;
      }
      // Kembalikan ke posisi semula dengan transisi yang lebih halus dan lambat
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });

    function tiltAnimation() {
      if (!isInside) {
        rAFId = null;
        return;
      }

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Hitung delta penyimpangan mouse dari titik tengah (kisaran -1 hingga 1)
      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;

      // Maksimal rotasi kemiringan: 8 derajat
      const maxTilt = 8;
      const rotateX = -(deltaY * maxTilt).toFixed(2);
      const rotateY = (deltaX * maxTilt).toFixed(2);

      // Terapkan transformasi 3D
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Terus lakukan animasi jika mouse masih bergerak di dalam
      rAFId = requestAnimationFrame(tiltAnimation);
    }
  });
}

/**
 * 5. Penanganan Formulir Kontak
 * Menyimulasikan pengiriman pesan kontak secara asinkron dengan feedback yang cantik.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Dapatkan tombol submit dan beri efek memuat (loading)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim Pesan...';
    submitBtn.disabled = true;

    // Simulasikan delay pengiriman jaringan selama 1.5 detik
    setTimeout(() => {
      // Sembunyikan form dan tampilkan pesan sukses
      form.style.display = 'none';
      if (successMsg) {
        successMsg.style.display = 'flex';
      }
    }, 1500);
  });
}
