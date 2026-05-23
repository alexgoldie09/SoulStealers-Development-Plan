const sections = document.querySelectorAll('[id]');
const links = document.querySelectorAll('#sidenav a');
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('navOverlay');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector('#sidenav a[href="#' + entry.target.id + '"]');
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => observer.observe(s));

function toggleNav() {
  document.body.classList.toggle('nav-open');
}

hamburger.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);

document.querySelectorAll('#sidenav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
