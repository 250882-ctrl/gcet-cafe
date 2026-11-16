/* =========================================================
   GCET Café — main script
   1. Text in English and Arabic (language switch)
   2. Small icons (bottom navigation, menu button)
   3. Open / closed pill (follows Oman time)
   4. Menu page (items, tabs)
   5. Navigation menu (open / close)
   6. Contact form check
   ========================================================= */

/* ---------- 1. Text in both languages ---------- */
const TEXT = {
  en: {
    "skip": "Skip to main content",
    "brand.name": "GCET CAFÉ",
    "brand.tag": "CAMPUS CAFÉ",
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
    "footer.info": "GCET Café · Campus · Sun – Thu 7:30 AM – 7:00 PM",
    "footer.copy": "© GCET Café 2026",

    /* Home */
    "title.home": "GCET Café · Home",
    "home.badge": "ON CAMPUS",
    "home.h1a": "Welcome to",
    "home.h1b": "GCET Café.",
    "home.sub": "Drinks and snacks for students and staff.",
    "home.viewMenu": "VIEW MENU",
    "home.findUs": "FIND US",
    "home.feature.eyebrow": "OUR FAVOURITE",
    "home.feature.t1": "Tea,",
    "home.feature.t2": "made fresh.",
    "home.feature.copy": "A hot cup for your break.",
    "home.fav.title": "Our favourites",
    "home.fav.link": "MENU",
    "fav.tea": "Tea",
    "fav.tea.d": "Hot spiced tea",
    "fav.coffee": "Coffee",
    "fav.coffee.d": "Served with dates",
    "fav.water": "Water",
    "fav.water.d": "Bottled & chilled",
    "fav.samosa": "Samosa",
    "fav.samosa.d": "Two crispy pieces",
    "home.visit": "VISIT US",
    "info.find": "Find us",
    "info.find.d": "GCET Canteen · Campus",
    "info.hours": "Opening hours",
    "info.hours.d1": "Sun – Thu · 7:30 AM – 7:00 PM",
    "info.hours.d2": "Fri & Sat: closed",
    "alt.tea": "A glass of hot spiced tea on a saucer",
    "alt.counter": "A staff member working at the café counter",

    /* Menu */
    "title.menu": "GCET Café · Menu",
    "menu.eyebrow": "GCET CAFÉ MENU",
    "menu.title": "Our menu",
    "menu.sub": "Drinks and snacks at simple prices.",
    "menu.tabs": "Jump to a menu section",
    "menu.tab.hot": "Hot",
    "menu.tab.cold": "Cold",
    "menu.tab.snacks": "Snacks",
    "menu.offer.label": "TODAY’S OFFER",
    "menu.offer.text": "Tea + Samosa — a hot tea and two crispy samosas",
    "menu.sec.hot": "HOT DRINKS",
    "menu.sec.cold": "COLD DRINKS",
    "menu.sec.snacks": "SNACKS",

    /* About */
    "title.about": "GCET Café · About",
    "about.eyebrow": "ABOUT US",
    "about.t1": "A café for students",
    "about.t2": "and staff.",
    "about.text": "GCET Café is a small café on campus where students and staff can take a short break between classes.",
    "about.hl1": "Drinks and snacks",
    "about.hl1.d": "Tea, coffee, water, juice and snacks.",
    "about.hl2": "Quick service",
    "about.hl2.d": "Easy to grab between classes.",
    "about.hl3": "Open to everyone",
    "about.hl3.d": "For all GCET students and staff.",
    "about.closing": "Come and visit us on campus.",
    "about.cta": "VIEW OUR MENU",
    "alt.seating": "Tables and chairs in the café seating area",
    "alt.ordering": "Students buying bottled water at the counter",
    "alt.preparing": "A staff member handing over bottled water",

    /* Contact */
    "title.contact": "GCET Café · Contact",
    "contact.eyebrow": "CONTACT",
    "contact.title": "Contact us",
    "contact.sub": "Send us your questions, complaints or suggestions.",
    "alt.campus": "A student walking along a GCET campus corridor",
    "contact.social": "SOCIAL MEDIA",
    "contact.ig": "Instagram",
    "contact.fb": "Facebook",
    "contact.wa": "WhatsApp",
    "contact.wa.d": "Quick questions",
    "contact.newtab": "(opens in a new tab)",
    "form.title": "Write to us",
    "form.sub": "We’d like to hear from you.",
    "form.emailLine": "Or email us:",
    "form.name": "YOUR NAME",
    "form.email": "YOUR EMAIL",
    "form.message": "MESSAGE",
    "form.name.ph": "Your name",
    "form.email.ph": "Your email",
    "form.message.ph": "Write your message",
    "form.submit": "SEND EMAIL",
    "form.err.summary": "Please fix the fields marked in red.",
    "form.err.name": "Please enter your name.",
    "form.err.email.empty": "Please enter your email.",
    "form.err.email.bad": "Please enter a valid email, for example name@gcet.edu.om",
    "form.err.message.empty": "Please write your message.",
    "form.err.message.short": "Your message is too short (at least 10 characters).",

    /* Message sent */
    "title.sent": "GCET Café · Message sent",
    "sent.title": "Message sent",
    "sent.copy": "Thank you. We will reply to your email soon.",
    "sent.copy.name": "Thank you, {name}. We will reply to your email soon.",
    "sent.btn": "BACK TO HOME",

    /* Open / closed */
    "status.open": "Open now · until 7:00 PM",
    "status.today": "Closed now · opens today 7:30 AM",
    "status.tomorrow": "Closed now · opens tomorrow 7:30 AM",
    "status.sundayNow": "Closed now · opens Sunday 7:30 AM",
    "status.sundayToday": "Closed today · opens Sunday 7:30 AM"
  },

  ar: {
    "skip": "انتقل إلى المحتوى الرئيسي",
    "brand.name": "كافيه GCET",
    "brand.tag": "كافيه الكلية",
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
    "footer.info": "كافيه GCET · الحرم الجامعي · الأحد – الخميس 7:30 ص – 7:00 م",
    "footer.copy": "© كافيه GCET 2026",

    "title.home": "كافيه GCET · الرئيسية",
    "home.badge": "داخل الكلية",
    "home.h1a": "أهلاً بك في",
    "home.h1b": "كافيه GCET.",
    "home.sub": "مشروبات ووجبات خفيفة للطلاب والموظفين.",
    "home.viewMenu": "عرض القائمة",
    "home.findUs": "موقعنا",
    "home.feature.eyebrow": "المفضّل لدينا",
    "home.feature.t1": "شاي،",
    "home.feature.t2": "يُحضَّر طازجاً.",
    "home.feature.copy": "كوب ساخن لاستراحتك.",
    "home.fav.title": "مفضّلاتنا",
    "home.fav.link": "القائمة",
    "fav.tea": "شاي",
    "fav.tea.d": "شاي ساخن بالتوابل",
    "fav.coffee": "قهوة",
    "fav.coffee.d": "تُقدَّم مع التمر",
    "fav.water": "ماء",
    "fav.water.d": "معبأ ومبرّد",
    "fav.samosa": "سمبوسة",
    "fav.samosa.d": "حبتان مقرمشتان",
    "home.visit": "زورونا",
    "info.find": "موقعنا",
    "info.find.d": "كانتين GCET · الحرم الجامعي",
    "info.hours": "ساعات العمل",
    "info.hours.d1": "الأحد – الخميس · 7:30 ص – 7:00 م",
    "info.hours.d2": "الجمعة والسبت: مغلق",
    "alt.tea": "كوب شاي ساخن بالتوابل على صحن",
    "alt.counter": "موظف يعمل عند كاونتر الكافيه",

    "title.menu": "كافيه GCET · القائمة",
    "menu.eyebrow": "قائمة كافيه GCET",
    "menu.title": "قائمتنا",
    "menu.sub": "مشروبات ووجبات خفيفة بأسعار بسيطة.",
    "menu.tabs": "انتقل إلى قسم من القائمة",
    "menu.tab.hot": "ساخن",
    "menu.tab.cold": "بارد",
    "menu.tab.snacks": "وجبات خفيفة",
    "menu.offer.label": "عرض اليوم",
    "menu.offer.text": "شاي + سمبوسة — شاي ساخن مع حبتي سمبوسة مقرمشة",
    "menu.sec.hot": "مشروبات ساخنة",
    "menu.sec.cold": "مشروبات باردة",
    "menu.sec.snacks": "وجبات خفيفة",

    "title.about": "كافيه GCET · من نحن",
    "about.eyebrow": "من نحن",
    "about.t1": "كافيه للطلاب",
    "about.t2": "والموظفين.",
    "about.text": "كافيه GCET مقهى صغير داخل الكلية، يأخذ فيه الطلاب والموظفون استراحة قصيرة بين المحاضرات.",
    "about.hl1": "مشروبات ووجبات خفيفة",
    "about.hl1.d": "شاي وقهوة وماء وعصير ووجبات خفيفة.",
    "about.hl2": "خدمة سريعة",
    "about.hl2.d": "سهل تأخذ طلبك بين المحاضرات.",
    "about.hl3": "مفتوح للجميع",
    "about.hl3.d": "لكل طلاب وموظفي GCET.",
    "about.closing": "تفضّل بزيارتنا في الكلية.",
    "about.cta": "عرض القائمة",
    "alt.seating": "طاولات وكراسي في جلسة الكافيه",
    "alt.ordering": "طلاب يشترون مياه معبأة من الكاونتر",
    "alt.preparing": "موظف يسلّم مياه معبأة",

    "title.contact": "كافيه GCET · تواصل",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "اتصل بنا",
    "contact.sub": "أرسل لنا أسئلتك أو شكاواك أو اقتراحاتك.",
    "alt.campus": "طالب يمشي في ممر داخل الكلية",
    "contact.social": "التواصل الاجتماعي",
    "contact.ig": "إنستغرام",
    "contact.fb": "فيسبوك",
    "contact.wa": "واتساب",
    "contact.wa.d": "للاستفسارات السريعة",
    "contact.newtab": "(يفتح في نافذة جديدة)",
    "form.title": "اكتب لنا",
    "form.sub": "يسعدنا سماع رأيك.",
    "form.emailLine": "أو راسلنا على:",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.message": "الرسالة",
    "form.name.ph": "اسمك",
    "form.email.ph": "بريدك الإلكتروني",
    "form.message.ph": "اكتب رسالتك",
    "form.submit": "إرسال",
    "form.err.summary": "يرجى تصحيح الحقول المحددة باللون الأحمر.",
    "form.err.name": "يرجى كتابة اسمك.",
    "form.err.email.empty": "يرجى كتابة بريدك الإلكتروني.",
    "form.err.email.bad": "يرجى كتابة بريد صحيح، مثل name@gcet.edu.om",
    "form.err.message.empty": "يرجى كتابة رسالتك.",
    "form.err.message.short": "رسالتك قصيرة جداً (10 أحرف على الأقل).",

    "title.sent": "كافيه GCET · تم الإرسال",
    "sent.title": "تم إرسال الرسالة",
    "sent.copy": "شكراً لك. سنرد على بريدك قريباً.",
    "sent.copy.name": "شكراً لك يا {name}. سنرد على بريدك قريباً.",
    "sent.btn": "العودة للرئيسية",

    "status.open": "مفتوح الآن · حتى الساعة 7:00 م",
    "status.today": "مغلق الآن · نفتح اليوم 7:30 ص",
    "status.tomorrow": "مغلق الآن · نفتح غداً 7:30 ص",
    "status.sundayNow": "مغلق الآن · نفتح الأحد 7:30 ص",
    "status.sundayToday": "مغلق اليوم · نفتح الأحد 7:30 ص"
  }
};

/* Menu items (prices in OMR — to be confirmed by the café) */
const MENU_ITEMS = [
  { section: "hot", img: "tea.png", price: 0.1,
    en: { name: "Tea", desc: "Classic spiced tea" },
    ar: { name: "شاي", desc: "شاي بالتوابل الكلاسيكي" } },
  { section: "hot", img: "coffee.png", price: 0.2,
    en: { name: "Coffee", desc: "Hot coffee, served with dates" },
    ar: { name: "قهوة", desc: "قهوة ساخنة تُقدَّم مع التمر" } },
  { section: "cold", img: "water.png", price: 0.1,
    en: { name: "Bottled water", desc: "Chilled bottled water" },
    ar: { name: "مياه معبأة", desc: "مياه معبأة مبرّدة" } },
  { section: "cold", img: "soft-drink.png", price: 0.25,
    en: { name: "Soft drink", desc: "Chilled can, assorted flavours" },
    ar: { name: "مشروب غازي", desc: "علبة باردة بنكهات متنوعة" } },
  { section: "cold", img: "juice.png", price: 0.3,
    en: { name: "Fresh juice", desc: "Orange juice, served cold" },
    ar: { name: "عصير طازج", desc: "عصير برتقال بارد" } },
  { section: "snacks", img: "samosa.png", price: 0.2,
    en: { name: "Samosa", desc: "Two crispy pieces" },
    ar: { name: "سمبوسة", desc: "حبتان مقرمشتان" } },
  { section: "snacks", img: "croissant.png", price: 0.4,
    en: { name: "Butter croissant", desc: "Freshly baked" },
    ar: { name: "كرواسون بالزبدة", desc: "مخبوز طازجاً" } },
  { section: "snacks", img: "chips.png", price: 0.15,
    en: { name: "Potato chips", desc: "Crunchy and lightly salted" },
    ar: { name: "رقائق البطاطس", desc: "مقرمشة ومملحة قليلاً" } },
  { section: "snacks", img: "cake.png", price: 0.6,
    en: { name: "Chocolate cake", desc: "A slice of chocolate cake" },
    ar: { name: "كيكة الشوكولاتة", desc: "قطعة كيك شوكولاتة" } }
];

/* ---------- 2. Small icons (SVG) ---------- */
const ICON_PATHS = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  menu: '<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
  about: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor"/>',
  contact: '<path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>',
  burger: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>'
};

function drawIcons() {
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (ICON_PATHS[el.dataset.icon] || "") + "</svg>";
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
  // Attributes, e.g. data-i18n-attr="aria-label:nav.open;placeholder:form.name.ph"
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

/* ---------- 3. Open / closed pill (Oman time, UTC+4) ---------- */
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
  const pill = document.getElementById("status-pill");
  if (!pill) return;
  const status = cafeStatus();
  pill.classList.toggle("is-closed", !status.open);
  pill.querySelector(".status-text").textContent = t(status.key);
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
          '<img src="images/' + item.img + '" alt="" width="68" height="68" loading="lazy">' +
          '<div class="text"><h3></h3><p></p></div>' +
          '<span class="price"></span>';
        li.querySelector("h3").textContent = text.name;
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
      tabs.forEach(function (other) {
        other.setAttribute("aria-pressed", other === tab ? "true" : "false");
      });
      const target = document.getElementById(tab.dataset.target);
      if (target) {
        target.scrollIntoView({ block: "start" });
        target.querySelector(".eyebrow").focus({ preventScroll: true });
      }
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

    // No server yet: remember the first name for the confirmation page, then go there
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
  const copy = document.getElementById("thanks-copy");
  if (!copy) return;
  let name = "";
  try {
    name = sessionStorage.getItem("gcet-name") || "";
  } catch (e) {
    name = "";
  }
  copy.textContent = name ? t("sent.copy.name").replace("{name}", name) : t("sent.copy");
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", function () {
  drawIcons();
  setupLanguageButton();
  setupNavMenu();
  setupTabs();
  setupForm();
  applyLanguage();
  setInterval(updateStatus, 60 * 1000); // refresh the open / closed pill every minute
});
