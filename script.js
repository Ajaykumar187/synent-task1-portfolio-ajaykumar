const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', function () {
  const isOpen = navList.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

const navLinks = navList.querySelectorAll('a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navList.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});
