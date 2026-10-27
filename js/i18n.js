const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_scripts: 'السكربتات',
    nav_custom: 'طلب مخصص',
    nav_about: 'من نحن',
    nav_contact: 'تواصل معنا',
    nav_login: 'تسجيل الدخول',
    nav_register: 'إنشاء حساب',
    nav_dashboard: 'لوحة التحكم',
    nav_logout: 'تسجيل الخروج',

    hero_badge: 'أفضل سكربتات FiveM',
    hero_title_1: 'سكربتات',
    hero_title_2: 'احترافية',
    hero_title_3: 'لسيرفرك',
    hero_subtitle: 'نقدم أفضل السكربتات لـ FiveM بأداء عالي وكود نظيف. من الأنظمة الجاهزة إلى التطوير المخصص حسب طلبك',
    hero_btn1: 'تصفح السكربتات',
    hero_btn2: 'طلب مخصص',
    stat_scripts: 'سكربت متاح',
    stat_clients: 'عميل راضٍ',
    stat_servers: 'سيرفر يستخدمنا',
    stat_support: 'دعم فوري',

    scripts_tag: 'مكتبة السكربتات',
    scripts_title: 'سكربتاتنا المميزة',
    scripts_desc: 'اكتشف مجموعة واسعة من السكربتات الاحترافية المصممة خصيصاً لـ FiveM',
    filter_all: 'الكل',
    filter_jobs: 'الوظائف',
    filter_vehicles: 'المركبات',
    filter_police: 'الشرطة',
    filter_housing: 'الإسكان',
    filter_ui: 'واجهات',
    filter_economy: 'الاقتصاد',
    btn_details: 'التفاصيل',
    btn_buy: 'شراء الآن',
    price_sar: 'ر.س',
    price_usd: '$',

    how_tag: 'كيف يعمل',
    how_title: 'كيف نعمل معك؟',
    step1_title: 'اختر السكربت',
    step1_desc: 'تصفح مكتبتنا الضخمة واختر السكربت المناسب أو اطلب تطوير مخصص',
    step2_title: 'أرسل الطلب',
    step2_desc: 'أرسل لنا تفاصيل طلبك وسنتواصل معك خلال 24 ساعة',
    step3_title: 'الدفع الآمن',
    step3_desc: 'ادفع بأمان عبر PayPal أو STC Pay مع ضمان استرداد المبلغ',
    step4_title: 'التسليم والدعم',
    step4_desc: 'احصل على سكربتك مع دعم فني كامل وتحديثات مجانية',

    custom_tag: 'تطوير مخصص',
    custom_title: 'هل لديك فكرة خاصة؟',
    custom_desc: 'نطور لك أي سكربت حسب متطلبات سيرفرك. فقط أخبرنا بفكرتك وسنحولها إلى حقيقة',
    custom_f1: 'تطوير كامل حسب الطلب',
    custom_f2: 'متوافق مع جميع الفريمووركات',
    custom_f3: 'كود نظيف وموثق',
    custom_f4: 'دعم فني مستمر بعد التسليم',
    custom_f5: 'تعديلات مجانية لمدة شهر',
    form_title: 'ابدأ طلبك الآن',
    form_name: 'الاسم الكامل',
    form_email: 'البريد الإلكتروني',
    form_discord: 'معرّف الديسكورد',
    form_type: 'نوع السكربت',
    form_type_opt: 'اختر نوع السكربت...',
    form_budget: 'الميزانية التقريبية',
    form_budget_opt: 'اختر الميزانية...',
    form_desc: 'وصف الفكرة',
    form_desc_ph: 'اشرح لنا فكرتك بالتفصيل...',
    form_framework: 'الفريمووورك المستخدم',
    btn_submit: 'إرسال الطلب 🚀',

    payment_tag: 'طرق الدفع',
    payment_title: 'ادفع بأمان وسهولة',
    payment_desc: 'نقبل طرق الدفع الأكثر شيوعاً في المنطقة',
    paypal_name: 'PayPal',
    paypal_desc: 'الدفع الإلكتروني الأكثر شيوعاً عالمياً',
    paypal_badge: 'دفع آمن عالمي',
    stc_name: 'STC Pay',
    stc_desc: 'الدفع الإلكتروني السعودي الأسرع',
    stc_badge: 'خدمة سعودية محلية',

    reviews_tag: 'آراء العملاء',
    reviews_title: 'ماذا يقول عملاؤنا',

    faq_tag: 'الأسئلة الشائعة',
    faq_title: 'هل لديك استفسار؟',
    faq1_q: 'كيف أحصل على السكربت بعد الشراء؟',
    faq1_a: 'بعد إتمام عملية الدفع، ستصلك رسالة فورية على بريدك الإلكتروني تحتوي على رابط تحميل السكربت مع تعليمات التثبيت الكاملة.',
    faq2_q: 'هل السكربتات متوافقة مع ESX و QBCore؟',
    faq2_a: 'نعم! جميع سكربتاتنا متوافقة مع أشهر الفريمووركات مثل ESX و QBCore و VRP. يمكنك التواصل معنا لأي استفسار عن التوافق.',
    faq3_q: 'هل يوجد ضمان على السكربتات؟',
    faq3_a: 'نعم، نقدم ضمان 30 يوماً على جميع السكربتات. إذا واجهت أي مشكلة تقنية، سنقوم بإصلاحها مجاناً أو استرداد المبلغ.',
    faq4_q: 'كم يستغرق تطوير السكربت المخصص؟',
    faq4_a: 'يختلف الوقت حسب تعقيد السكربت، لكن في الغالب السكربتات البسيطة تأخذ 2-3 أيام، والمعقدة من أسبوع إلى أسبوعين.',
    faq5_q: 'هل تقدمون دعماً فنياً بعد الشراء؟',
    faq5_a: 'بالطبع! نقدم دعم فني مجاني لمدة 6 أشهر بعد الشراء. يمكنك التواصل معنا عبر الديسكورد أو البريد الإلكتروني.',

    footer_desc: 'أفضل مزود لسكربتات FiveM في المنطقة العربية. نطور سكربتات احترافية وحلول مخصصة لسيرفرك.',
    footer_quick: 'روابط سريعة',
    footer_support: 'الدعم',
    footer_newsletter: 'النشرة البريدية',
    footer_newsletter_desc: 'احصل على آخر أخبار السكربتات والعروض الحصرية',
    footer_newsletter_ph: 'بريدك الإلكتروني',
    footer_sub: 'اشتراك',
    footer_copy: 'جميع الحقوق محفوظة',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'الشروط والأحكام',

    auth_login_title: 'مرحباً بعودتك',
    auth_login_sub: 'سجّل دخولك للوصول إلى حسابك',
    auth_register_title: 'إنشاء حساب جديد',
    auth_register_sub: 'انضم إلى آلاف العملاء الراضين',
    tab_login: 'تسجيل الدخول',
    tab_register: 'حساب جديد',
    form_password: 'كلمة المرور',
    form_confirm_pass: 'تأكيد كلمة المرور',
    form_phone: 'رقم الجوال',
    remember_me: 'تذكرني',
    forgot_pass: 'نسيت كلمة المرور؟',
    agree_terms: 'أوافق على الشروط والأحكام',
    btn_login: 'تسجيل الدخول',
    btn_register: 'إنشاء الحساب',
    or_login_with: 'أو',
    btn_google: 'المتابعة مع Google',

    checkout_title: 'إتمام الشراء',
    checkout_subtitle: 'اختر طريقة الدفع المناسبة',
    checkout_subtotal: 'المجموع',
    checkout_tax: 'الضريبة 15%',
    checkout_total: 'الإجمالي',
    pay_paypal: 'الدفع عبر PayPal',
    pay_stc: 'الدفع عبر STC Pay',
    cancel: 'إلغاء',

    modal_buy: 'شراء الآن',
    modal_custom: 'طلب تعديل',
    modal_features: 'المميزات',
    toast_order_sent: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً',
    toast_login_ok: 'تم تسجيل الدخول بنجاح',
    toast_register_ok: 'تم إنشاء حسابك بنجاح',
    toast_payment_processing: 'جارٍ معالجة الدفع...',
    toast_fill_all: 'يرجى ملء جميع الحقول',
  },

  en: {
    nav_home: 'Home',
    nav_scripts: 'Scripts',
    nav_custom: 'Custom Order',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_login: 'Login',
    nav_register: 'Register',
    nav_dashboard: 'Dashboard',
    nav_logout: 'Logout',

    hero_badge: 'Best FiveM Scripts',
    hero_title_1: 'Professional',
    hero_title_2: 'FiveM',
    hero_title_3: 'Scripts',
    hero_subtitle: 'We deliver high-performance FiveM scripts with clean code. From ready-made systems to fully custom development built for your server',
    hero_btn1: 'Browse Scripts',
    hero_btn2: 'Custom Order',
    stat_scripts: 'Scripts Available',
    stat_clients: 'Happy Clients',
    stat_servers: 'Servers Using Us',
    stat_support: 'Instant Support',

    scripts_tag: 'Script Library',
    scripts_title: 'Our Featured Scripts',
    scripts_desc: 'Explore our wide collection of professional scripts designed exclusively for FiveM',
    filter_all: 'All',
    filter_jobs: 'Jobs',
    filter_vehicles: 'Vehicles',
    filter_police: 'Police',
    filter_housing: 'Housing',
    filter_ui: 'UI/HUD',
    filter_economy: 'Economy',
    btn_details: 'Details',
    btn_buy: 'Buy Now',
    price_sar: 'SAR',
    price_usd: '$',

    how_tag: 'How It Works',
    how_title: 'Our Process',
    step1_title: 'Choose Script',
    step1_desc: 'Browse our library and pick a ready-made script, or request fully custom development',
    step2_title: 'Submit Request',
    step2_desc: 'Send us your requirements and we\'ll reach out within 24 hours',
    step3_title: 'Secure Payment',
    step3_desc: 'Pay securely via PayPal or STC Pay with full money-back guarantee',
    step4_title: 'Delivery & Support',
    step4_desc: 'Get your script with full technical support and free updates',

    custom_tag: 'Custom Development',
    custom_title: 'Got a unique idea?',
    custom_desc: 'We build any script to your server\'s exact requirements. Just tell us your idea and we\'ll make it reality.',
    custom_f1: 'Fully custom development',
    custom_f2: 'Compatible with all frameworks',
    custom_f3: 'Clean, documented code',
    custom_f4: 'Ongoing support after delivery',
    custom_f5: 'Free revisions for 1 month',
    form_title: 'Start Your Order',
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_discord: 'Discord ID',
    form_type: 'Script Type',
    form_type_opt: 'Select script type...',
    form_budget: 'Estimated Budget',
    form_budget_opt: 'Select budget...',
    form_desc: 'Project Description',
    form_desc_ph: 'Describe your idea in detail...',
    form_framework: 'Framework Used',
    btn_submit: 'Submit Request 🚀',

    payment_tag: 'Payment Methods',
    payment_title: 'Pay Safely & Easily',
    payment_desc: 'We accept the most popular payment methods in the region',
    paypal_name: 'PayPal',
    paypal_desc: 'World\'s most trusted online payment platform',
    paypal_badge: 'Global Secure Payment',
    stc_name: 'STC Pay',
    stc_desc: 'Fastest Saudi digital wallet',
    stc_badge: 'Saudi Local Service',

    reviews_tag: 'Client Reviews',
    reviews_title: 'What Our Clients Say',

    faq_tag: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    faq1_q: 'How do I receive my script after purchase?',
    faq1_a: 'After completing payment, you\'ll instantly receive an email with your download link and full installation instructions.',
    faq2_q: 'Are scripts compatible with ESX and QBCore?',
    faq2_a: 'Yes! All our scripts are compatible with popular frameworks like ESX, QBCore, and VRP. Contact us for any compatibility questions.',
    faq3_q: 'Is there a warranty on scripts?',
    faq3_a: 'Yes, we offer a 30-day warranty. If you encounter any technical issue, we\'ll fix it for free or offer a full refund.',
    faq4_q: 'How long does custom development take?',
    faq4_a: 'It varies by complexity. Simple scripts take 2-3 days; complex ones take 1-2 weeks.',
    faq5_q: 'Do you offer post-purchase support?',
    faq5_a: 'Absolutely! We provide free technical support for 6 months after purchase via Discord or email.',

    footer_desc: 'The best FiveM scripts provider in the Arab region. We develop professional scripts and custom solutions for your server.',
    footer_quick: 'Quick Links',
    footer_support: 'Support',
    footer_newsletter: 'Newsletter',
    footer_newsletter_desc: 'Get the latest script news and exclusive offers',
    footer_newsletter_ph: 'Your email',
    footer_sub: 'Subscribe',
    footer_copy: 'All rights reserved',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',

    auth_login_title: 'Welcome Back',
    auth_login_sub: 'Sign in to access your account',
    auth_register_title: 'Create Account',
    auth_register_sub: 'Join thousands of satisfied clients',
    tab_login: 'Login',
    tab_register: 'Register',
    form_password: 'Password',
    form_confirm_pass: 'Confirm Password',
    form_phone: 'Phone Number',
    remember_me: 'Remember me',
    forgot_pass: 'Forgot password?',
    agree_terms: 'I agree to Terms & Conditions',
    btn_login: 'Login',
    btn_register: 'Create Account',
    or_login_with: 'or',
    btn_google: 'Continue with Google',

    checkout_title: 'Complete Purchase',
    checkout_subtitle: 'Choose your preferred payment method',
    checkout_subtotal: 'Subtotal',
    checkout_tax: 'Tax 15%',
    checkout_total: 'Total',
    pay_paypal: 'Pay with PayPal',
    pay_stc: 'Pay with STC Pay',
    cancel: 'Cancel',

    modal_buy: 'Buy Now',
    modal_custom: 'Request Modification',
    modal_features: 'Features',
    toast_order_sent: 'Order sent successfully! We\'ll contact you soon',
    toast_login_ok: 'Logged in successfully',
    toast_register_ok: 'Account created successfully',
    toast_payment_processing: 'Processing payment...',
    toast_fill_all: 'Please fill all required fields',
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function t(key) {
  return translations[currentLang][key] || translations['ar'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    el.setAttribute(attr, t(key));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
