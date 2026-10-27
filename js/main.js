// ===== DATA =====
const scripts = [
  {
    id: 1,
    cat_ar: 'الشرطة',
    cat_en: 'Police',
    cat_key: 'police',
    title_ar: 'سكربت الشرطة',
    title_en: 'Police System',
    desc_ar: 'نظام متكامل لإدارة الشرطة وقوانين المدينة: قائمة شرطة، إدارة الأفراد، البلاغات، السجن، المخالفات والمركبات.',
    desc_en: 'Complete police management system: police menu, personnel, dispatch reports, jailing, fines and vehicles.',
    badge: 'hot',
    badge_label_ar: 'الأكثر طلباً',
    badge_label_en: 'Most Wanted',
    features_ar: ['قائمة شرطة', 'إدارة الأفراد', 'البلاغات', 'المخالفات'],
    features_en: ['Police Menu', 'Personnel', 'Dispatch Reports', 'Fines'],
    images: ['images/police.jpg'],
    color: '#0a84ff',
    emoji: '🚓'
  },
  {
    id: 2,
    cat_ar: 'الشرطة',
    cat_en: 'Police',
    cat_key: 'police',
    title_ar: 'سكربت الإسعاف',
    title_en: 'EMS System',
    desc_ar: 'نظام إسعاف واقعي ومتطور: إنعاش، علاج الإصابات، حالة المريض والبلاغات الطبية.',
    desc_en: 'Realistic EMS system: revive, injury treatment, patient status and medical dispatch.',
    badge: 'new',
    badge_label_ar: 'جديد',
    badge_label_en: 'New',
    features_ar: ['إنعاش', 'علاج الإصابات', 'حالة المريض', 'البلاغات'],
    features_en: ['Revive', 'Injury Treatment', 'Patient Status', 'Dispatch'],
    images: ['images/ems.jpg'],
    color: '#ff3860',
    emoji: '🚑'
  },
  {
    id: 3,
    cat_ar: 'الوظائف',
    cat_en: 'Jobs',
    cat_key: 'jobs',
    title_ar: 'سكربت الوظائف المدنية',
    title_en: 'Civilian Jobs System',
    desc_ar: 'وظائف متنوعة وممتعة ومربحة: توصيل، سائق شاحنة، تاكسي، نظافة وميكانيكي.',
    desc_en: 'Diverse and profitable jobs: delivery, trucker, taxi, garbage and mechanic.',
    badge: 'hot',
    badge_label_ar: 'الأكثر طلباً',
    badge_label_en: 'Most Wanted',
    features_ar: ['5 وظائف', 'نظام ترقيات', 'مكافآت يومية', 'واجهة مميزة'],
    features_en: ['5 Jobs', 'Promotions', 'Daily Rewards', 'Custom UI'],
    images: ['images/civjobs.jpg'],
    color: '#ffd700',
    emoji: '💼'
  },
  {
    id: 4,
    cat_ar: 'الوظائف',
    cat_en: 'Jobs',
    cat_key: 'jobs',
    title_ar: 'سكربت العصابات',
    title_en: 'Gangs System',
    desc_ar: 'نظام عصابات متكامل مع مناطق وفعاليات: إدارة الأعضاء، المناطق، البيك والحروب.',
    desc_en: 'Full gang system with territories and events: members, zones, stash and wars.',
    badge: 'featured',
    badge_label_ar: 'مميز',
    badge_label_en: 'Featured',
    features_ar: ['إدارة الأعضاء', 'مناطق نفوذ', 'حروب العصابات', 'خزنة مشتركة'],
    features_en: ['Member Management', 'Territories', 'Gang Wars', 'Shared Stash'],
    images: ['images/gangs.jpg'],
    color: '#9b59b6',
    emoji: '💀'
  },
  {
    id: 5,
    cat_ar: 'واجهات',
    cat_en: 'UI',
    cat_key: 'ui',
    title_ar: 'سكربت الحقيبة',
    title_en: 'Inventory System',
    desc_ar: 'حقيبة واقعية بتصميم احترافي: أوزان، عناصر، أسلحة وإسعافات.',
    desc_en: 'Realistic inventory with a professional design: weights, items, weapons and medkits.',
    badge: 'new',
    badge_label_ar: 'جديد',
    badge_label_en: 'New',
    features_ar: ['نظام أوزان', 'سحب وإفلات', 'خانات سريعة', 'واجهة احترافية'],
    features_en: ['Weight System', 'Drag & Drop', 'Quick Slots', 'Pro UI'],
    images: ['images/inventory.jpg'],
    color: '#00ff87',
    emoji: '🎒'
  },
  {
    id: 6,
    cat_ar: 'الإسكان',
    cat_en: 'Housing',
    cat_key: 'housing',
    title_ar: 'سكربت العقارات',
    title_en: 'Real Estate System',
    desc_ar: 'نظام شراء وبيع وإدارة العقارات: فلل، شقق، مرائب ومسبح.',
    desc_en: 'Property buy/sell and management: villas, apartments, garages and pools.',
    badge: 'hot',
    badge_label_ar: 'الأكثر طلباً',
    badge_label_en: 'Most Wanted',
    features_ar: ['شراء وبيع', 'تأجير', 'مرائب', 'خزائن'],
    features_en: ['Buy & Sell', 'Rentals', 'Garages', 'Storage'],
    images: ['images/realestate.jpg'],
    color: '#0a84ff',
    emoji: '🏠'
  },
  {
    id: 7,
    cat_ar: 'المركبات',
    cat_en: 'Vehicles',
    cat_key: 'vehicles',
    title_ar: 'سكربت المحلات (معرض السيارات)',
    title_en: 'Vehicle Shop System',
    desc_ar: 'نظام محلات متكامل وقابل للتخصيص: سيارات رياضية، SUV، دفع رباعي ودراجات.',
    desc_en: 'Complete customizable shop system: sports, SUVs, sedans, trucks and motorcycles.',
    badge: 'featured',
    badge_label_ar: 'مميز',
    badge_label_en: 'Featured',
    features_ar: ['فئات متعددة', 'معاينة المركبة', 'تخصيص الألوان', 'تجربة قيادة'],
    features_en: ['Multiple Categories', 'Vehicle Preview', 'Color Options', 'Test Drive'],
    images: ['images/vehicleshop.jpg'],
    color: '#ff8c00',
    emoji: '🚗'
  },
  {
    id: 8,
    cat_ar: 'الاقتصاد',
    cat_en: 'Economy',
    cat_key: 'economy',
    title_ar: 'سكربت التصنيع',
    title_en: 'Crafting System',
    desc_ar: 'نظام تصنيع واقعي ومتنوع: وصفات، مواد، شريط تقدم وطاولات عمل.',
    desc_en: 'Realistic and varied crafting: recipes, materials, progress bar and workbenches.',
    badge: null,
    badge_label_ar: '',
    badge_label_en: '',
    features_ar: ['وصفات متعددة', 'مواد خام', 'شريط تقدم', 'طاولات عمل'],
    features_en: ['Many Recipes', 'Raw Materials', 'Progress Bar', 'Workbenches'],
    images: ['images/crafting.jpg'],
    color: '#00ff87',
    emoji: '🔧'
  },
  {
    id: 9,
    cat_ar: 'الاقتصاد',
    cat_en: 'Economy',
    cat_key: 'economy',
    title_ar: 'سكربت محطات الوقود',
    title_en: 'Fuel Stations System',
    desc_ar: 'نظام تعبئة الوقود بتفاصيل واقعية: عادي وممتاز، كمية، سعر وإجمالي.',
    desc_en: 'Realistic fueling system: regular and premium, quantity, price and total.',
    badge: 'custom',
    badge_label_ar: 'مخصص',
    badge_label_en: 'Custom',
    features_ar: ['نوع الوقود', 'تحكم بالكمية', 'عداد حقيقي', 'محطات متعددة'],
    features_en: ['Fuel Types', 'Quantity Control', 'Real Pump', 'Multiple Stations'],
    images: ['images/fuel.jpg'],
    color: '#ff3860',
    emoji: '⛽'
  },
];

// ===== UTILS =====
const isMobile = () => window.innerWidth <= 768;

function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// ===== PARTICLES =====
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 135, ${p.alpha})`;
      ctx.fill();
    });
    // draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 135, ${0.08 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });
}

// ===== RENDER SCRIPTS =====
function renderScripts(filter = 'all') {
  const grid = document.getElementById('scripts-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? scripts : scripts.filter(s => s.cat_key === filter);
  const lang = currentLang;

  grid.innerHTML = filtered.map(s => {
    const title = lang === 'ar' ? s.title_ar : s.title_en;
    const desc = lang === 'ar' ? s.desc_ar : s.desc_en;
    const cat = lang === 'ar' ? s.cat_ar : s.cat_en;
    const features = lang === 'ar' ? s.features_ar : s.features_en;
    const badgeLabel = s.badge ? (lang === 'ar' ? s.badge_label_ar : s.badge_label_en) : '';
    const img = s.images && s.images.length > 0 ? s.images[0] : `https://placehold.co/600x400/12121e/00ff87?text=${encodeURIComponent(s.emoji + ' ' + title)}`;

    return `
    <div class="script-card reveal" data-id="${s.id}" onclick="openModal(${s.id})">
      <div class="script-card-media">
        <img src="${img}" alt="${title}" loading="lazy">
        ${s.badge ? `<div class="card-badge badge-${s.badge}">${badgeLabel}</div>` : ''}
        <div class="media-overlay"><span class="media-overlay-text">${lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click for details'}</span></div>
      </div>
      <div class="script-card-body">
        <div class="script-card-cat">${cat}</div>
        <div class="script-card-title">${title}</div>
        <div class="script-card-desc">${desc}</div>
        <div class="script-card-features">
          ${features.slice(0, 4).map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
        <div class="script-card-footer">
          <button class="btn-card" onclick="event.stopPropagation(); requestScript(${s.id})">${lang === 'ar' ? 'اطلب الآن' : 'Request Now'}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  observeReveal();
}

// ===== MODAL =====
let currentModalScript = null;
let modalSlideIndex = 0;

function openModal(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) return;
  currentModalScript = s;
  modalSlideIndex = 0;
  const lang = currentLang;
  const modal = document.getElementById('script-modal');
  const overlay = document.getElementById('modal-overlay');

  const title = lang === 'ar' ? s.title_ar : s.title_en;
  const desc = lang === 'ar' ? s.desc_ar : s.desc_en;
  const cat = lang === 'ar' ? s.cat_ar : s.cat_en;
  const features = lang === 'ar' ? s.features_ar : s.features_en;

  // Build slider images from local SVG files
  const sliderImgs = s.images.map((imgUrl, i) => {
    return `<img src="${imgUrl}" alt="${title} ${i+1}" class="${i===0?'active':''}" data-idx="${i}">`;
  }).join('');

  const dots = Array.from({length: s.images.length}, (_, i) =>
    `<span class="modal-dot ${i===0?'active':''}" onclick="setModalSlide(${i})"></span>`
  ).join('');

  document.getElementById('modal-slider').innerHTML = `
    ${sliderImgs}
    ${s.images.length > 1 ? `<button class="modal-slider-arrow prev" onclick="changeModalSlide(-1)">‹</button>
    <button class="modal-slider-arrow next" onclick="changeModalSlide(1)">›</button>
    <div class="modal-slider-dots">${dots}</div>` : ''}
  `;

  document.getElementById('modal-cat').textContent = cat;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-features-list').innerHTML = features.map(f => `<div class="modal-feature-item">${f}</div>`).join('');
  document.getElementById('modal-features-title').textContent = lang === 'ar' ? 'المميزات' : 'Features';
  document.getElementById('modal-btn-buy').textContent = lang === 'ar' ? 'اطلب الآن' : 'Request Now';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalScript = null;
}

function changeModalSlide(dir) {
  const imgs = document.querySelectorAll('#modal-slider img');
  const dots = document.querySelectorAll('#modal-slider .modal-dot');
  if (!imgs.length) return;
  imgs[modalSlideIndex].classList.remove('active');
  dots[modalSlideIndex].classList.remove('active');
  modalSlideIndex = (modalSlideIndex + dir + imgs.length) % imgs.length;
  imgs[modalSlideIndex].classList.add('active');
  dots[modalSlideIndex].classList.add('active');
}

function setModalSlide(idx) {
  const imgs = document.querySelectorAll('#modal-slider img');
  const dots = document.querySelectorAll('#modal-slider .modal-dot');
  if (!imgs.length) return;
  imgs[modalSlideIndex].classList.remove('active');
  dots[modalSlideIndex].classList.remove('active');
  modalSlideIndex = idx;
  imgs[modalSlideIndex].classList.add('active');
  dots[modalSlideIndex].classList.add('active');
}

// ===== CHECKOUT =====

function requestScript(id) {
  const select = document.getElementById('custom-script');
  closeModal();
  if (select) select.value = String(id);
  document.getElementById('custom').scrollIntoView({ behavior: 'smooth' });
}

function populateScriptSelect() {
  const select = document.getElementById('custom-script');
  if (!select) return;
  const lang = currentLang;
  const prev = select.value;
  select.innerHTML = scripts.map(s => `<option value="${s.id}">${lang === 'ar' ? s.title_ar : s.title_en}</option>`).join('')
    + `<option value="custom">${lang === 'ar' ? 'سكربت مخصص / فكرة جديدة' : 'Custom script / new idea'}</option>`;
  if (prev) select.value = prev;
}

async function doCustomOrder(e) {
  e.preventDefault();
  const lang = currentLang;
  const form = e.target;
  const btn = document.getElementById('custom-submit');
  const select = document.getElementById('custom-script');
  const data = {
    name: document.getElementById('custom-name').value.trim(),
    discord: document.getElementById('custom-discord').value.trim(),
    email: document.getElementById('custom-email').value.trim(),
    script: select.options[select.selectedIndex].text,
    framework: document.getElementById('custom-framework').value,
    details: document.getElementById('custom-desc').value.trim(),
    website: document.getElementById('custom-website').value
  };
  if (!data.name || !data.discord || !data.details) {
    showToast(t('toast_fill_all'), 'error'); return;
  }
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
  try {
    const res = await fetch('/.netlify/functions/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('send failed');
    showToast(t('toast_order_sent'), 'success', 5000);
    form.reset();
    populateScriptSelect();
  } catch (err) {
    showToast(lang === 'ar' ? 'تعذر إرسال الطلب، حاول مرة أخرى أو تواصل معنا على الديسكورد' : 'Could not send the request. Please try again or contact us on Discord', 'error', 6000);
  } finally {
    btn.disabled = false;
    btn.textContent = label;
  }
}

// ===== FAQ =====
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ===== FILTERS =====
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderScripts(btn.dataset.filter);
    });
  });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ===== NAV =====
function initNav() {
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) scrollTop.classList.toggle('show', window.scrollY > 400);
  });

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + (el.dataset.suffix || '');
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (!input.value) return;
      showToast(currentLang === 'ar' ? 'تم الاشتراك بنجاح! 🎉' : 'Subscribed successfully! 🎉', 'success');
      input.value = '';
    });
  }
}

// ===== PRELOADER =====
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hidePreloader, 1800);

  renderScripts();
  initNav();
  initFaq();
  initFilters();
  initParticles();
  initNewsletter();
  populateScriptSelect();
  observeReveal();

  // Counter observer
  const statsSection = document.getElementById('hero-stats');
  if (statsSection) counterObserver.observe(statsSection);

  // Close overlays on background click
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
  document.getElementById('custom-form')?.addEventListener('submit', doCustomOrder);

  // Re-render on language change
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => { renderScripts(); populateScriptSelect(); }, 50);
    });
  });

  // Scroll to top
  document.getElementById('scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
