/**Off canvas menu**/
 
let body = document.querySelector('body');
let navToggle = document.querySelector('.nav-toggle');
let offCanvasLinks = document.querySelectorAll('#offcanvas nav ul li a');
let navClose = document.querySelector('.close');
let backToTop = document.querySelector('.back-to-top');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar .navbar-menu .nav-link");

//Offcanvas menu fixes
navToggle.addEventListener('click',()=>{
    navShow();
});

navClose.addEventListener('click',()=>{
    hideNav();
});

offCanvasLinks.forEach(offCanvasLink =>{
    offCanvasLink.addEventListener('click',()=>{
        hideNav();
    });    
});

function navShow(){
    body.style.transition = '.5s ease';
    body.classList.add('open');
}

function hideNav(){
    body.style.transition = '.5s ease';
    body.classList.remove('open');
}
// Back to top fixes
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
};

backToTop.addEventListener('click',()=>{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Add active class when scroll through sections
window.onscroll = () => {
  var current = "hero";

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });

//Desktop menu
  navLinks.forEach(navLink => {
    navLink.classList.remove("active");
    if (navLink.getAttribute("href")=== '#' + current ) {
      navLink.classList.add("active");
    }
  });

  //OffCanvas menu
  offCanvasLinks.forEach(offCanvasLink => {
    offCanvasLink.classList.remove("active");
    if (offCanvasLink.getAttribute("href")=== '#' + current ) {
      offCanvasLink.classList.add("active");
    }
  });


};


$( function () {
   'use strict';

/**navbar shrink**/
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 90) {
        $(".navbar").addClass("navbar-shrink");
    }else{
        $(".navbar").removeClass("navbar-shrink");
    }
});


// active link navbar
  $('.navbar .nav-item .nav-link').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

 //Portfolio Section
  let btns = $("#portfolio .button-group button");

  btns.click(function(e){

    $("#portfolio .button-group button").removeClass('active');

    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');

    $("#portfolio .grid").isotope({
      filter:selector
    });
    return false;
  })



/**testimonials carousel**/
$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
})

/**portfolio image popup**/
$('.gallery-popup-item').magnificPopup({
  type: 'image',
  gallery:{enabled:true}
});








});

