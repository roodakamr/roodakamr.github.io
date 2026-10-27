// ===== DATA =====
const scripts = [
  {
    id: 1,
    cat_ar: 'الوظائف',
    cat_en: 'Jobs',
    cat_key: 'jobs',
    title_ar: 'نظام الوظائف المتقدم',
    title_en: 'Advanced Job System',
    desc_ar: 'نظام وظائف شامل ومتطور يدعم أكثر من 50 وظيفة مختلفة مع نظام ترقيات ومكافآت. يشمل وظائف الشرطة والطوارئ والميكانيكي والمزيد.',
    desc_en: 'Comprehensive advanced job system supporting 50+ different jobs with promotion and rewards system. Includes police, EMS, mechanic, and more.',
    price_sar: 250,
    price_usd: 65,
    badge: 'hot',
    badge_label_ar: 'الأكثر طلباً',
    badge_label_en: 'Most Wanted',
    features_ar: ['أكثر من 50 وظيفة', 'نظام ترقيات', 'مكافآت يومية', 'متوافق ESX/QBCore', 'واجهة مميزة', 'لوحة إدارة'],
    features_en: ['50+ Jobs', 'Promotion System', 'Daily Rewards', 'ESX/QBCore Compatible', 'Custom UI', 'Admin Panel'],
    images: [
      'images/jobs.svg',
      'images/hud.svg',
      'images/delivery.svg',
    ],
    color: '#00ff87',
    emoji: '💼'
  },
  {
    id: 2,
    cat_ar: 'المركبات',
    cat_en: 'Vehicles',
    cat_key: 'vehicles',
    title_ar: 'محل السيارات المخصص',
    title_en: 'Custom Vehicle Shop',
    desc_ar: 'محل سيارات احترافي بواجهة ثلاثية الأبعاد. يدعم التخصيص الكامل، عرض السيارة 360 درجة، نظام تمويل، وفئات متعددة.',
    desc_en: 'Professional vehicle shop with 3D preview interface. Supports full customization, 360° car preview, financing system, and multiple categories.',
    price_sar: 180,
    price_usd: 48,
    badge: 'new',
    badge_label_ar: 'جديد',
    badge_label_en: 'New',
    features_ar: ['عرض ثلاثي الأبعاد', 'نظام تمويل', 'تخصيص كامل', 'فئات متعددة', 'متوافق VORP', 'إدارة المخزون'],
    features_en: ['3D Preview', 'Finance System', 'Full Customization', 'Multiple Categories', 'VORP Compatible', 'Inventory Management'],
    images: [
      'images/vehicles.svg',
      'images/hud.svg',
    ],
    color: '#0a84ff',
    emoji: '🚗'
  },
  {
    id: 3,
    cat_ar: 'الاقتصاد',
    cat_en: 'Economy',
    cat_key: 'economy',
    title_ar: 'نظام المخدرات المتقدم',
    title_en: 'Advanced Drug System',
    desc_ar: 'نظام مخدرات متكامل مع زراعة ومعالجة وبيع. يشمل مناطق خاصة، شرطة ذكاء اصطناعي، سوق سوداء، وأكثر من 10 أنواع مختلفة.',
    desc_en: 'Complete drug system with planting, processing, and selling. Includes exclusive zones, AI police, black market, and 10+ types.',
    price_sar: 320,
    price_usd: 85,
    badge: 'featured',
    badge_label_ar: 'مميز',
    badge_label_en: 'Featured',
    features_ar: ['زراعة ومعالجة', 'سوق سوداء', 'شرطة ذكاء اصطناعي', '+10 أنواع', 'مناطق حصرية', 'نظام مخاطر'],
    features_en: ['Plant & Process', 'Black Market', 'AI Police', '10+ Types', 'Exclusive Zones', 'Risk System'],
    images: [
      'images/drugs.svg',
      'images/economy.svg',
      'images/police.svg',
    ],
    color: '#ff3860',
    emoji: '💊'
  },
  {
    id: 4,
    cat_ar: 'الإسكان',
    cat_en: 'Housing',
    cat_key: 'housing',
    title_ar: 'نظام المنازل الكامل',
    title_en: 'Full Housing System',
    desc_ar: 'نظام منازل متكامل يدعم الشراء والإيجار والتأثيث الكامل. مع نظام قفل وأمان وضيافة وأكثر من 100 منزل جاهز.',
    desc_en: 'Complete housing system supporting purchase, rental, and full furnishing. With lock, security, guest system, and 100+ pre-built homes.',
    price_sar: 290,
    price_usd: 77,
    badge: 'hot',
    badge_label_ar: 'رائج',
    badge_label_en: 'Trending',
    features_ar: ['شراء وإيجار', 'تأثيث كامل', 'نظام قفل', '+100 منزل', 'ضيافة الأصدقاء', 'إدارة الملكية'],
    features_en: ['Buy & Rent', 'Full Furnishing', 'Lock System', '100+ Homes', 'Guest System', 'Property Management'],
    images: [
      'images/housing.svg',
      'images/economy.svg',
    ],
    color: '#ffd700',
    emoji: '🏠'
  },
  {
    id: 5,
    cat_ar: 'الشرطة',
    cat_en: 'Police',
    cat_key: 'police',
    title_ar: 'نظام MDT الشرطة',
    title_en: 'Police MDT System',
    desc_ar: 'نظام MDT احترافي للشرطة مع قاعدة بيانات المجرمين، تتبع السيارات، إدارة المكالمات، وواجهة عصرية تشبه الأنظمة الحقيقية.',
    desc_en: 'Professional police MDT with criminal database, vehicle tracking, call management, and a modern interface resembling real systems.',
    price_sar: 220,
    price_usd: 58,
    badge: 'new',
    badge_label_ar: 'جديد',
    badge_label_en: 'New',
    features_ar: ['قاعدة بيانات', 'تتبع السيارات', 'إدارة المكالمات', 'بطاقات هوية', 'سجل الجرائم', 'واجهة عصرية'],
    features_en: ['Criminal Database', 'Vehicle Tracking', 'Call Management', 'ID Cards', 'Crime History', 'Modern UI'],
    images: [
      'images/police.svg',
      'images/prison.svg',
    ],
    color: '#0a84ff',
    emoji: '🚔'
  },
  {
    id: 6,
    cat_ar: 'واجهات',
    cat_en: 'UI/HUD',
    cat_key: 'ui',
    title_ar: 'HUD متطور بالكامل',
    title_en: 'Advanced Custom HUD',
    desc_ar: 'واجهة HUD عصرية وقابلة للتخصيص الكامل. تعرض الصحة والدرع والجوع والعطش ومؤشرات الأداء بشكل أنيق ومميز.',
    desc_en: 'Modern, fully customizable HUD. Displays health, armor, hunger, thirst, and performance indicators in a sleek, unique style.',
    price_sar: 120,
    price_usd: 32,
    badge: 'featured',
    badge_label_ar: 'مميز',
    badge_label_en: 'Featured',
    features_ar: ['قابل للتخصيص', 'متعدد الثيمات', 'مؤشرات كاملة', 'خفيف الأداء', 'دعم الموبايل', 'تحديثات مستمرة'],
    features_en: ['Fully Customizable', 'Multiple Themes', 'Full Indicators', 'Performance Friendly', 'Mobile Support', 'Continuous Updates'],
    images: [
      'images/hud.svg',
      'images/vehicles.svg',
    ],
    color: '#00ff87',
    emoji: '🎮'
  },
  {
    id: 7,
    cat_ar: 'الاقتصاد',
    cat_en: 'Economy',
    cat_key: 'economy',
    title_ar: 'نظام البنك والاقتصاد',
    title_en: 'Banking & Economy System',
    desc_ar: 'نظام اقتصادي متكامل مع بنك، محافظ رقمية، تحويلات مالية، قروض، وبطاقات ائتمان. يدعم العملات المتعددة.',
    desc_en: 'Complete economic system with banking, digital wallets, money transfers, loans, and credit cards. Supports multiple currencies.',
    price_sar: 280,
    price_usd: 74,
    badge: null,
    features_ar: ['نظام بنكي', 'محافظ رقمية', 'تحويلات مالية', 'نظام قروض', 'بطاقات ائتمان', 'عملات متعددة'],
    features_en: ['Banking System', 'Digital Wallets', 'Money Transfers', 'Loan System', 'Credit Cards', 'Multiple Currencies'],
    images: [
      'images/economy.svg',
      'images/jobs.svg',
    ],
    color: '#ffd700',
    emoji: '💰'
  },
  {
    id: 8,
    cat_ar: 'الوظائف',
    cat_en: 'Jobs',
    cat_key: 'jobs',
    title_ar: 'نظام التوصيل المتقدم',
    title_en: 'Advanced Delivery System',
    desc_ar: 'نظام توصيل ديناميكي مع مهام عشوائية وخرائط تفاعلية ومكافآت متدرجة. يدعم التوصيل بالسيارة والدراجة والطائرة.',
    desc_en: 'Dynamic delivery system with random missions, interactive maps, and tiered rewards. Supports car, bike, and helicopter deliveries.',
    price_sar: 160,
    price_usd: 42,
    badge: 'custom',
    badge_label_ar: 'مخصص',
    badge_label_en: 'Custom',
    features_ar: ['مهام عشوائية', 'خرائط تفاعلية', 'مكافآت متدرجة', 'عدة مركبات', 'نظام تقييم', 'لوحة صدارة'],
    features_en: ['Random Missions', 'Interactive Maps', 'Tiered Rewards', 'Multiple Vehicles', 'Rating System', 'Leaderboard'],
    images: [
      'images/delivery.svg',
      'images/hud.svg',
    ],
    color: '#0a84ff',
    emoji: '📦'
  },
  {
    id: 9,
    cat_ar: 'الشرطة',
    cat_en: 'Police',
    cat_key: 'police',
    title_ar: 'نظام السجن المتطور',
    title_en: 'Advanced Prison System',
    desc_ar: 'نظام سجن واقعي مع أنشطة داخل السجن وإمكانية الهروب وتقليل الوقت بالعمل. يشمل إدارة شاملة للسجناء.',
    desc_en: 'Realistic prison system with in-prison activities, escape mechanics, and time reduction via work. Includes full inmate management.',
    price_sar: 200,
    price_usd: 53,
    badge: null,
    features_ar: ['أنشطة داخل السجن', 'نظام هروب', 'تقليل الوقت', 'إدارة سجناء', 'أنظمة أمن', 'تكامل شرطة'],
    features_en: ['In-Prison Activities', 'Escape System', 'Time Reduction', 'Inmate Management', 'Security Systems', 'Police Integration'],
    images: [
      'images/prison.svg',
      'images/police.svg',
    ],
    color: '#ff3860',
    emoji: '⛓️'
  }
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
    const price = lang === 'ar' ? `${s.price_sar} ر.س` : `$${s.price_usd}`;
    const badgeLabel = s.badge ? (lang === 'ar' ? s.badge_label_ar : s.badge_label_en) : '';
    const img = s.images && s.images.length > 0 ? s.images[0] : `https://placehold.co/600x400/12121e/00ff87?text=${encodeURIComponent(s.emoji + ' ' + title)}`;

    return `
    <div class="script-card reveal" data-id="${s.id}" onclick="openModal(${s.id})">
      <div class="script-card-media">
        <img src="${img}" alt="${title}" loading="lazy" onerror="this.src='https://placehold.co/600x400/12121e/00ff87?text=${encodeURIComponent(s.emoji)}'">
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
          <div class="script-price">${price}</div>
          <button class="btn-card" onclick="event.stopPropagation(); openCheckout(${s.id})">${lang === 'ar' ? 'شراء الآن' : 'Buy Now'}</button>
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
  const price = lang === 'ar' ? `${s.price_sar} <span>ر.س</span>` : `$${s.price_usd} <span>USD</span>`;

  // Build slider images from local SVG files
  const sliderImgs = s.images.map((imgUrl, i) => {
    return `<img src="${imgUrl}" alt="${title} ${i+1}" class="${i===0?'active':''}" data-idx="${i}" onerror="this.src='https://placehold.co/900x380/0a0a12/00ff87?text=${encodeURIComponent(s.emoji)}'">`;
  }).join('');

  const dots = Array.from({length: s.images.length}, (_, i) =>
    `<span class="modal-dot ${i===0?'active':''}" onclick="setModalSlide(${i})"></span>`
  ).join('');

  document.getElementById('modal-slider').innerHTML = `
    ${sliderImgs}
    <button class="modal-slider-arrow prev" onclick="changeModalSlide(-1)">‹</button>
    <button class="modal-slider-arrow next" onclick="changeModalSlide(1)">›</button>
    <div class="modal-slider-dots">${dots}</div>
  `;

  document.getElementById('modal-cat').textContent = cat;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-features-list').innerHTML = features.map(f => `<div class="modal-feature-item">${f}</div>`).join('');
  document.getElementById('modal-price').innerHTML = price;
  document.getElementById('modal-features-title').textContent = lang === 'ar' ? 'المميزات' : 'Features';
  document.getElementById('modal-btn-buy').textContent = lang === 'ar' ? 'شراء الآن' : 'Buy Now';
  document.getElementById('modal-btn-custom').textContent = lang === 'ar' ? 'طلب تعديل' : 'Request Modification';

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
let checkoutScript = null;

function openCheckout(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) return;
  checkoutScript = s;
  const lang = currentLang;
  const title = lang === 'ar' ? s.title_ar : s.title_en;
  const basePrice = lang === 'ar' ? s.price_sar : s.price_usd;
  const currency = lang === 'ar' ? 'ر.س' : '$';
  const tax = (basePrice * 0.15).toFixed(2);
  const total = (basePrice * 1.15).toFixed(2);

  document.getElementById('checkout-name').textContent = title;
  document.getElementById('checkout-base').textContent = `${basePrice} ${currency}`;
  document.getElementById('checkout-tax').textContent = `${tax} ${currency}`;
  document.getElementById('checkout-total-amt').textContent = `${total} ${currency}`;
  document.getElementById('checkout-title').textContent = lang === 'ar' ? 'إتمام الشراء' : 'Complete Purchase';
  document.getElementById('checkout-subtitle').textContent = lang === 'ar' ? 'اختر طريقة الدفع' : 'Choose payment method';
  document.getElementById('checkout-label-subtotal').textContent = lang === 'ar' ? 'المجموع' : 'Subtotal';
  document.getElementById('checkout-label-tax').textContent = lang === 'ar' ? 'الضريبة 15%' : 'Tax 15%';
  document.getElementById('checkout-label-total').textContent = lang === 'ar' ? 'الإجمالي' : 'Total';
  document.getElementById('checkout-btn-paypal').textContent = lang === 'ar' ? '💳 الدفع عبر PayPal' : '💳 Pay with PayPal';
  document.getElementById('checkout-btn-stc').textContent = lang === 'ar' ? '📱 الدفع عبر STC Pay' : '📱 Pay with STC Pay';
  document.getElementById('checkout-cancel').textContent = lang === 'ar' ? 'إلغاء' : 'Cancel';

  document.getElementById('checkout-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkout-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function payWith(method) {
  const lang = currentLang;
  showToast(lang === 'ar' ? 'جارٍ تحويلك لصفحة الدفع...' : 'Redirecting to payment...', 'info');
  setTimeout(() => {
    closeCheckout();
    if (method === 'paypal') {
      // PayPal redirect would go here
      window.open('https://www.paypal.com', '_blank');
    } else if (method === 'stc') {
      showToast(lang === 'ar' ? 'سيتم إرسال رابط الدفع على رقمك' : 'Payment link will be sent to your phone', 'info');
    }
    showToast(lang === 'ar' ? 'شكراً! سيتم التواصل معك قريباً' : 'Thank you! We\'ll contact you soon', 'success', 5000);
  }, 1000);
}

// ===== AUTH =====
let currentUser = JSON.parse(localStorage.getItem('user') || 'null');

function openAuth(tab = 'login') {
  document.getElementById('auth-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
}

function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.id === `form-${tab}`));
}

function updateAuthUI() {
  const loginBtn = document.getElementById('nav-login-btn');
  const registerBtn = document.getElementById('nav-register-btn');
  const userMenuWrap = document.getElementById('user-menu-wrap');

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
    if (userMenuWrap) {
      userMenuWrap.style.display = 'flex';
      const avatarBtn = userMenuWrap.querySelector('.user-avatar-btn');
      if (avatarBtn) avatarBtn.textContent = currentUser.name[0].toUpperCase();
      const nameEl = userMenuWrap.querySelector('.user-dropdown-name');
      const emailEl = userMenuWrap.querySelector('.user-dropdown-email');
      if (nameEl) nameEl.textContent = currentUser.name;
      if (emailEl) emailEl.textContent = currentUser.email;
    }
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (registerBtn) registerBtn.style.display = '';
    if (userMenuWrap) userMenuWrap.style.display = 'none';
  }
}

function doLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) {
    showToast(t('toast_fill_all'), 'error'); return;
  }
  // Simulate login
  currentUser = { name: email.split('@')[0], email };
  localStorage.setItem('user', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuth();
  showToast(t('toast_login_ok'), 'success');
}

function doRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;
  if (!name || !email || !pass) {
    showToast(t('toast_fill_all'), 'error'); return;
  }
  currentUser = { name, email };
  localStorage.setItem('user', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuth();
  showToast(t('toast_register_ok'), 'success');
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem('user');
  updateAuthUI();
  showToast(currentLang === 'ar' ? 'تم تسجيل الخروج' : 'Logged out', 'info');
}

// ===== CUSTOM FORM =====
function doCustomOrder(e) {
  e.preventDefault();
  const name = document.getElementById('custom-name').value;
  const email = document.getElementById('custom-email').value;
  const desc = document.getElementById('custom-desc').value;
  if (!name || !email || !desc) {
    showToast(t('toast_fill_all'), 'error'); return;
  }
  showToast(t('toast_order_sent'), 'success', 5000);
  e.target.reset();
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
  updateAuthUI();
  observeReveal();

  // Counter observer
  const statsSection = document.getElementById('hero-stats');
  if (statsSection) counterObserver.observe(statsSection);

  // Close overlays on background click
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
  document.getElementById('checkout-overlay').addEventListener('click', e => {
    if (e.target.id === 'checkout-overlay') closeCheckout();
  });
  document.getElementById('auth-overlay').addEventListener('click', e => {
    if (e.target.id === 'auth-overlay') closeAuth();
  });

  // Auth forms
  document.getElementById('login-form')?.addEventListener('submit', doLogin);
  document.getElementById('register-form')?.addEventListener('submit', doRegister);
  document.getElementById('custom-form')?.addEventListener('submit', doCustomOrder);

  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.addEventListener('click', () => switchAuthTab(t.dataset.tab));
  });

  // Re-render on language change
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => renderScripts(), 50);
    });
  });

  // Scroll to top
  document.getElementById('scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
