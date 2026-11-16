/* =========================================================
   GCET Café — main script
   1. Text in English and Arabic (language switch)
   2. Icons
   3. Open / closed strip (follows Oman time)
   4. Menu page (items, tabs)
   5. Navigation menu (open / close)
   6. Contact form check
   ========================================================= */

/* ---------- 1. Text in both languages ---------- */
const TEXT = {
  en: {
    "skip": "Skip to main content",
    "brand": "GCET Café",
    "lang.switch": "عربي",
    "lang.label": "Switch to Arabic",
    "nav.open": "Open navigation menu",
    "nav.close": "Close navigation menu",
    "nav.main": "Main navigation",
    "nav.title": "EXPLORE",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.home.sub": "Main page",
    "nav.menu.sub": "Drinks and snacks",
    "nav.about.sub": "About the café",
    "nav.contact.sub": "Get in touch",
    "currency": "OMR",

    /* Home */
    "title.home": "GCET Café · Home",
    "home.badge": "ON CAMPUS",
    "home.h1a": "Welcome to",
    "home.h1b": "GCET Café.",
    "home.sub": "Drinks and snacks for students and staff.",
    "home.feature.eyebrow": "OUR FAVOURITE",
    "home.feature.t1": "Tea,",
    "home.feature.t2": "made fresh.",
    "home.feature.copy": "A hot cup for your break.",
    "home.feature.btn": "VIEW MENU",
    "home.fav.title": "Our favourites",
    "home.fav.link": "MENU →",
    "home.fav.tea": "Tea",
    "home.fav.tea.d": "Hot spiced tea",
    "home.fav.water": "Water",
    "home.fav.water.d": "Bottled & chilled",
    "home.note.title": "Need a snack?",
    "home.note.copy": "Ask at the counter about what’s available today.",
    "home.visit": "Visit us",
    "home.find": "Find us",
    "home.find.d": "GCET Canteen · Campus",
    "home.hours": "Opening hours",
    "home.hours.d": "Sun – Thu · 7:30 AM – 7:00 PM / Fri & Sat: closed",

    /* Menu */
    "title.menu": "GCET Café · Menu",
    "menu.eyebrow": "GCET CAFÉ MENU",
    "menu.title": "Our menu",
    "menu.sub": "Drinks and snacks at simple prices.",
    "menu.tabs": "Menu sections",
    "menu.tab.all": "All",
    "menu.tab.hot": "Hot",
    "menu.tab.cold": "Cold",
    "menu.tab.snacks": "Snacks",
    "menu.offer.label": "TODAY’S OFFER",
    "menu.offer.title": "Tea + Samosa",
    "menu.offer.copy": "A hot tea and two crispy samosas.",
    "menu.offer.price": "0.250 OMR",
    "menu.sec.hot": "Hot drinks",
    "menu.sec.cold": "Cold drinks",
    "menu.sec.snacks": "Snacks",
    "menu.note": "Prices may change. Ask at the counter for today’s items.",

    /* About */
    "title.about": "GCET Café · About",
    "about.eyebrow": "ABOUT US",
    "about.title": "A café for students and staff.",
    "about.quote": "A place to take a short break.",
    "about.attr": "GCET CAFÉ • CAMPUS LIFE",
    "about.h2": "About the café",
    "about.text": "GCET Café is a small café on campus where students and staff can get a drink or a snack between classes.",
    "about.hl1": "Drinks and snacks",
    "about.hl1.d": "Tea, coffee, water, juice and snacks.",
    "about.hl2": "Quick service",
    "about.hl2.d": "Easy to grab between classes.",
    "about.hl3": "Open to everyone",
    "about.hl3.d": "For all GCET students and staff.",
    "about.closing": "Come and visit us on campus.",
    "about.cta": "VIEW OUR MENU",

    /* Contact */
    "title.contact": "GCET Café · Contact",
    "contact.eyebrow": "CONTACT",
    "contact.title": "Contact us",
    "contact.sub": "Send us your questions, complaints or suggestions.",
    "contact.email.eyebrow": "EMAIL THE CAFÉ",
    "contact.email.prompt": "Send us an email",
    "contact.follow": "Follow us",
    "contact.ig": "Instagram",
    "contact.fb": "Facebook",
    "contact.wa": "WhatsApp",
    "contact.wa.d": "Quick questions",
    "contact.newtab": "(opens in a new tab)",
    "form.title": "Write to us",
    "form.sub": "We’d like to hear from you.",
    "form.required": "All fields are required.",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "Message",
    "form.submit": "SEND EMAIL",
    "form.err.summary": "Please fix the fields marked in red.",
    "form.err.name": "Please enter your name.",
    "form.err.email.empty": "Please enter your email.",
    "form.err.email.bad": "Please enter a valid email, for example name@gcet.edu.om",
    "form.err.message.empty": "Please write your message.",
    "form.err.message.short": "Your message is too short (at least 10 characters).",

    /* Message sent */
    "title.sent": "GCET Café · Message sent",
    "sent.title": "Thank you!",
    "sent.title.name": "Thank you, {name}!",
    "sent.copy": "We received your message and will reply soon.",
    "sent.btn": "BACK TO HOME",

    /* Footer */
    "footer.place": "GCET Canteen · Global College of Engineering and Technology, Muscat",
    "footer.copy": "© 2026 GCET Café · Student project",

    /* Status strip */
    "status.open": "Open now · until 7:00 PM",
    "status.today": "Closed now · opens today 7:30 AM",
    "status.tomorrow": "Closed now · opens tomorrow 7:30 AM",
    "status.sundayNow": "Closed now · opens Sunday 7:30 AM",
    "status.sundayToday": "Closed today · opens Sunday 7:30 AM"
  },

  ar: {
    "skip": "انتقل إلى المحتوى الرئيسي",
    "brand": "كافيه GCET",
    "lang.switch": "EN",
    "lang.label": "التبديل إلى الإنجليزية",
    "nav.open": "فتح قائمة التنقل",
    "nav.close": "إغلاق قائمة التنقل",
    "nav.main": "التنقل الرئيسي",
    "nav.title": "تصفّح",
    "nav.home": "الرئيسية",
    "nav.menu": "القائمة",
    "nav.about": "من نحن",
    "nav.contact": "تواصل",
    "nav.home.sub": "الصفحة الرئيسية",
    "nav.menu.sub": "مشروبات ووجبات خفيفة",
    "nav.about.sub": "عن الكافيه",
    "nav.contact.sub": "تواصل معنا",
    "currency": "ر.ع.",

    "title.home": "كافيه GCET · الرئيسية",
    "home.badge": "داخل الكلية",
    "home.h1a": "أهلاً بك في",
    "home.h1b": "كافيه GCET.",
    "home.sub": "مشروبات ووجبات خفيفة للطلاب والموظفين.",
    "home.feature.eyebrow": "المفضّل لدينا",
    "home.feature.t1": "شاي،",
    "home.feature.t2": "يُحضَّر طازجاً.",
    "home.feature.copy": "كوب ساخن لاستراحتك.",
    "home.feature.btn": "عرض القائمة",
    "home.fav.title": "مفضّلاتنا",
    "home.fav.link": "القائمة ←",
    "home.fav.tea": "شاي",
    "home.fav.tea.d": "شاي ساخن بالتوابل",
    "home.fav.water": "ماء",
    "home.fav.water.d": "معبأ ومبرّد",
    "home.note.title": "تحتاج وجبة خفيفة؟",
    "home.note.copy": "اسأل عند الكاونتر عمّا هو متوفر اليوم.",
    "home.visit": "زورونا",
    "home.find": "موقعنا",
    "home.find.d": "كانتين GCET · الحرم الجامعي",
    "home.hours": "ساعات العمل",
    "home.hours.d": "الأحد – الخميس · 7:30 ص – 7:00 م / الجمعة والسبت: مغلق",

    "title.menu": "كافيه GCET · القائمة",
    "menu.eyebrow": "قائمة كافيه GCET",
    "menu.title": "قائمتنا",
    "menu.sub": "مشروبات ووجبات خفيفة بأسعار بسيطة.",
    "menu.tabs": "أقسام القائمة",
    "menu.tab.all": "الكل",
    "menu.tab.hot": "ساخن",
    "menu.tab.cold": "بارد",
    "menu.tab.snacks": "وجبات خفيفة",
    "menu.offer.label": "عرض اليوم",
    "menu.offer.title": "شاي + سمبوسة",
    "menu.offer.copy": "شاي ساخن مع حبتي سمبوسة مقرمشة.",
    "menu.offer.price": "0.250 ر.ع.",
    "menu.sec.hot": "مشروبات ساخنة",
    "menu.sec.cold": "مشروبات باردة",
    "menu.sec.snacks": "وجبات خفيفة",
    "menu.note": "قد تتغير الأسعار. اسأل عند الكاونتر عن أصناف اليوم.",

    "title.about": "كافيه GCET · من نحن",
    "about.eyebrow": "من نحن",
    "about.title": "كافيه للطلاب والموظفين.",
    "about.quote": "مكان لأخذ استراحة قصيرة.",
    "about.attr": "كافيه GCET • حياة الكلية",
    "about.h2": "عن الكافيه",
    "about.text": "كافيه GCET مقهى صغير داخل الكلية، يحصل فيه الطلاب والموظفون على مشروب أو وجبة خفيفة بين المحاضرات.",
    "about.hl1": "مشروبات ووجبات خفيفة",
    "about.hl1.d": "شاي وقهوة وماء وعصير ووجبات خفيفة.",
    "about.hl2": "خدمة سريعة",
    "about.hl2.d": "سهل تأخذ طلبك بين المحاضرات.",
    "about.hl3": "مفتوح للجميع",
    "about.hl3.d": "لكل طلاب وموظفي GCET.",
    "about.closing": "تفضّل بزيارتنا في الكلية.",
    "about.cta": "عرض القائمة",

    "title.contact": "كافيه GCET · تواصل",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "اتصل بنا",
    "contact.sub": "أرسل لنا أسئلتك أو شكاواك أو اقتراحاتك.",
    "contact.email.eyebrow": "راسل الكافيه",
    "contact.email.prompt": "أرسل لنا رسالة",
    "contact.follow": "تابعنا",
    "contact.ig": "إنستغرام",
    "contact.fb": "فيسبوك",
    "contact.wa": "واتساب",
    "contact.wa.d": "للاستفسارات السريعة",
    "contact.newtab": "(يفتح في نافذة جديدة)",
    "form.title": "اكتب لنا",
    "form.sub": "يسعدنا سماع رأيك.",
    "form.required": "جميع الحقول مطلوبة.",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.message": "الرسالة",
    "form.submit": "إرسال",
    "form.err.summary": "يرجى تصحيح الحقول المحددة باللون الأحمر.",
    "form.err.name": "يرجى كتابة اسمك.",
    "form.err.email.empty": "يرجى كتابة بريدك الإلكتروني.",
    "form.err.email.bad": "يرجى كتابة بريد صحيح، مثل name@gcet.edu.om",
    "form.err.message.empty": "يرجى كتابة رسالتك.",
    "form.err.message.short": "رسالتك قصيرة جداً (10 أحرف على الأقل).",

    "title.sent": "كافيه GCET · تم الإرسال",
    "sent.title": "شكراً لك!",
    "sent.title.name": "شكراً لك يا {name}!",
    "sent.copy": "وصلتنا رسالتك وسنرد عليك قريباً.",
    "sent.btn": "العودة للرئيسية",

    "footer.place": "كانتين GCET · الكلية العالمية للهندسة والتكنولوجيا، مسقط",
    "footer.copy": "© 2026 كافيه GCET · مشروع طالب",

    "status.open": "مفتوح الآن · حتى الساعة 7:00 م",
    "status.today": "مغلق الآن · نفتح اليوم 7:30 ص",
    "status.tomorrow": "مغلق الآن · نفتح غداً 7:30 ص",
    "status.sundayNow": "مغلق الآن · نفتح الأحد 7:30 ص",
    "status.sundayToday": "مغلق اليوم · نفتح الأحد 7:30 ص"
  }
};

/* Menu items (prices in OMR — to be confirmed by the café) */
const MENU_ITEMS = [
  { section: "hot", icon: "cup", price: 0.1, badge: { en: "BEST SELLER", ar: "الأكثر طلباً" },
    en: { name: "Tea", desc: "Classic spiced tea" },
    ar: { name: "شاي", desc: "شاي بالتوابل الكلاسيكي" } },
  { section: "hot", icon: "coffee", price: 0.2,
    en: { name: "Coffee", desc: "Hot coffee, served with dates" },
    ar: { name: "قهوة", desc: "قهوة ساخنة تُقدَّم مع التمر" } },
  { section: "cold", icon: "bottle", price: 0.1,
    en: { name: "Bottled water", desc: "Chilled bottled water" },
    ar: { name: "مياه معبأة", desc: "مياه معبأة مبرّدة" } },
  { section: "cold", icon: "can", price: 0.25,
    en: { name: "Soft drink", desc: "Chilled can, assorted flavours" },
    ar: { name: "مشروب غازي", desc: "علبة باردة بنكهات متنوعة" } },
  { section: "cold", icon: "juice", price: 0.3,
    en: { name: "Fresh juice", desc: "Orange juice, served cold" },
    ar: { name: "عصير طازج", desc: "عصير برتقال بارد" } },
  { section: "snacks", icon: "samosa", price: 0.2, badge: { en: "POPULAR", ar: "مطلوب" },
    en: { name: "Samosa", desc: "Two crispy pieces" },
    ar: { name: "سمبوسة", desc: "حبتان مقرمشتان" } },
  { section: "snacks", icon: "croissant", price: 0.4, badge: { en: "FRESH", ar: "طازج" },
    en: { name: "Butter croissant", desc: "Freshly baked" },
    ar: { name: "كرواسون بالزبدة", desc: "مخبوز طازجاً" } },
  { section: "snacks", icon: "chips", price: 0.15,
    en: { name: "Potato chips", desc: "Crunchy and lightly salted" },
    ar: { name: "رقائق البطاطس", desc: "مقرمشة ومملحة قليلاً" } },
  { section: "snacks", icon: "cake", price: 0.6,
    en: { name: "Chocolate cake", desc: "A slice of chocolate cake" },
    ar: { name: "كيكة الشوكولاتة", desc: "قطعة كيك شوكولاتة" } }
];

/* ---------- 2. Icons (simple line icons, drawn in SVG) ---------- */
const ICON_PATHS = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  menu: '<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
  about: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor"/>',
  contact: '<path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>',
  burger: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  cup: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c0 1.5 1 1.5 1 3M11.5 3c0 1.5 1 1.5 1 3"/>',
  coffee: '<path d="M6 8h10l-1 11H7z"/><path d="M5 8h12"/><path d="M8 4h6l1 4H7z"/>',
  bottle: '<path d="M10 3h4v3l2 3v12H8V9l2-3z"/><path d="M8 13h8"/>',
  can: '<rect x="7" y="4" width="10" height="16" rx="2"/><path d="M7 8h10M7 16h10"/>',
  juice: '<path d="M6 7h12l-1.5 14h-9z"/><path d="M14 7l2-4h3"/><path d="M7 12h10"/>',
  samosa: '<path d="M12 4l9 15H3z"/><path d="M8 14h8"/>',
  croissant: '<path d="M3 15c2-6 5-9 9-9s7 3 9 9c-2 1-4 0-5-1-1 2-3 3-4 3s-3-1-4-3c-1 1-3 2-5 1z"/><path d="M12 6v11"/>',
  chips: '<path d="M6 3h12l-1 18H7z"/><path d="M9 8l2 3M13 9l2 3M9 14l2 2"/>',
  cake: '<path d="M4 11h16v9H4z"/><path d="M4 15c2 1 4 1 6 0s4-1 6 0 3 1 4 0"/><path d="M12 7v4"/><path d="M12 4c.8.8.8 2 0 3-.8-1-.8-2.2 0-3z"/>',
  pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  arrow: '<path d="M9 5l7 7-7 7"/>',
  mail: '<path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.5" cy="7.5" r="0.6" fill="currentColor"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  whatsapp: '<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"/>',
  bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><path d="M15 14.5c3 0 6 2 6 5.5"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor"/>'
};

function iconSvg(name) {
  const paths = ICON_PATHS[name] || "";
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
         paths + "</svg>";
}

function drawIcons(root) {
  root.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML = iconSvg(el.dataset.icon);
  });
}

/* ---------- Saved language (works even if storage is blocked) ---------- */
function getSavedLang() {
  try {
    return localStorage.getItem("gcet-lang") === "ar" ? "ar" : "en";
  } catch (e) {
    return "en";
  }
}
function saveLang(lang) {
  try {
    localStorage.setItem("gcet-lang", lang);
  } catch (e) {
    /* ignore */
  }
}

let currentLang = getSavedLang();

// A link like index.html?lang=ar opens the site straight in Arabic
const urlLang = new URLSearchParams(window.location.search).get("lang");
if (urlLang === "ar" || urlLang === "en") {
  currentLang = urlLang;
  saveLang(urlLang);
}

function t(key) {
  return (TEXT[currentLang] && TEXT[currentLang][key]) || TEXT.en[key] || key;
}

function formatPrice(value) {
  return value.toFixed(3) + " " + t("currency");
}

function applyLanguage() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";

  // Plain text
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });
  // Attributes, e.g. data-i18n-attr="aria-label:nav.open"
  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    el.dataset.i18nAttr.split(";").forEach(function (pair) {
      const parts = pair.split(":");
      el.setAttribute(parts[0].trim(), t(parts[1].trim()));
    });
  });
  // Prices written in the page, e.g. data-price="0.1"
  document.querySelectorAll("[data-price]").forEach(function (el) {
    el.textContent = formatPrice(parseFloat(el.dataset.price));
  });
  // Page title
  const pageTitle = document.body.dataset.title;
  if (pageTitle) document.title = t(pageTitle);

  updateStatus();
  renderMenu();
  showThanksName();
}

function setupLanguageButton() {
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentLang = currentLang === "en" ? "ar" : "en";
      saveLang(currentLang);
      applyLanguage();
      // Re-check form errors in the new language
      const form = document.getElementById("contact-form");
      if (form && form.dataset.checked === "yes") validateForm(form, false);
    });
  });
}

/* ---------- 3. Open / closed strip (Oman time, UTC+4) ---------- */
function omanNow() {
  // Read the day and time in Muscat, whatever the visitor's clock is set to
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Muscat",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const get = function (type) {
    return parts.find(function (p) { return p.type === type; }).value;
  };
  const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: days[get("weekday")],
    minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10)
  };
}

function cafeStatus() {
  const now = omanNow();
  const OPEN = 7 * 60 + 30;   // 7:30
  const CLOSE = 19 * 60;      // 19:00
  const workDay = now.day >= 0 && now.day <= 4; // Sun–Thu

  if (!workDay) return { open: false, key: "status.sundayToday" };
  if (now.minutes >= OPEN && now.minutes < CLOSE) return { open: true, key: "status.open" };
  if (now.minutes < OPEN) return { open: false, key: "status.today" };
  if (now.day === 4) return { open: false, key: "status.sundayNow" }; // Thursday evening
  return { open: false, key: "status.tomorrow" };
}

function updateStatus() {
  const strip = document.getElementById("status-strip");
  if (!strip) return;
  const status = cafeStatus();
  strip.classList.toggle("is-closed", !status.open);
  strip.querySelector(".status-text").textContent = t(status.key);
}

/* ---------- 4. Menu page ---------- */
function renderMenu() {
  ["hot", "cold", "snacks"].forEach(function (section) {
    const list = document.getElementById("list-" + section);
    if (!list) return;
    list.innerHTML = "";
    MENU_ITEMS.filter(function (item) { return item.section === section; })
      .forEach(function (item) {
        const text = item[currentLang];
        const li = document.createElement("li");
        li.className = "card menu-item";
        li.innerHTML =
          '<span class="product-icon">' + iconSvg(item.icon) + "</span>" +
          "<div>" +
            "<h3></h3>" +
            "<p></p>" +
          "</div>" +
          '<span class="price"></span>';
        const h3 = li.querySelector("h3");
        h3.textContent = text.name;
        if (item.badge) {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.textContent = item.badge[currentLang];
          h3.appendChild(badge);
        }
        li.querySelector("p").textContent = text.desc;
        li.querySelector(".price").textContent = formatPrice(item.price);
        list.appendChild(li);
      });
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = tab.dataset.target;
      tabs.forEach(function (other) {
        other.setAttribute("aria-pressed", other === tab ? "true" : "false");
      });
      document.querySelectorAll(".menu-section").forEach(function (sec) {
        sec.hidden = target !== "all" && sec.id !== target;
      });
    });
  });
}

/* ---------- 5. Navigation menu (mobile) ---------- */
function setupNavMenu() {
  const openBtn = document.querySelector(".menu-btn");
  const overlay = document.getElementById("nav-overlay");
  if (!openBtn || !overlay) return;
  const closeBtn = overlay.querySelector(".close-btn");
  const panel = overlay.querySelector(".nav-panel");

  function openMenu() {
    overlay.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }
  function closeMenu() {
    overlay.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", function (e) {
    if (!panel.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeMenu();
  });
}

/* ---------- 6. Contact form ---------- */
function setError(input, key) {
  const msg = document.getElementById(input.id + "-error");
  if (key) {
    input.setAttribute("aria-invalid", "true");
    msg.textContent = t(key);
  } else {
    input.removeAttribute("aria-invalid");
    msg.textContent = "";
  }
}

function validateForm(form, moveFocus) {
  const name = form.elements["name"];
  const email = form.elements["email"];
  const message = form.elements["message"];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let firstBad = null;

  if (name.value.trim().length < 2) {
    setError(name, "form.err.name");
    firstBad = firstBad || name;
  } else setError(name, null);

  if (email.value.trim() === "") {
    setError(email, "form.err.email.empty");
    firstBad = firstBad || email;
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, "form.err.email.bad");
    firstBad = firstBad || email;
  } else setError(email, null);

  if (message.value.trim() === "") {
    setError(message, "form.err.message.empty");
    firstBad = firstBad || message;
  } else if (message.value.trim().length < 10) {
    setError(message, "form.err.message.short");
    firstBad = firstBad || message;
  } else setError(message, null);

  const summary = document.getElementById("form-error-summary");
  summary.classList.toggle("is-visible", firstBad !== null);
  if (firstBad && moveFocus) firstBad.focus();
  return firstBad === null;
}

function setupForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.dataset.checked = "yes";
    if (!validateForm(form, true)) return;

    // No server yet: remember the first name for the thank-you page, then go there
    try {
      sessionStorage.setItem("gcet-name", form.elements["name"].value.trim().split(" ")[0]);
    } catch (err) {
      /* ignore */
    }
    window.location.href = "thank-you.html";
  });

  // After the first try, re-check each field as the user fixes it
  form.querySelectorAll("input, textarea").forEach(function (field) {
    field.addEventListener("input", function () {
      if (form.dataset.checked === "yes") validateForm(form, false);
    });
  });
}

function showThanksName() {
  const heading = document.getElementById("thanks-title");
  if (!heading) return;
  let name = "";
  try {
    name = sessionStorage.getItem("gcet-name") || "";
  } catch (e) {
    name = "";
  }
  heading.textContent = name ? t("sent.title.name").replace("{name}", name) : t("sent.title");
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", function () {
  drawIcons(document);
  setupLanguageButton();
  setupNavMenu();
  setupTabs();
  setupForm();
  applyLanguage();
  setInterval(updateStatus, 60 * 1000); // refresh the strip every minute
});
