window.addEventListener("scroll", function() {
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 60);
  })



// sticky logo nama 
window.addEventListener("scroll", function() {
    var nav = document.querySelector(".logocolor");
    nav.classList.toggle("logonamascroll", window.scrollY > 60);
  })
  


// sticky button navbar 
window.addEventListener("scroll", function() {
  var nav = document.querySelector(".btn-nav");
  nav.classList.toggle("btn-nav_scroll", window.scrollY > 60);
})








// navbar responsive
const navbar = document.querySelector('ul');
const navOpen = document.querySelector('#nav_open');
const navClose = document.querySelector('#nav_close');

const navOpenBtn = () => {
  navbar.style.display = 'flex';
  navOpen.style.display = 'none';
  navClose.style.display = 'inline-block';
}
navOpen.addEventListener('click', navOpenBtn)

const navCloseBtn = () => {
  navbar.style.display = 'none';
  navOpen.style.display = 'inline-block';
  navClose.style.display = 'none';
}
navClose.addEventListener('click', navCloseBtn)








// swiper js ke 1 
var swiper = new Swiper(".foto_ke1", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centerSlide: "true",
  fade: "true",
  loop: true,
  grabCursor: "true",
  freeMode: true,

  autoplay: {
    delay:3200,
    disableOnInteraction: false,
  },

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  }
});




// swiper js ke 2 
var swiper = new Swiper(".foto_ke2", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 3200,
    reverseDirection: true,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  }
});



