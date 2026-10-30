// Small replacements for the Squarespace runtime on this static mirror.
(() => {
  const header = document.querySelector('header');
  const menu = document.querySelector('.header-menu');
  const buttons = [...document.querySelectorAll('.header-burger-btn')];
  const setMenu = (open) => {
    document.body.classList.toggle('header--menu-open', open);
    document.body.classList.toggle('header-menu-open', open);
    if (menu) {
      menu.classList.toggle('static-menu-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      menu.inert = !open;
    }
    buttons.forEach(button => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      button.classList.toggle('burger--active', open);
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => setMenu(!menu.classList.contains('static-menu-open'))));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.classList.contains('static-menu-open')) {
      setMenu(false);
      buttons.find(button => button.getClientRects().length)?.focus();
    }
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  setMenu(false);
  const sizeHeader = () => {
    const height = header?.getBoundingClientRect().height || 0;
    document.documentElement.style.setProperty('--header-height', `${height}px`);
    document.documentElement.style.setProperty('--header-fixed-top-offset', '0px');
  };
  if (header) new ResizeObserver(sizeHeader).observe(header);
  sizeHeader();
  document.fonts.ready.then(sizeHeader);
})();
