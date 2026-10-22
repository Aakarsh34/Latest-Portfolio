(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const storedTheme = (() => { try { return localStorage.getItem('aakarsh-theme'); } catch (_) { return null; } })();

  if (storedTheme === 'light') root.classList.add('light-theme');
  const updateThemeIcon = () => {
    const light = root.classList.contains('light-theme');
    themeIcon.textContent = light ? '☾' : '☼';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', light ? '#f4f5f0' : '#0b0d0e');
  };
  updateThemeIcon();
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light-theme');
    try { localStorage.setItem('aakarsh-theme', root.classList.contains('light-theme') ? 'light' : 'dark'); } catch (_) {}
    updateThemeIcon();
  });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mobileNav.hidden = isOpen;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));

  const dialog = document.querySelector('.image-dialog');
  document.querySelectorAll('[data-open-image]').forEach(button => button.addEventListener('click', () => {
    const img = dialog.querySelector('img');
    const title = dialog.querySelector('.dialog-title');
    img.removeAttribute("src");
    img.src = button.dataset.openImage;
    img.alt = button.dataset.imageTitle || 'Project image preview';
    title.textContent = button.dataset.imageTitle || 'Project image preview';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else window.open(button.dataset.openImage, '_blank', 'noopener');
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) dialog.close();
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
