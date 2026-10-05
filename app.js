document.getElementById('print').addEventListener('click', () => window.print());
const links = [...document.querySelectorAll('nav a')];
const targets = [...document.querySelectorAll('#intro, .project, #profile')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.id === 'poco' ? 'embedded' : entry.target.id;
      links.forEach(link => {
        if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  targets.forEach(target => observer.observe(target));
}
