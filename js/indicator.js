document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollContainer');
  const dots = document.querySelectorAll('.dot');

  function updateDots() {
    const vh = window.innerHeight;
    const idx = Math.round(container.scrollTop / vh);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  }

  container.addEventListener('scroll', updateDots, { passive: true });
  updateDots();
});
