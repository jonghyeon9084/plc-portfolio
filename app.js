document.getElementById('print').addEventListener('click', () => window.print());
document.querySelectorAll('[data-media]').forEach(button => {
  button.addEventListener('click', () => {
    const showAI = button.dataset.media === 'ai';
    document.getElementById('poco-arm').hidden = showAI;
    document.getElementById('poco-ai').hidden = !showAI;
    document.querySelectorAll('[data-media]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    if (!showAI) document.getElementById('poco-video').pause();
  });
});
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
