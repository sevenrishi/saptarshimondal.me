var darkbtn = document.getElementById("dark-btn");
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
moonIcon.style.display = 'none';

darkbtn.addEventListener('click', function() {
  darkbtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    moonIcon.style.display = 'inline-block';
    //moonIcon.style.color = '#fff';
    sunIcon.style.display = 'none';
  } else {
    localStorage.setItem("theme", "dark");
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
    sunIcon.style.color = '';
  }
});

// Check the stored theme when the page loads
if (localStorage.getItem("theme") === "light") {
  darkbtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  moonIcon.style.display = 'inline-block';
  //moonIcon.style.color = '#ffffff';
  sunIcon.style.display = 'none';
} else {
  localStorage.setItem("theme", "dark");
  darkbtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  sunIcon.style.display = 'inline-block';
  sunIcon.style.color = '';
}


var darkbtn2 = document.getElementById("dark-btn2");
const sunIcon2 = document.getElementById('sun-icon2');
const moonIcon2 = document.getElementById('moon-icon2');
sunIcon2.style.display = 'none';
darkbtn2.onclick = function(){
    darkbtn2.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme", "dark");
        sunIcon2.style.display = 'inline-block';
        sunIcon2.style.color = '#fff'
        moonIcon2.style.display = 'none';
    }
    else{
        localStorage.setItem("theme", "light");
        sunIcon2.style.display = 'none';
        moonIcon2.style.display = 'inline-block';
        moonIcon2.style.color = '';
    }
}

if(localStorage.getItem("theme")=="light"){
    darkbtn2.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}











var settingsmenu = document.querySelector(".settings-menu");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
var settingsmenu = document.querySelector(".settings-menu");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

