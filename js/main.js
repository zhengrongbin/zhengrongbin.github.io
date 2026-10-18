
'use strict';
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  document.documentElement.classList.add('js');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  window.matchMedia('(min-width: 951px)').addEventListener('change', () => setMenu(false));
}
const search = document.querySelector('#pub-search');
const year = document.querySelector('#pub-year');
if (search && year) {
  const publications = Array.from(document.querySelectorAll('.publication'));
  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    let shown = 0;
    publications.forEach(item => {
      const matches = item.textContent.toLocaleLowerCase().includes(query) &&
        (year.value === 'all' || item.dataset.year === year.value);
      item.hidden = !matches;
      if (matches) shown++;
    });
    const message = document.querySelector('#no-results');
    if (message) message.hidden = shown !== 0;
    const count = document.querySelector('#publication-count');
    if (count) count.textContent = `${shown} of ${publications.length} publications shown`;
  }
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  filter();
}
