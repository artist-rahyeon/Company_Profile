(function () {
  const KEY = 'gakin-paper-theme';
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const buttons = toggle.querySelectorAll('button');

  function apply(theme) {
    body.classList.toggle('theme-neutral', theme === 'neutral');
    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  let saved = 'warm';
  try { saved = localStorage.getItem(KEY) || 'warm'; } catch (e) {}
  apply(saved);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.dataset.theme));
  });
})();
