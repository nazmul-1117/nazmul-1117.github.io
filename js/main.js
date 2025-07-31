// === Mobile Menu Toggle ===
function toggleMenuBar() {
  document.querySelector('.navbar .menu-list')?.classList.toggle('active');
}

document.querySelectorAll('.navbar .menu-list a').forEach(link => {
  link.addEventListener('click', () =>
    document.querySelector('.navbar .menu-list')?.classList.remove('active')
  );
});

// === Scroll-Based Navbar Highlighting ===
function activateNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar .menu-list a');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 70;
    const height = section.clientHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.href.includes(`#${current}`));
  });
}

window.addEventListener('scroll', activateNavLink);
document.addEventListener('DOMContentLoaded', activateNavLink);

// === Scroll-To-Top Button ===
const scrollUp = document.querySelector('.scroll-up');
if (scrollUp) {
  window.addEventListener('scroll', () => {
    scrollUp.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });

  scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === Typing Text Animation ===
const typingText = document.querySelector('.text-section h2:last-of-type');
const phrases = ["An AI & Machine Learning Enthusiast", "Data Explorer", "Problem Solver"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (!typingText) return;
  typingText.textContent = phrases[phraseIndex].substring(0, charIndex++);
  if (charIndex <= phrases[phraseIndex].length) {
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (!typingText) return;
  typingText.textContent = phrases[phraseIndex].substring(0, charIndex--);
  if (charIndex >= 0) {
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

// === Navbar Scroll Shadow Effect ===
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 60);
});

// === Education Tabs Activation ===
document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.educations-types .tab-link');
  const tabContents = document.querySelectorAll('.educations-contents .tab-content');

  if (tabLinks.length > 0) {
    tabLinks[0].classList.add('active');
    document.getElementById(tabLinks[0].dataset.tab)?.classList.add('active');
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      link.classList.add('active');
      document.getElementById(link.dataset.tab)?.classList.add('active');
    });
  });
});
