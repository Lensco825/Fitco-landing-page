var menu = document.querySelector('.menu');
var nav = document.querySelector('nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('navbar');
})

var hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

 hidden.forEach((el) => observer.observe(el));
  