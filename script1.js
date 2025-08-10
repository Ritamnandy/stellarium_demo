  // first autoplay
    let counter = 1;
    setInterval(function(){
        document.getElementById('radio'+counter).checked = true;
        counter++;
        if(counter>4){
            counter = 1;
        }
    },3000);



// second autoplay
    let counter2 = 1;
    setInterval(function() {
        document.getElementById('radios2-' + counter2).checked = true;
        counter2++;
        if(counter2 > 4) {
            counter2 = 1;
        }
    }, 3000); 
// third autoplay    

 let counter3 = 1;
    setInterval(function() {
        document.getElementById('radios3-' + counter3).checked = true;
        counter3++;
        if(counter3 > 4) {
            counter3 = 1;
        }
    }, 3000); 


    //nav bar
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