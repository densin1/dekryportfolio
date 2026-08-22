/**
 * DK PORTFOLIO — CONTENT LAYER (i18n: uk / en / ru)
 * Кожен блок продубльований для трьох мов з однаковою структурою полів.
 * Технічні поля (id, thumb, video, link, tool-теги типу "Figma") залишені
 * однаковими для всіх мов навмисно — це власні назви інструментів і файли.
 */

const DK_CONTENT = {

  // ============================================================
  // УКРАЇНСЬКА (за замовчуванням для аудиторії творця сайту)
  // ============================================================
  uk: {
    contacts: { telegram: 'https://t.me/des1n', behance: 'https://www.behance.net/5db91123', email: 'dendekri17@gmail.com' },

    nav: [
      { id: 'hero', label: 'Головна' },
      { id: 'video', label: 'Відеомонтаж' },
      { id: 'design', label: 'Дизайн' },
      { id: 'skills', label: 'Навички' },
      { id: 'testimonials', label: 'Відгуки' },
      { id: 'pricing', label: 'Вартість' },
      { id: 'contact', label: 'Контакти' }
    ],

    hero: {
      offer: 'Перетворюю ідеї на монтаж і дизайн, які зупиняють скрол, запам\u2019ятовуються та приводять клієнтів.',
      cta_primary: 'Дивитись роботи',
      cta_secondary: "Зв'язатися в Telegram",
      mediaType: 'image',
      mediaPoster: 'https://cdn.dekry.cc/img/hero-poster.png'
    },

    videoProjects: [
      { id: 'proj-1', category: 'reels',   title: 'Динамічний Reels для блогера',        desc: 'Швидкий монтаж під трендовий аудіо, звуковий дизайн, динамічні переходи.',                       thumb: 'https://cdn.dekry.cc/img/project-1.jpg', video: 'https://cdn.dekry.cc/video/project-1-preview.MP4', tags: ['DaVinci Resolve', 'After Effects', 'Sound Design'], link: 'https://t.me/des1n' },
      { id: 'proj-2', category: 'reels',   title: 'Серія Reels для особистого бренду',   desc: 'Пакет 12 роликів. Трендові звуки, субтитри. Рост фолловерів +30%.',                              thumb: 'https://cdn.dekry.cc/img/project-2.jpg', video: 'https://cdn.dekry.cc/video/project-2-preview.MP4', tags: ['Trending Audio', 'Fast Turnaround'],                 link: 'https://t.me/des1n' },
      { id: 'proj-4', category: 'reels',   title: 'Креативний Reels для реклами',        desc: 'Яскраві переходи, текст на екрані, утримання уваги з перших секунд.',                            thumb: 'https://cdn.dekry.cc/img/project-4.jpg', video: 'https://cdn.dekry.cc/video/project-4-preview.mp4', tags: ['DaVinci Resolve', 'Ads'],                            link: 'https://t.me/des1n' },
      { id: 'proj-5', category: 'reels',   title: 'Аналітика у форматі Reels',           desc: 'Складні дані перетворені на доступну коротку форму з кінетичною типографікою.',                   thumb: 'https://cdn.dekry.cc/img/project-5.jpg', video: 'https://cdn.dekry.cc/video/project-5-preview.mp4', tags: ['After Effects', 'Kinetic Typography'],               link: 'https://t.me/des1n' },
      { id: 'proj-6', category: 'reels',   title: 'Reels для експерта',                  desc: 'Говоряча голова + динамічні підкадри, що ілюструють текст.',                                     thumb: 'https://cdn.dekry.cc/img/project-6.jpg', video: 'https://cdn.dekry.cc/video/project-6-preview.mp4', tags: ['Premiere Pro', 'B-roll'],                            link: 'https://t.me/des1n' },
      { id: 'proj-7', category: 'reels',   title: 'Reels-розпаковка продукту',           desc: 'Яскраві переходи, текст на екрані, утримання уваги з перших секунд. Ритмічний монтаж під музику.', thumb: 'https://cdn.dekry.cc/img/project-7.jpg', video: 'https://cdn.dekry.cc/video/project-7-preview.mp4', tags: ['DaVinci Resolve', 'Product'],                        link: 'https://t.me/des1n' },
      { id: 'proj-3', category: 'youtube', title: 'YouTube відео',       desc: 'Повний цикл: монтаж, колір-корекція, графіка, саунд-дизайн. Утримання аудиторії 65%.',    thumb: 'https://cdn.dekry.cc/img/project-3.jpg', video: 'https://cdn.dekry.cc/video/project-3-preview.mp4', tags: ['Premiere Pro', 'Color Grading', 'Motion Graphics'], link: 'https://t.me/des1n' },
      { id: 'proj-8', category: 'youtube', title: 'YouTube відео: Топ способів заробітку', desc: 'Динамічне інтро та B-Roll нарізка про способи заробітку. Повний цикл: монтаж, моушн-дизайн (2D/3D), кінетична типографіка та акцентний саунд-дизайн.', thumb: 'https://cdn.dekry.cc/img/project-8.jpg', video: 'https://cdn.dekry.cc/video/project-8-preview.mp4', tags: ['DaVinci Resolve', 'Motion Graphics', 'Sound Design', 'B-Roll Edit'], link: 'https://t.me/des1n' }
    ],

    designProjects: [
      { id: 'des-1', title: 'Банер для YouTube каналу', desc: 'Дизайн банеру для YouTube-каналу з урахуванням гайдлайнів платформи.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-1.jpg', link: 'https://t.me/des1n' },
      { id: 'des-2', title: 'Креатив для Facebook/Instagram Ads', desc: 'Рекламний креатив для таргетованої реклами в соцмережах.', tool: 'Photoshop, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-2.jpg', link: 'https://t.me/des1n' },
      { id: 'des-3', title: 'Обкладинка для подкасту', desc: 'Мінімалістична обкладинка для подкасту на Spotify та Apple Podcasts.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-3.jpg', link: 'https://t.me/des1n' },
      { id: 'des-4', title: 'Ідентичність для особистого бренду', desc: 'Повний брендпак: логотип, кольори, типографіка, гайдлайни.', tool: 'Figma, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-4.jpg', link: 'https://t.me/des1n' }
    ],

    skills: [
      { name: 'DaVinci Resolve Studio', features: ['Професійна колір-корекція та грейдінг', 'Монтаж, Fairlight (аудіо), Fusion (VFX)', 'Робота з RAW (BRAW, RED), ACES workflow'] },
      { name: 'Figma', features: ['UI/UX дизайн, прототипування, дизайн-системи', 'Автолейаути, компоненти, змінні', 'Передача в розробку (DevMode)'] },
      { name: 'Adobe Photoshop', features: ['Ретуш, композитинг, фотоманіпуляція', 'Підготовка ассетів для відео/вебу', 'Generative Fill, Neural Filters (AI tools)'] },
      { name: 'Adobe After Effects', features: ['Motion Design, Кінетична типографіка, VFX', 'Expressions, Essential Graphics (MOGRTs)', 'Інтеграція з Premiere Pro / DaVinci'] }
    ],

    testimonials: [
      { text: 'Професіонал своєї справи, зробив Reels за 1 день. Розуміє тренди та алгоритми. Рекомендую!', author: 'Влад Міхєєв', role: 'Експерт з нерухомості', rating: 5 },
      { text: 'Найкращий монтажер, з яким працював. Все зроблено швидко. Бомба!', author: 'Андрій Пивоваров', role: 'Серійний підприємець. Ментор. Стратег (100k+ підписників)', rating: 5 },
      { text: 'Дякую за співпрацю! Буду звертатися, коли виникнуть нові завдання. Зберіг ваш контакт для майбутніх проєктів.', author: 'Володимир Петренко', role: 'Маркетолог, E-com бренд', rating: 5 },
      { text: 'Все чітко, брате. Дякую за виконану роботу, буду звертатися ще 🙌', author: 'zzhen', role: 'Клієнт', rating: 5 },
      { text: 'Привітик) З кейсами все гуд, дякую ☺️', author: 'Daniel B', role: 'Клієнт', rating: 5 }
    ],

    pricing: [
      { id: 'price-reels', name: 'Reels / Shorts / TikTok', price: 'від $10', features: ['Монтаж під трендовий аудіо, динамічні переходи', 'Кольор-корекція, субтитри (авто/ручні), ефекти', 'Адаптація під 3 платформи (9:16)'], popular: true },
      { id: 'price-youtube', name: 'YouTube / Long-form Video', price: 'від $30', features: ['Повний цикл: монтаж, саунд-дизайн, колір, графіка', 'Ретеншн-редагування (утримує увагу глядача)', 'Створення енд-скрін, таймкодів, обкладинки (CTR)'], popular: false },
      { id: 'price-design', name: 'Дизайн-пакет (Бренд / Ads)', price: 'від $8', features: ['Логотип, колірна палітра, типографіка, гайдлайни', 'Креативи для реклами (статика/мобільний відео)', 'YouTube банер, аватарки, обкладинки для відео'], popular: false }
    ],

    stats: [
      { number: 200, label: 'Відео змонтовано' },
      { number: 50, label: 'Задоволених клієнтів' },
      { number: 3, label: 'Роки досвіду' },
      { number: 24, label: 'Термін відповіді' }
    ],





    ui: {
      filterAll: 'Всі', filterReels: 'Reels / Shorts', filterYoutube: 'YouTube',
      popularBadge: 'Популярне',
      ctaDiscussTelegram: 'Обговорити в Telegram',
      ratingAriaTemplate: 'Оцінка {rating} з 5',
      reviewAriaTemplate: 'Відгук: {author}'
    }
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    contacts: { telegram: 'https://t.me/des1n', behance: 'https://www.behance.net/5db91123', email: 'dendekri17@gmail.com' },

    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'video', label: 'Video Editing' },
      { id: 'design', label: 'Design' },
      { id: 'skills', label: 'Skills' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'contact', label: 'Contact' }
    ],

    hero: {
      offer: 'I turn ideas into edits and designs that stop the scroll, stick in memory, and bring in clients.',
      cta_primary: 'View work',
      cta_secondary: 'Message on Telegram',
      mediaType: 'image',
      mediaPoster: 'https://cdn.dekry.cc/img/hero-poster.png'
    },

    videoProjects: [
      { id: 'proj-1', category: 'reels',   title: 'Dynamic Reels for a blogger',        desc: 'Fast-paced edit synced to trending audio, sound design, dynamic transitions.',                    thumb: 'https://cdn.dekry.cc/img/project-1.jpg', video: 'https://cdn.dekry.cc/video/project-1-preview.MP4', tags: ['DaVinci Resolve', 'After Effects', 'Sound Design'], link: 'https://t.me/des1n' },
      { id: 'proj-2', category: 'reels',   title: 'Reels series for a personal brand',  desc: 'A package of 12 videos. Trending sounds, subtitles. Follower growth +30%.',                       thumb: 'https://cdn.dekry.cc/img/project-2.jpg', video: 'https://cdn.dekry.cc/video/project-2-preview.MP4', tags: ['Trending Audio', 'Fast Turnaround'],                 link: 'https://t.me/des1n' },
      { id: 'proj-4', category: 'reels',   title: 'Creative Reels for advertising',     desc: 'Bold transitions, on-screen text, grabbing attention from the first second.',                     thumb: 'https://cdn.dekry.cc/img/project-4.jpg', video: 'https://cdn.dekry.cc/video/project-4-preview.mp4', tags: ['DaVinci Resolve', 'Ads'],                            link: 'https://t.me/des1n' },
      { id: 'proj-5', category: 'reels',   title: 'Analytics in Reels format',          desc: 'Complex data turned into an accessible short-form video with kinetic typography.',                thumb: 'https://cdn.dekry.cc/img/project-5.jpg', video: 'https://cdn.dekry.cc/video/project-5-preview.mp4', tags: ['After Effects', 'Kinetic Typography'],               link: 'https://t.me/des1n' },
      { id: 'proj-6', category: 'reels',   title: 'Reels for an expert',                desc: 'Talking-head footage + dynamic B-roll illustrating the narration.',                                thumb: 'https://cdn.dekry.cc/img/project-6.jpg', video: 'https://cdn.dekry.cc/video/project-6-preview.mp4', tags: ['Premiere Pro', 'B-roll'],                            link: 'https://t.me/des1n' },
      { id: 'proj-7', category: 'reels',   title: 'Product unboxing Reels',             desc: 'Bold transitions, on-screen text, grabbing attention from the first second. Rhythmic edit synced to music.', thumb: 'https://cdn.dekry.cc/img/project-7.jpg', video: 'https://cdn.dekry.cc/video/project-7-preview.mp4', tags: ['DaVinci Resolve', 'Product'],                        link: 'https://t.me/des1n' },
      { id: 'proj-3', category: 'youtube', title: 'YouTube video',       desc: 'Full cycle: editing, color grading, graphics, sound design. 65% audience retention.',        thumb: 'https://cdn.dekry.cc/img/project-3.jpg', video: 'https://cdn.dekry.cc/video/project-3-preview.mp4', tags: ['Premiere Pro', 'Color Grading', 'Motion Graphics'], link: 'https://t.me/des1n' },
      { id: 'proj-8', category: 'youtube', title: 'YouTube Video: Top Ways to Earn Money', desc: 'Dynamic intro and B-roll cuts about ways to make money. Full cycle: editing, motion design (2D/3D), kinetic typography, and accent sound design.', thumb: 'https://cdn.dekry.cc/img/project-8.jpg', video: 'https://cdn.dekry.cc/video/project-8-preview.mp4', tags: ['DaVinci Resolve', 'Motion Graphics', 'Sound Design', 'B-Roll Edit'], link: 'https://t.me/des1n' }
    ],

    designProjects: [
      { id: 'des-1', title: 'YouTube channel banner', desc: 'YouTube channel banner design following platform guidelines.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-1.jpg', link: 'https://t.me/des1n' },
      { id: 'des-2', title: 'Ad creative for Facebook/Instagram', desc: 'Ad creative for targeted social media campaigns.', tool: 'Photoshop, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-2.jpg', link: 'https://t.me/des1n' },
      { id: 'des-3', title: 'Podcast cover art', desc: 'Minimalist cover art for Spotify and Apple Podcasts.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-3.jpg', link: 'https://t.me/des1n' },
      { id: 'des-4', title: 'Identity for a personal brand', desc: 'Full brand kit: logo, colors, typography, guidelines.', tool: 'Figma, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-4.jpg', link: 'https://t.me/des1n' }
    ],

    skills: [
      { name: 'DaVinci Resolve Studio', features: ['Professional color correction & grading', 'Editing, Fairlight (audio), Fusion (VFX)', 'Working with RAW (BRAW, RED), ACES workflow'] },
      { name: 'Figma', features: ['UI/UX design, prototyping, design systems', 'Auto layout, components, variables', 'Handoff to development (DevMode)'] },
      { name: 'Adobe Photoshop', features: ['Retouching, compositing, photo manipulation', 'Asset prep for video/web', 'Generative Fill, Neural Filters (AI tools)'] },
      { name: 'Adobe After Effects', features: ['Motion design, kinetic typography, VFX', 'Expressions, Essential Graphics (MOGRTs)', 'Integration with Premiere Pro / DaVinci'] }
    ],

    testimonials: [
      { text: 'A true professional — delivered the Reels in just 1 day. Understands trends and algorithms. Highly recommend!', author: 'Vlad Mikheiev', role: 'Real estate expert', rating: 5 },
      { text: "Best video editor I've worked with. Everything done fast. Amazing!", author: 'Andrii Pyvovarov', role: 'Serial entrepreneur. Mentor. Strategist (100k+ followers)', rating: 5 },
      { text: "Thanks for the collaboration! I'll reach out again when new tasks come up. Saved your contact for future projects.", author: 'Volodymyr Petrenko', role: 'Marketer, e-commerce brand', rating: 5 },
      { text: "Everything's on point, bro. Thanks for the work — I'll be back 🙌", author: 'zzhen', role: 'Client', rating: 5 },
      { text: 'Hey there) The case files are all good, thanks ☺️', author: 'Daniel B', role: 'Client', rating: 5 }
    ],

    pricing: [
      { id: 'price-reels', name: 'Reels / Shorts / TikTok', price: 'from $10', features: ['Editing synced to trending audio, dynamic transitions', 'Color correction, subtitles (auto/manual), effects', 'Adapted for 3 platforms (9:16)'], popular: true },
      { id: 'price-youtube', name: 'YouTube / Long-form Video', price: 'from $30', features: ['Full cycle: editing, sound design, color, graphics', 'Retention editing (keeps viewers watching)', 'End screens, timecodes, thumbnail creation (CTR)'], popular: false },
      { id: 'price-design', name: 'Design package (Brand / Ads)', price: 'from $8', features: ['Logo, color palette, typography, guidelines', 'Ad creatives (static/mobile video)', 'YouTube banner, avatars, video thumbnails'], popular: false }
    ],

    stats: [
      { number: 200, label: 'Videos edited' },
      { number: 50, label: 'Happy clients' },
      { number: 3, label: 'Years of experience' },
      { number: 24, label: 'Response time' }
    ],





    ui: {
      filterAll: 'All', filterReels: 'Reels / Shorts', filterYoutube: 'YouTube',
      popularBadge: 'Popular',
      ctaDiscussTelegram: 'Discuss on Telegram',
      ratingAriaTemplate: 'Rating {rating} out of 5',
      reviewAriaTemplate: 'Review: {author}'
    }
  },

  // ============================================================
  // РУССКИЙ
  // ============================================================
  ru: {
    contacts: { telegram: 'https://t.me/des1n', behance: 'https://www.behance.net/5db91123', email: 'dendekri17@gmail.com' },

    nav: [
      { id: 'hero', label: 'Главная' },
      { id: 'video', label: 'Видеомонтаж' },
      { id: 'design', label: 'Дизайн' },
      { id: 'skills', label: 'Навыки' },
      { id: 'testimonials', label: 'Отзывы' },
      { id: 'pricing', label: 'Стоимость' },
      { id: 'contact', label: 'Контакты' }
    ],

    hero: {
      offer: 'Превращаю идеи в монтаж и дизайн, которые останавливают скролл, запоминаются и приводят клиентов.',
      cta_primary: 'Смотреть работы',
      cta_secondary: 'Написать в Telegram',
      mediaType: 'image',
      mediaPoster: 'https://cdn.dekry.cc/img/hero-poster.png'
    },

    videoProjects: [
      { id: 'proj-1', category: 'reels',   title: 'Динамичный Reels для блогера',        desc: 'Быстрый монтаж под трендовое аудио, звуковой дизайн, динамичные переходы.',                      thumb: 'https://cdn.dekry.cc/img/project-1.jpg', video: 'https://cdn.dekry.cc/video/project-1-preview.MP4', tags: ['DaVinci Resolve', 'After Effects', 'Sound Design'], link: 'https://t.me/des1n' },
      { id: 'proj-2', category: 'reels',   title: 'Серия Reels для личного бренда',      desc: 'Пакет из 12 роликов. Трендовые звуки, субтитры. Рост подписчиков +30%.',                         thumb: 'https://cdn.dekry.cc/img/project-2.jpg', video: 'https://cdn.dekry.cc/video/project-2-preview.MP4', tags: ['Trending Audio', 'Fast Turnaround'],                 link: 'https://t.me/des1n' },
      { id: 'proj-4', category: 'reels',   title: 'Креативный Reels для рекламы',        desc: 'Яркие переходы, текст на экране, удержание внимания с первых секунд.',                           thumb: 'https://cdn.dekry.cc/img/project-4.jpg', video: 'https://cdn.dekry.cc/video/project-4-preview.mp4', tags: ['DaVinci Resolve', 'Ads'],                            link: 'https://t.me/des1n' },
      { id: 'proj-5', category: 'reels',   title: 'Аналитика в формате Reels',           desc: 'Сложные данные превращены в доступный короткий формат с кинетической типографикой.',              thumb: 'https://cdn.dekry.cc/img/project-5.jpg', video: 'https://cdn.dekry.cc/video/project-5-preview.mp4', tags: ['After Effects', 'Kinetic Typography'],               link: 'https://t.me/des1n' },
      { id: 'proj-6', category: 'reels',   title: 'Reels для эксперта',                  desc: 'Говорящая голова + динамические подкадры, иллюстрирующие текст.',                                 thumb: 'https://cdn.dekry.cc/img/project-6.jpg', video: 'https://cdn.dekry.cc/video/project-6-preview.mp4', tags: ['Premiere Pro', 'B-roll'],                            link: 'https://t.me/des1n' },
      { id: 'proj-7', category: 'reels',   title: 'Reels-распаковка продукта',           desc: 'Яркие переходы, текст на экране, удержание внимания с первых секунд. Ритмичный монтаж под музыку.', thumb: 'https://cdn.dekry.cc/img/project-7.jpg', video: 'https://cdn.dekry.cc/video/project-7-preview.mp4', tags: ['DaVinci Resolve', 'Product'],                        link: 'https://t.me/des1n' },
      { id: 'proj-3', category: 'youtube', title: 'YouTube видео',       desc: 'Полный цикл: монтаж, цветокоррекция, графика, саунд-дизайн. Удержание аудитории 65%.',     thumb: 'https://cdn.dekry.cc/img/project-3.jpg', video: 'https://cdn.dekry.cc/video/project-3-preview.mp4', tags: ['Premiere Pro', 'Color Grading', 'Motion Graphics'], link: 'https://t.me/des1n' },
      { id: 'proj-8', category: 'youtube', title: 'YouTube видео: Топ способов заработка', desc: 'Динамичное интро и B-Roll нарезка о способах заработка. Полный цикл: монтаж, моушн-дизайн (2D/3D), кинетическая типографика и акцентный саунд-дизайн.', thumb: 'https://cdn.dekry.cc/img/project-8.jpg', video: 'https://cdn.dekry.cc/video/project-8-preview.mp4', tags: ['DaVinci Resolve', 'Motion Graphics', 'Sound Design', 'B-Roll Edit'], link: 'https://t.me/des1n' }
    ],

    designProjects: [
      { id: 'des-1', title: 'Баннер для YouTube-канала', desc: 'Дизайн баннера для YouTube-канала с учётом гайдлайнов платформы.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-1.jpg', link: 'https://t.me/des1n' },
      { id: 'des-2', title: 'Рекламный креатив для Facebook/Instagram', desc: 'Рекламный креатив для таргетированной рекламы в соцсетях.', tool: 'Photoshop, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-2.jpg', link: 'https://t.me/des1n' },
      { id: 'des-3', title: 'Обложка для подкаста', desc: 'Минималистичная обложка для подкаста на Spotify и Apple Podcasts.', tool: 'Figma, Photoshop', thumb: 'https://cdn.dekry.cc/img/design-3.jpg', link: 'https://t.me/des1n' },
      { id: 'des-4', title: 'Айдентика для личного бренда', desc: 'Полный брендпак: логотип, цвета, типографика, гайдлайны.', tool: 'Figma, Illustrator', thumb: 'https://cdn.dekry.cc/img/design-4.jpg', link: 'https://t.me/des1n' }
    ],

    skills: [
      { name: 'DaVinci Resolve Studio', features: ['Профессиональная цветокоррекция и грейдинг', 'Монтаж, Fairlight (аудио), Fusion (VFX)', 'Работа с RAW (BRAW, RED), ACES workflow'] },
      { name: 'Figma', features: ['UI/UX дизайн, прототипирование, дизайн-системы', 'Авто-лейауты, компоненты, переменные', 'Передача в разработку (DevMode)'] },
      { name: 'Adobe Photoshop', features: ['Ретушь, композитинг, фотоманипуляция', 'Подготовка ассетов для видео/веба', 'Generative Fill, Neural Filters (AI-инструменты)'] },
      { name: 'Adobe After Effects', features: ['Motion Design, кинетическая типографика, VFX', 'Expressions, Essential Graphics (MOGRTs)', 'Интеграция с Premiere Pro / DaVinci'] }
    ],

    testimonials: [
      { text: 'Профессионал своего дела, сделал Reels за 1 день. Понимает тренды и алгоритмы. Рекомендую!', author: 'Влад Михеев', role: 'Эксперт по недвижимости', rating: 5 },
      { text: 'Лучший монтажёр, с которым работал. Всё сделано быстро. Бомба!', author: 'Андрей Пивоваров', role: 'Серийный предприниматель. Ментор. Стратег (100k+ подписчиков)', rating: 5 },
      { text: 'Спасибо за сотрудничество! Буду обращаться, когда появятся новые задачи. Сохранил ваш контакт для будущих проектов.', author: 'Владимир Петренко', role: 'Маркетолог, e-com бренд', rating: 5 },
      { text: 'Все четко братан. Спасибо тебе за проделанную работу, буду обращаться к тебе 🙌', author: 'zzhen', role: 'Клиент', rating: 5 },
      { text: 'Приветик) По кейсам все гуд, спасибо ☺️', author: 'Daniel B', role: 'Клиент', rating: 5 }
    ],

    pricing: [
      { id: 'price-reels', name: 'Reels / Shorts / TikTok', price: 'от $10', features: ['Монтаж под трендовое аудио, динамичные переходы', 'Цветокоррекция, субтитры (авто/ручные), эффекты', 'Адаптация под 3 платформы (9:16)'], popular: true },
      { id: 'price-youtube', name: 'YouTube / Long-form Video', price: 'от $30', features: ['Полный цикл: монтаж, саунд-дизайн, цвет, графика', 'Ретеншн-монтаж (удерживает внимание зрителя)', 'Создание энд-скрина, таймкодов, обложки (CTR)'], popular: false },
      { id: 'price-design', name: 'Дизайн-пакет (Бренд / Реклама)', price: 'от $8', features: ['Логотип, цветовая палитра, типографика, гайдлайны', 'Креативы для рекламы (статика/мобильное видео)', 'YouTube баннер, аватарки, обложки для видео'], popular: false }
    ],

    stats: [
      { number: 200, label: 'Видео смонтировано' },
      { number: 50, label: 'Довольных клиентов' },
      { number: 3, label: 'Года опыта' },
      { number: 24, label: 'Срок ответа' }
    ],





    ui: {
      filterAll: 'Все', filterReels: 'Reels / Shorts', filterYoutube: 'YouTube',
      popularBadge: 'Популярное',
      ctaDiscussTelegram: 'Обсудить в Telegram',
      ratingAriaTemplate: 'Оценка {rating} из 5',
      reviewAriaTemplate: 'Отзыв: {author}'
    }
  }

};
