// Navigation Bar Function
function myMenuFunction() {
  const menuBtn = document.getElementById('myNavMenu');

  if (menuBtn.className === 'nav-menu') {
    menuBtn.className += ' responsive';
  } else {
    menuBtn.className = 'nav-menu';
  }
}

// Add Shadow Bar on Navigation While Scrolling
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById('header');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
    navHeader.style.height = '70px';
    navHeader.style.lineHeight = '70px';
  } else {
    navHeader.style.boxShadow = 'none';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';
  }
}

// Typing Effect
const typingEffect = new Typed('.typedText', {
  strings: ['Front End Dev', 'Database Admin', 'IT Support', 'Developer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// SR Home
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 200 });

// SR Project Box
sr.reveal('.project-box', { interval: 200 });

// Headings
sr.reveal('.top-header', {});

// About Info
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

// About Skills
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true,
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

// Change active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
