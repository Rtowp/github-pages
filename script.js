// mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navlinks = document.getElementById('navlinks');
  toggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }));

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));