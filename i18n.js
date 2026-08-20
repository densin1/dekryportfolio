/**
 * DK PORTFOLIO — I18N LAYER
 * Відповідає за: статичні (не з content.js) тексти сторінки,
 * визначення початкової мови, побудову перемикача мов і
 * координацію з script.js (яке рендерить контент з content.js).
 */

const DK_LANGS = [
  { code: 'uk', label: 'UA', name: 'Українська' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' }
];

const DK_UI_STATIC = {
  uk: {
    pageTitle: 'Dekry (DK) | Відеомонтаж & Графічний дизайн',
    navAriaLabel: 'Основна навігація',
    homeAriaLabel: 'Головна',
    menuAriaLabel: 'Меню',
    headerCta: 'Замовити проект',
    heroTitleLine1: 'Відеомонтаж',
    heroTitleLine2: 'Графічний дизайн',
    heroCtaPrimary: 'Дивитись роботи',
    heroCtaSecondary: "Зв'язатися в Telegram",
    videoSectionTitle: 'Відеомонтаж',
    videoSectionSubtitle: 'Reels, YouTube — повний цикл продакшн',
    designSectionTitle: 'Графічний дизайн',
    designSectionSubtitle: 'Обкладинки, банери, креативи для реклами, брендбуки',
    skillsSectionTitle: 'Навички & Софт',
    skillsSectionSubtitle: 'Інструменти, якими володію на професійному рівні',
    testimonialsSectionTitle: 'Відгуки клієнтів',
    testimonialsSectionSubtitle: 'Що кажуть люди, з якими я працював',
    testimPrevAria: 'Попередній відгук',
    testimNextAria: 'Наступний відгук',
    pricingSectionTitle: 'Вартість',
    pricingSectionSubtitle: 'Прозорі пакети для твоїх задач. Фінальна ціна — після брифінгу.',
    pricingDisclaimer: 'Фінальна вартість залежить від обсягу, термінів і складності проєкту.',
    footerTitle: 'Готовий обговорити твій проект?',
    footerDesc: "Пиши мені в Telegram — відповім протягом кількох годин. Прямий зв'язок без посередників.",
    footerCtaText: 'Написати в Telegram',
    footerBottom: 'Зроблено самостійно | dekry',
    modalCloseAria: 'Закрити',
    modalCtaText: 'Обговорити схожий проєкт в Telegram',
    langSwitchAria: 'Обрати мову'
  },
  en: {
    pageTitle: 'Dekry (DK) | Video Editing & Graphic Design',
    navAriaLabel: 'Main navigation',
    homeAriaLabel: 'Home',
    menuAriaLabel: 'Menu',
    headerCta: 'Start a project',
    heroTitleLine1: 'Video Editing',
    heroTitleLine2: 'Graphic Design',
    heroCtaPrimary: 'View work',
    heroCtaSecondary: 'Message on Telegram',
    videoSectionTitle: 'Video Editing',
    videoSectionSubtitle: 'Reels, YouTube — full production cycle',
    designSectionTitle: 'Graphic Design',
    designSectionSubtitle: 'Covers, banners, ad creatives, brand books',
    skillsSectionTitle: 'Skills & Software',
    skillsSectionSubtitle: 'Tools I use at a professional level',
    testimonialsSectionTitle: 'Client Testimonials',
    testimonialsSectionSubtitle: "What people I've worked with say",
    testimPrevAria: 'Previous testimonial',
    testimNextAria: 'Next testimonial',
    pricingSectionTitle: 'Pricing',
    pricingSectionSubtitle: 'Transparent packages for your needs. Final price after a brief.',
    pricingDisclaimer: 'Final price depends on scope, timeline, and project complexity.',
    footerTitle: 'Ready to discuss your project?',
    footerDesc: "Message me on Telegram — I'll reply within a few hours. Direct contact, no middlemen.",
    footerCtaText: 'Message on Telegram',
    footerBottom: 'Made independently | dekry',
    modalCloseAria: 'Close',
    modalCtaText: 'Discuss a similar project on Telegram',
    langSwitchAria: 'Choose language'
  },
  ru: {
    pageTitle: 'Dekry (DK) | Видеомонтаж & Графический дизайн',
    navAriaLabel: 'Основная навигация',
    homeAriaLabel: 'Главная',
    menuAriaLabel: 'Меню',
    headerCta: 'Заказать проект',
    heroTitleLine1: 'Видеомонтаж',
    heroTitleLine2: 'Графический дизайн',
    heroCtaPrimary: 'Смотреть работы',
    heroCtaSecondary: 'Написать в Telegram',
    videoSectionTitle: 'Видеомонтаж',
    videoSectionSubtitle: 'Reels, YouTube — полный цикл продакшена',
    designSectionTitle: 'Графический дизайн',
    designSectionSubtitle: 'Обложки, баннеры, рекламные креативы, брендбуки',
    skillsSectionTitle: 'Навыки & Софт',
    skillsSectionSubtitle: 'Инструменты, которыми владею на профессиональном уровне',
    testimonialsSectionTitle: 'Отзывы клиентов',
    testimonialsSectionSubtitle: 'Что говорят люди, с которыми я работал',
    testimPrevAria: 'Предыдущий отзыв',
    testimNextAria: 'Следующий отзыв',
    pricingSectionTitle: 'Стоимость',
    pricingSectionSubtitle: 'Прозрачные пакеты под твои задачи. Финальная цена — после брифинга.',
    pricingDisclaimer: 'Финальная стоимость зависит от объёма, сроков и сложности проекта.',
    footerTitle: 'Готов обсудить твой проект?',
    footerDesc: 'Пиши мне в Telegram — отвечу в течение нескольких часов. Прямая связь без посредников.',
    footerCtaText: 'Написать в Telegram',
    footerBottom: 'Сделано самостоятельно | dekry',
    modalCloseAria: 'Закрыть',
    modalCtaText: 'Обсудить похожий проект в Telegram',
    langSwitchAria: 'Выбрать язык'
  }
};

window.DK_LANG = 'uk';

function dkDetectInitialLang() {
  try {
    const saved = localStorage.getItem('dk_lang');
    if (saved && DK_LANGS.some(l => l.code === saved)) return saved;
  } catch (e) { /* localStorage unavailable */ }

  const nav = ((navigator.language || navigator.userLanguage || '') + '').toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('uk')) return 'uk';
  if (nav.startsWith('en')) return 'en';
  return 'uk';
}

function dkApplyStaticTranslations(lang) {
  const dict = DK_UI_STATIC[lang];
  document.title = dict.pageTitle;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
}

function dkUpdateSwitcherUI(lang) {
  const current = document.getElementById('langSwitchCurrent');
  if (current) current.textContent = DK_LANGS.find(l => l.code === lang).label;

  document.querySelectorAll('.lang-switch__option').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  const btn = document.getElementById('langSwitchBtn');
  if (btn) btn.setAttribute('aria-label', DK_UI_STATIC[lang].langSwitchAria);
}

function dkSetLanguage(lang) {
  if (!DK_LANGS.some(l => l.code === lang)) return;
  window.DK_LANG = lang;
  try { localStorage.setItem('dk_lang', lang); } catch (e) { /* ignore */ }

  dkApplyStaticTranslations(lang);
  dkUpdateSwitcherUI(lang);

  if (typeof window.dkRenderContent === 'function') window.dkRenderContent(lang);

  const menu = document.getElementById('langSwitchMenu');
  const btn = document.getElementById('langSwitchBtn');
  if (menu) menu.hidden = true;
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function dkBuildLangSwitcher() {
  const slot = document.getElementById('langSwitch');
  if (!slot) return;

  slot.innerHTML = `
    <button class="lang-switch__btn" id="langSwitchBtn" type="button" aria-haspopup="true" aria-expanded="false">
      <span id="langSwitchCurrent">${DK_LANGS.find(l => l.code === window.DK_LANG).label}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <ul class="lang-switch__menu" id="langSwitchMenu" role="menu" hidden>
      ${DK_LANGS.map(l => `
        <li role="none">
          <button role="menuitem" type="button" class="lang-switch__option" data-lang="${l.code}">
            <span class="lang-switch__code">${l.label}</span>
            <span class="lang-switch__name">${l.name}</span>
          </button>
        </li>
      `).join('')}
    </ul>
  `;

  const btn = document.getElementById('langSwitchBtn');
  const menu = document.getElementById('langSwitchMenu');

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
  }

  btn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
  menu.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-switch__option');
    if (option) dkSetLanguage(option.dataset.lang);
  });
  document.addEventListener('click', (e) => {
    if (!slot.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  dkUpdateSwitcherUI(window.DK_LANG);
}

document.addEventListener('DOMContentLoaded', () => {
  window.DK_LANG = dkDetectInitialLang();
  dkApplyStaticTranslations(window.DK_LANG);
  dkBuildLangSwitcher();
});
