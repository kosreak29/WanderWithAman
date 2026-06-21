// Nav on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Hero parallax with throttling
const heroBg = document.getElementById('heroBg');
const PARALLAX_SPEED = 0.22;
const BLUR_DIVISOR = 40;
const OPACITY_DIVISOR = 1200;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking && heroBg) {
        requestAnimationFrame(() => {
            const scroll = window.scrollY;
            heroBg.style.transform = `translateY(${scroll * PARALLAX_SPEED}px) scale(${1 + scroll / 6000})`;
            heroBg.style.filter = `blur(${Math.min(scroll / BLUR_DIVISOR, 12)}px)`;
            heroBg.style.opacity = 1 - scroll / OPACITY_DIVISOR;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Count-up for stats
function countUp(el, target, suffix) {
    const dur = 1700;
    const t0 = performance.now();
    const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        el.textContent = val >= 1000 ? (val / 1000).toFixed(1) + 'k' + (suffix || '') : val + (suffix || '');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target >= 1000 ? (target / 1000).toFixed(1) + 'k' + (suffix || '') : target + (suffix || '');
    };
    requestAnimationFrame(tick);
}

const statObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target.querySelector('[data-target]');
        if (!el || el.dataset.done) return;
        el.dataset.done = '1';
        countUp(el, +el.dataset.target, el.dataset.suffix || '');
    });
}, { threshold: 0.5 });
document.querySelectorAll('.stat').forEach(el => statObs.observe(el));

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const counter = entry.target;
          const target = +counter.dataset.target;
          const suffix = counter.dataset.suffix || '';

          let count = 0;
          const increment = Math.ceil(target / 80);

          const updateCounter = () => {

            count += increment;

            if (count >= target) {
              counter.textContent = target + suffix;
            } else {
              counter.textContent = count + suffix;
              requestAnimationFrame(updateCounter);
            }

          };

          updateCounter();

          observer.unobserve(counter);

        }

      });

    }, {
      threshold: 0.5
    });

    counters.forEach(counter => {
      observer.observe(counter);
    });

    document.getElementById("form").addEventListener("submit", function () {

      const btn = this.querySelector("button");

      btn.innerHTML = "Subscribing...";
      btn.disabled = true;

    });
