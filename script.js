const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu"); //show menu toggle
});
// close menu when clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click()); //close toggle open menu when clicked

// close nav links when clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});
  

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor : true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
// responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }

});



 