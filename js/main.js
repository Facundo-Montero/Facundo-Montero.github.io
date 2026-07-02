// Scroll reveal para secciones (proyectos, QA, about)
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.project, .card, .qa-card, .about__skills > div');
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
});
