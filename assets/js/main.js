/*=============== Show Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== Menu Hidden =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== Show Cart ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== Cart Show =====*/
/* Validate if constant exists */
if(cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}

/*===== Cart Hidden =====*/
/* Validate if constant exists */
if(cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}


/*=============== Show Login ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-toggle'),
      loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}

/*=============== Slide Home ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop:"true",

    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
  },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/*=============== Change header color ===============*/
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== SLIDE COLEÇÃO ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween:16,
  centeredSlides: true,
  slidesPerView: 3,
  loop:"true",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY > 350) scrollUp.classList.add('show-scroll'); 
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

/*=============== Darkmode ===============*/

var icon = document.getElementById("moon");
var body = document.body;

// Verify User preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    icon.src = "../Urban Rebel/assets/img/sun.png";
} else {
    icon.src = "../Urban Rebel/assets/img/moon.png";
}

icon.onclick = function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        icon.src = "../Urban Rebel/assets/img/sun.png";
        localStorage.setItem("dark-mode", "enabled");
    } else {
        icon.src = "../Urban Rebel/assets/img/moon.png";
        localStorage.setItem("dark-mode", "disabled");
    }
};