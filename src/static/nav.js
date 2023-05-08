const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(navLink => {
  navLink.addEventListener('mouseover', () => {
     navLink.style.color = '#ffd700';
  });
  
  navLink.addEventListener('mouseout', () => {
    navLink.style.color = '';
  });
});
