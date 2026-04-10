// 1. Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}

// 2. Active section highlighting via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -80% 0px' });

sections.forEach(s => observer.observe(s));

// 3. Accordion expand/collapse for project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;

    const detailId = card.getAttribute('data-detail');
    const detail = document.getElementById(detailId);
    if (!detail) return;

    const isOpen = detail.classList.contains('open');

    // Close all open details
    document.querySelectorAll('.project-detail.open').forEach(d => {
      d.classList.remove('open');
      d.style.maxHeight = null;
    });
    document.querySelectorAll('.project-card.expanded').forEach(c => {
      c.classList.remove('expanded');
    });

    // Open this one if it wasn't already open
    if (!isOpen) {
      detail.classList.add('open');
      detail.style.maxHeight = detail.scrollHeight + 80 + 'px';
      card.classList.add('expanded');
      setTimeout(() => detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 300);
    }
  });
});

// 4. Close mobile nav when clicking a link
navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
  });
});
