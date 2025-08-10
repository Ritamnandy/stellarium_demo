
    
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    let interval = setInterval(nextSlide, 3000);

     function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    
    function showSlide(index) {
      let i;
      slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
      });
    }


    // Show first slide
    showSlide(current);

    // add button slide
document.getElementById('next').addEventListener('click', () => {
  clearInterval(interval);           // optional: stop auto sliding on manual interaction
  nextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  clearInterval(interval);
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// nav menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  //when scrolled
  const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});