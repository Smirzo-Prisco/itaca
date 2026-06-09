/* ── i18n engine ──────────────────────────────────────────────────── */

function getCurrentLang() {
  const p = new URLSearchParams(window.location.search).get('lang');
  return ['en', 'fr', 'de'].includes(p) ? p : 'it';
}

function setLang(lang) {
  const url = new URL(window.location.href);
  if (lang === 'it') {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', lang);
  }
  window.location.href = url.toString();
}

function t(key) {
  const parts = key.split('.');
  let obj = TRANSLATIONS[getCurrentLang()];
  for (const p of parts) { if (obj == null) return ''; obj = obj[p]; }
  return obj ?? '';
}

function applyLang() {
  const lang = getCurrentLang();
  document.getElementById('html-root').lang = lang;

  // SEO meta
  const tr = TRANSLATIONS[lang];
  document.getElementById('page-title').textContent      = tr.meta.title;
  document.getElementById('meta-description').content   = tr.meta.description;
  document.getElementById('og-title').content           = tr.meta.title;
  document.getElementById('og-description').content     = tr.meta.description;
  document.getElementById('tw-title').content           = tr.meta.title;
  document.getElementById('tw-description').content     = tr.meta.description;
  const canonical = lang === 'it' ? 'https://itacavilla.it/' : `https://itacavilla.it/?lang=${lang}`;
  document.getElementById('og-url').content             = canonical;
  document.getElementById('link-canonical').href        = canonical;

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Slider ────────────────────────────────────────────────────────── */

let currentSlider = null;
let currentIndex  = 0;

function openSlider(key) {
  const lang   = getCurrentLang();
  const slTr   = TRANSLATIONS[lang].sliders[key];
  currentSlider = {
    title:  slTr.title,
    slides: slTr.slides.map((s, i) => ({ src: SLIDER_SRCS[key][i], caption: s.caption })),
  };
  currentIndex = 0;
  updateSlider();
  document.getElementById('slider-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSlider() {
  document.getElementById('slider-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function updateSlider() {
  const slide = currentSlider.slides[currentIndex];
  document.getElementById('slider-img').src             = slide.src;
  document.getElementById('slider-img').alt             = slide.caption;
  document.getElementById('slider-caption').textContent = slide.caption;
  document.getElementById('slider-title').textContent   = currentSlider.title;
  document.getElementById('slider-counter').textContent =
    `${currentIndex + 1} / ${currentSlider.slides.length}`;
}

function sliderPrev() {
  currentIndex = (currentIndex - 1 + currentSlider.slides.length) % currentSlider.slides.length;
  updateSlider();
}

function sliderNext() {
  currentIndex = (currentIndex + 1) % currentSlider.slides.length;
  updateSlider();
}

/* ── Modal ─────────────────────────────────────────────────────────── */

function openModal(key) {
  const lang = getCurrentLang();
  const m    = TRANSLATIONS[lang].modals[key];
  document.getElementById('modal-icon').textContent  = GUIDE_ICONS[key];
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-body').innerHTML    = m.body;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Events ────────────────────────────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeSlider(); }
  if (document.getElementById('slider-overlay').classList.contains('open')) {
    if (e.key === 'ArrowLeft')  sliderPrev();
    if (e.key === 'ArrowRight') sliderNext();
  }
});

// Hamburger menu
const navToggle    = document.getElementById('nav-toggle');
const navLinksList = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('open');
  navLinksList.classList.toggle('mobile-open', isOpen);
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksList.classList.remove('mobile-open');
  });
});

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Swipe per slider su mobile
let touchStartX = 0;
const sliderEl  = document.getElementById('slider-overlay');
sliderEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
sliderEl.addEventListener('touchend',   e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? sliderNext() : sliderPrev();
});

// Apply translations on load
document.addEventListener('DOMContentLoaded', applyLang);
