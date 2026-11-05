'use strict';

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navGroups = [...document.querySelectorAll('.nav-group')];

function closeNavGroups(except = null) {
  navGroups.forEach(group => {
    if (group === except) return;
    group.classList.remove('open');
    group.querySelector('.nav-group-toggle')?.setAttribute('aria-expanded', 'false');
  });
}

function setNavGroup(group, open) {
  if (open) closeNavGroups(group);
  group.classList.toggle('open', open);
  group.querySelector('.nav-group-toggle')?.setAttribute('aria-expanded', String(open));
}

function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open navigation');
  nav?.classList.remove('open');
  document.body.classList.remove('menu-open');
  closeNavGroups();
}

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
  if (!open) window.requestAnimationFrame(() => nav?.querySelector('a, button')?.focus());
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
navGroups.forEach(group => {
  const button = group.querySelector('.nav-group-toggle');
  const panel = group.querySelector('.nav-panel');
  let pointerCloseTimer;
  button?.addEventListener('click', () => setNavGroup(group, !group.classList.contains('open')));
  button?.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown') return;
    event.preventDefault();
    setNavGroup(group, true);
    panel?.querySelector('a')?.focus();
  });
  group.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(pointerCloseTimer);
    setNavGroup(group, true);
  });
  group.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(pointerCloseTimer);
    pointerCloseTimer = window.setTimeout(() => {
      if (!group.matches(':hover') && !group.contains(document.activeElement)) setNavGroup(group, false);
    }, 180);
  });
  group.addEventListener('focusout', () => {
    window.setTimeout(() => { if (!group.contains(document.activeElement)) setNavGroup(group, false); }, 0);
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-group')) closeNavGroups();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const openGroup = navGroups.find(group => group.classList.contains('open'));
    if (openGroup) {
      setNavGroup(openGroup, false);
      openGroup.querySelector('.nav-group-toggle')?.focus();
    } else if (nav?.classList.contains('open')) {
      closeMenu();
      toggle?.focus();
    }
  }
  if (event.key === 'Tab' && nav?.classList.contains('open')) {
    const focusable = [...nav.querySelectorAll('a, button')].filter(item => item.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

const header = document.querySelector('.site-header');
function updateHeader() { header?.classList.toggle('scrolled', window.scrollY > 24); }
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('[data-reveal]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(item => item.classList.add('revealed'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
  reveals.forEach(item => observer.observe(item));
}

const slideshow = document.querySelector('[data-hero-slideshow]');
const slides = slideshow ? [...slideshow.querySelectorAll('.hero-slide')] : [];
const selectors = [...document.querySelectorAll('.slide-selector')];
const pauseButton = document.querySelector('.slide-pause');
let activeSlide = 0;
let slideTimer;
let slideshowPaused = reduceMotion;

function showSlide(index) {
  if (!slides.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
  selectors.forEach((selector, slideIndex) => {
    const selected = slideIndex === activeSlide;
    selector.classList.toggle('is-active', selected);
    if (selected) selector.setAttribute('aria-current', 'true');
    else selector.removeAttribute('aria-current');
  });
}

function stopSlideshow() { window.clearInterval(slideTimer); }
function startSlideshow() {
  stopSlideshow();
  if (!slideshowPaused && slides.length > 1) slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 6500);
}

selectors.forEach(selector => selector.addEventListener('click', () => {
  showSlide(Number(selector.dataset.slide));
  startSlideshow();
}));

pauseButton?.addEventListener('click', () => {
  slideshowPaused = !slideshowPaused;
  pauseButton.setAttribute('aria-pressed', String(slideshowPaused));
  pauseButton.textContent = slideshowPaused ? 'Play' : 'Pause';
  startSlideshow();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopSlideshow();
  else startSlideshow();
});

if (reduceMotion) {
  pauseButton?.setAttribute('hidden', '');
} else {
  startSlideshow();
}

document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });
