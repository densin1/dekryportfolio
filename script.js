/**
 * DK PORTFOLIO — APP LOGIC
 */
document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // REVEAL OBSERVER
  // ============================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  function observeReveal() {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
  }

  // ============================================================
  // STATE
  // ============================================================
  let currentLang = window.DK_LANG || 'uk';
  let activeFilter = 'all';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function C() { return DK_CONTENT[currentLang]; }

  // Declared early so renderStats can re-observe after DOM rebuild.
  const statsGrid = document.getElementById('statsGrid');
  let statsAnimated = false;
  let statsObs = null;

  // ============================================================
  // RENDER — nav
  // ============================================================
  const navList = document.getElementById('navList');
  const navToggle = document.getElementById('navToggle');
  function renderNav() {
    navList.innerHTML = C().nav
      .map(n => `<li><a href="#${n.id}" class="nav__link" data-scroll>${n.label}</a></li>`)
      .join('');
    navList.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  // ============================================================
  // RENDER — hero
  // ============================================================
  const heroOffer = document.getElementById('heroOffer');
  function renderHero() {
    const h = C().hero;
    if (heroOffer) heroOffer.textContent = h.offer;
    // Hero visual itself is a static, language-independent decorative composition
    // built once in HTML — see initHeroVisual() below.
  }

  // ============================================================
  // HERO VISUAL — cursor tilt + scroll parallax (decorative hook)
  // Built once; doesn't depend on language, so it's not re-run on renderAll().
  // ============================================================
  function initHeroVisual() {
    const heroVisual = document.getElementById('heroVisual');
    const heroVisualPanel = document.getElementById('heroVisualPanel');
    const heroSection = document.getElementById('hero');
    if (!heroVisual || reducedMotion) return;

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // --- cursor tilt (desktop only) ---
    if (canHover && heroVisualPanel) {
      let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0, tiltRaf = null;
      function applyTilt() {
        curRX += (targetRX - curRX) * 0.08;
        curRY += (targetRY - curRY) * 0.08;
        heroVisualPanel.style.transform = `rotateX(${curRX}deg) rotateY(${curRY}deg)`;
        if (Math.abs(targetRX - curRX) > 0.02 || Math.abs(targetRY - curRY) > 0.02) {
          tiltRaf = requestAnimationFrame(applyTilt);
        } else {
          tiltRaf = null;
        }
      }
      function scheduleTilt() { if (!tiltRaf) tiltRaf = requestAnimationFrame(applyTilt); }
      heroVisual.addEventListener('mousemove', (e) => {
        const r = heroVisual.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        targetRY = px * 14;
        targetRX = -py * 14;
        scheduleTilt();
      });
      heroVisual.addEventListener('mouseleave', () => {
        targetRX = 0; targetRY = 0;
        scheduleTilt();
      });
    }

    // --- scroll parallax for the floating chips (only while hero is on screen) ---
    let heroVisible = true;
    let scrollRaf = null;
    function onScroll() {
      const y = window.pageYOffset;
      heroVisual.style.setProperty('--parallax-y', Math.min(y * 0.08, 40) + 'px');
      scrollRaf = null;
    }
    window.addEventListener('scroll', () => {
      if (!heroVisible || scrollRaf) return;
      scrollRaf = requestAnimationFrame(onScroll);
    }, { passive: true });

    if (heroSection) {
      new IntersectionObserver((entries) => {
        entries.forEach(entry => { heroVisible = entry.isIntersecting; });
      }, { threshold: 0 }).observe(heroSection);
    }
  }

  // ============================================================
  // RENDER — stats
  // ============================================================
  function renderStats() {
    if (!statsGrid) return;
    statsGrid.innerHTML = C().stats
      .map(s => `<div class="stat-item"><div class="stat-item__number" data-count="${s.number}"><span class="stat-val">0</span><span class="stat-plus">+</span></div><div class="stat-item__label">${s.label}</div></div>`)
      .join('');
    statsAnimated = false;
    if (statsObs) statsObs.observe(statsGrid); // re-observe after DOM rebuild
  }

  // ============================================================
  // RENDER — video portfolio
  // ============================================================
  const videoGrid = document.getElementById('videoGrid');
  const videoFilter = document.getElementById('videoFilter');

  function renderVideoFilter() {
    const ui = C().ui;
    const cats = [
      { key: 'all', label: ui.filterAll },
      { key: 'reels', label: ui.filterReels },
      { key: 'youtube', label: ui.filterYoutube }
    ];
    videoFilter.innerHTML = cats
      .map(c => `<button class="filter__btn${c.key === activeFilter ? ' is-active' : ''}" data-filter="${c.key}">${c.label}</button>`)
      .join('');
  }

  function renderVideoProjects(filter = 'all') {
    videoGrid.innerHTML = '';
    C().videoProjects.forEach(proj => {
      if (filter !== 'all' && proj.category !== filter) return;
      const isYT = proj.category === 'youtube';
      const item = document.createElement('article');
      item.className = `bento__item ${isYT ? 'bento__item--youtube' : 'bento__item--reels'} reveal`;
      item.dataset.id = proj.id;

      let media = `<img src="${proj.thumb}" alt="${proj.title}" loading="lazy" decoding="async">`;
      if (proj.video) {
        media += `<video class="bento-hover-video" muted loop playsinline preload="none" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s"><source src="${proj.video}" type="video/mp4"></video>`;
      }
      const play = `<div class="project-card__play" aria-hidden="true"><span class="project-card__play-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>`;
      const tags = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');

      item.innerHTML = `<div class="project-card"><div class="project-card__media">${media}${play}</div><div class="project-card__body"><h3 class="project-card__title">${proj.title}</h3><div class="project-card__tags">${tags}</div></div></div>`;
      videoGrid.appendChild(item);

      if (proj.video) {
        const vid = item.querySelector('.bento-hover-video');
        item.addEventListener('mouseenter', () => { vid.style.opacity = '1'; vid.play().catch(() => {}); });
        item.addEventListener('mouseleave', () => { vid.style.opacity = '0'; vid.pause(); });
      }
      item.addEventListener('click', () => openModal(proj));
    });
    observeReveal();
  }

  // ============================================================
  // RENDER — design portfolio
  // ============================================================
  const designGrid = document.getElementById('designGrid');
  function renderDesignGrid() {
    designGrid.innerHTML = '';
    C().designProjects.forEach((proj, i) => {
      const shape = i < 2 ? 'design-card--wide' : 'design-card--square';
      const item = document.createElement('article');
      item.className = `design-card ${shape} reveal`;
      item.dataset.id = proj.id;
      item.innerHTML = `<div class="design-card__media"><img src="${proj.thumb}" alt="${proj.title}" loading="lazy" decoding="async"></div><div class="design-card__info"><h3 class="design-card__title">${proj.title}</h3><span class="design-card__tool">${proj.tool}</span></div>`;
      item.addEventListener('click', () => openModal({ ...proj, category: 'design', video: null, tags: [proj.tool] }));
      designGrid.appendChild(item);
    });
    observeReveal();
  }

  // ============================================================
  // RENDER — skills
  // ============================================================
  const skillsGrid = document.getElementById('skillsGrid');
  function renderSkills() {
    skillsGrid.innerHTML = C().skills
      .map(s => `<article class="skill-card reveal"><h3 class="skill-card__name">${s.name}</h3><ul class="skill-card__features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul></article>`)
      .join('');
    observeReveal();
  }

  // ============================================================
  // RENDER — testimonials
  // ============================================================
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const testimonialsDots = document.getElementById('testimonialsDots');
  const testimPrev = document.getElementById('testimPrev');
  const testimNext = document.getElementById('testimNext');
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  let testimIndex = 0, testimTimer = null, testimCount = 0;

  function goToTestimonial(i) {
    testimIndex = (i + testimCount) % testimCount;
    testimonialsTrack.style.transform = `translateX(-${testimIndex * 100}%)`;
    [...testimonialsDots.children].forEach((d, j) => d.classList.toggle('is-active', j === testimIndex));
  }
  function startAutoplay() {
    if (reducedMotion || testimCount <= 1) return;
    stopAutoplay();
    testimTimer = setInterval(() => goToTestimonial(testimIndex + 1), 6000);
  }
  function stopAutoplay() { if (testimTimer) clearInterval(testimTimer); }

  function renderTestimonials() {
    stopAutoplay();
    testimonialsTrack.innerHTML = '';
    testimonialsDots.innerHTML = '';
    testimIndex = 0;
    const ui = C().ui;
    testimCount = C().testimonials.length;

    C().testimonials.forEach((t, i) => {
      const stars = '★'.repeat(t.rating);
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      slide.innerHTML = `<article class="tg-bubble reveal"><header class="tg-bubble__header"><div class="tg-bubble__avatar">${t.author.charAt(0)}</div><div class="tg-bubble__meta"><cite class="tg-bubble__name">${t.author}</cite><p class="tg-bubble__role">${t.role}</p></div><div class="tg-bubble__stars" aria-label="${ui.ratingAriaTemplate.replace('{rating}', t.rating)}">${stars}</div></header><div class="tg-bubble__msg"><p class="tg-bubble__text">${t.text}</p><div class="tg-bubble__footer"><span class="tg-bubble__time">Telegram</span><svg class="tg-bubble__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12l5 5L14 8"/><path d="M9 12l5 5L23 8"/></svg></div></div></article>`;
      testimonialsTrack.appendChild(slide);

      const dot = document.createElement('button');
      dot.className = 'testimonials-dots__dot';
      dot.setAttribute('aria-label', ui.reviewAriaTemplate.replace('{author}', t.author));
      dot.addEventListener('click', () => { goToTestimonial(i); stopAutoplay(); startAutoplay(); });
      testimonialsDots.appendChild(dot);
    });

    if (testimCount > 0) { goToTestimonial(0); startAutoplay(); }
    const show = testimCount > 1;
    testimPrev.style.display = show ? '' : 'none';
    testimNext.style.display = show ? '' : 'none';
    testimonialsDots.style.display = show ? '' : 'none';
    observeReveal();
  }

  testimPrev.addEventListener('click', () => { goToTestimonial(testimIndex - 1); stopAutoplay(); startAutoplay(); });
  testimNext.addEventListener('click', () => { goToTestimonial(testimIndex + 1); stopAutoplay(); startAutoplay(); });
  testimonialsSlider.addEventListener('mouseenter', stopAutoplay);
  testimonialsSlider.addEventListener('mouseleave', startAutoplay);
  testimonialsSlider.addEventListener('focusin', stopAutoplay);
  testimonialsSlider.addEventListener('focusout', startAutoplay);

  let touchStartX = null;
  testimonialsTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; stopAutoplay(); }, { passive: true });
  testimonialsTrack.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goToTestimonial(testimIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
    startAutoplay();
  });

  // ============================================================
  // RENDER — pricing
  // ============================================================
  const pricingGrid = document.getElementById('pricingGrid');
  function renderPricing() {
    const ui = C().ui;
    pricingGrid.innerHTML = C().pricing
      .map(p => `<article class="pricing-card reveal${p.popular ? ' pricing-card--popular' : ''}">${p.popular ? `<div class="pricing-card__badge">${ui.popularBadge}</div>` : ''}<h3 class="pricing-card__name">${p.name}</h3><div class="pricing-card__price">${p.price}</div><ul class="pricing-card__features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul><a href="https://t.me/des1n" target="_blank" rel="noopener" class="btn ${p.popular ? 'btn--primary' : 'btn--outline'} btn--block">${ui.ctaDiscussTelegram}</a></article>`)
      .join('');
    observeReveal();
  }

  // ============================================================
  // RENDER ALL
  // ============================================================
  function renderAll() {
    renderNav();
    renderHero();
    renderStats();
    renderVideoFilter();
    renderVideoProjects(activeFilter);
    renderDesignGrid();
    renderSkills();
    renderTestimonials();
    renderPricing();
  }

  window.dkRenderContent = function (lang) {
    if (!DK_CONTENT[lang]) return;
    currentLang = lang;
    activeFilter = 'all';
    renderAll();
  };

  renderAll();
  initHeroVisual();

  // ============================================================
  // STATS COUNTER — animate numbers on scroll
  // ============================================================
  if (statsGrid) {
    statsObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statsGrid.querySelectorAll('.stat-item__number').forEach(el => {
            const val = el.querySelector('.stat-val');
            const target = parseInt(el.dataset.count, 10);
            const t0 = performance.now();
            (function tick(now) {
              const p = Math.min((now - t0) / 2000, 1);
              val.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
              if (p < 1) requestAnimationFrame(tick);
              else el.classList.add('is-counted');
            })(t0);
          });
        }
      });
    }, { threshold: 0.3 });
    statsObs.observe(statsGrid);
  }

  // ============================================================
  // FILTERS
  // ============================================================
  videoFilter.addEventListener('click', e => {
    const btn = e.target.closest('.filter__btn');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    videoFilter.querySelectorAll('.filter__btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderVideoProjects(activeFilter);
  });

  // ============================================================
  // MODAL
  // ============================================================
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalMedia = document.getElementById('modalMedia');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalCategory = document.getElementById('modalCategory');
  const modalCta = document.getElementById('modalCta');
  let lastFocused = null;

  function openModal(proj) {
    lastFocused = document.activeElement;
    if (proj.video) {
      modalMedia.innerHTML = `<video autoplay controls playsinline preload="auto"><source src="${proj.video}" type="video/mp4"></video>`;
      const v = modalMedia.querySelector('video');
      if (v) v.play().catch(() => {}); // some browsers block declarative autoplay; retry via JS
    } else {
      modalMedia.innerHTML = `<img src="${proj.thumb}" alt="${proj.title}">`;
    }
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.desc || '';
    modalCategory.textContent = (proj.category || '').charAt(0).toUpperCase() + (proj.category || '').slice(1);
    modalTools.innerHTML = (proj.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    modalCta.href = proj.link;
    modal.hidden = false;
    // Compensate for the vanishing scrollbar so the page doesn't jump sideways (desktop only).
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-gap', scrollbarGap + 'px');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalClose.focus(), 100);
  }

  function closeModal() {
    const v = modalMedia.querySelector('video');
    if (v) { v.pause(); v.innerHTML = ''; v.load(); }
    modal.hidden = true;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    modalMedia.innerHTML = '';
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener('click', closeModal);
  document.querySelector('.modal__overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if (e.key === 'Tab' && !modal.hidden) {
      const f = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // ============================================================
  // HEADER — scrolled state
  // ============================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  }, { passive: true });

  // ============================================================
  // MOBILE MENU
  // ============================================================
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target) && navList.classList.contains('is-open')) {
      navList.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  navList.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
      navList.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ============================================================
  // FLOATING CTA — show after scrolling past hero
  // ============================================================
  const floatingCta = document.getElementById('floatingCta');
  if (floatingCta) {
    window.addEventListener('scroll', () => {
      floatingCta.classList.toggle('floating-cta--visible', window.pageYOffset > window.innerHeight * 0.5);
    }, { passive: true });
  }


  // 3D SCROLL PERSPECTIVE

  observeReveal();
});
