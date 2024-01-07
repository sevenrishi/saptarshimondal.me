////////////////////////////////////////////
//SLIDER JAVASCRIPT SECTION
///////////////////////////////////////////

const sliderStart = function () {
  const rightBtn = document.querySelector(".right-btn");
  const leftBtn = document.querySelector(".left-btn");
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const dots = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //////////////////////////////

  const createDots = function () {
    slides.forEach((_, i) => {
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="dot yellow-color" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };

  //////////////////////////////

  // ///////////////////////////////////

  const goToSlide = function (slide) {
    slides.forEach(
      (silde, i) =>
        (silde.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // //////////////////////////////////////

  ///////////////////////////////////
  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };
  init();
  ////////////////////////////////

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  leftBtn.addEventListener("click", nextSlide);
  rightBtn.addEventListener("click", preSlide);
  ////////////////////////////
  //Key control
  //////////////////////////////

  document.addEventListener("keydown", (e) => {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && preSlide();
  });

  dots.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });

  // Auto advance slides
  setInterval(() => {
    nextSlide();
  }, 3000); // Adjust the interval duration as desired
};

sliderStart();



// Get the current page URL
const currentUrl = window.location.href;

// Get all the anchor elements in the navigation
const navLinks = document.querySelectorAll("nav a");

// Loop through each anchor element
navLinks.forEach(link => {
  // Check if the href matches the current URL
  if (link.href === currentUrl) {
    // Add the 'active' class to the parent list item
    link.parentNode.classList.add("active");
  }
});

// Define an array of welcome texts in different languages
var welcomeTexts = [
  'Welcome !',          // English
  'স্বাগত !',             // Bengali
  'नमस्ते !',             // Hindi
  //'வணக்கம் !',           // Tamil
  //'స్వాగత ం !',           // Telugu
  //'ಸ್ವಾಗತ !',             // Kannada
  //'സ്വാഗതം !',           // Malayalam
  //'સ્વાગત !',             // Gujarati
  //'ਸਵਾਗਤ ਹੈ',           // Punjabi
  //'ଆପନାଙ୍କର ସ୍ୱାଗତ'      // Odia
];

// Get the welcome text element
var welcomeElement = document.getElementById('welcome-text');

// Function to type out the welcome text in each language
function typeWelcomeText(index) {
  var currentText = welcomeTexts[index];
  var currentLength = 0;
  var interval = setInterval(function() {
    if (currentLength <= currentText.length) {
      welcomeElement.textContent = currentText.substr(0, currentLength);
      currentLength++;
    } else {
      clearInterval(interval);
      setTimeout(function() {
        typeWelcomeText((index + 1) % welcomeTexts.length);
      }, 1000); // Delay before moving to the next language (adjust as desired)
    }
  }, 150); // Speed at which the letters are typed (adjust as desired)
}

// Start typing out the welcome text
typeWelcomeText(0);

var SaptarshiMondal = [
  'Saptarshi Mondal',          // English
  'সপ্তর্ষি মন্ডল',             // Bengali
  'सप्तर्षि मोंडल',             // Hindi
  'சப்தர்ஷி மொண்டல்',           // Tamil
  'సప్తర్షి మొండల్',           // Telugu
  //'ಸ್ವಾಗತ !',             // Kannada
  //'സ്വാഗതം !',           // Malayalam
  'સપ્તર્ષિ મોંડલ',             // Gujarati
  //'ਸਵਾਗਤ ਹੈ',           // Punjabi
  //'ଆପନାଙ୍କର ସ୍ୱାଗତ'      // Odia
];

// Get the welcome text element
var welcomeSaptarshi = document.getElementById('Saptarshi-Mondal');

// Function to type out the welcome text in each language
function typeSaptarshiMondal(index) {
  var currentText = SaptarshiMondal[index];
  var currentLength = 0;
  var interval = setInterval(function() {
    if (currentLength <= currentText.length) {
      welcomeSaptarshi.textContent = currentText.substr(0, currentLength);
      currentLength++;
    } else {
      clearInterval(interval);
      setTimeout(function() {
        typeSaptarshiMondal((index + 1) % SaptarshiMondal.length);
      }, 500); // Delay before moving to the next language (adjust as desired)
    }
  }, 90); // Speed at which the letters are typed (adjust as desired)
}

// Start typing out the welcome text
typeSaptarshiMondal(0);


//Dark button

/*const darkThemeBtn = document.getElementById('dark-theme-btn');
const icon = document.getElementById('icon');
const moonIcon = document.getElementById('moon-icon');

// Hide the moon icon by default
moonIcon.style.display = 'none';

darkThemeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  const isDarkTheme = document.body.classList.contains('dark');
  
  if (isDarkTheme) {
    icon.style.display = 'none'; // Hide the sun icon
    moonIcon.style.display = 'inline-block'; // Show the moon icon
    moonIcon.style.color = '#fff'; // Set the moon icon color to white
  } else {
    icon.style.display = 'inline-block'; // Show the sun icon
    moonIcon.style.display = 'none'; // Hide the moon icon
    icon.style.color = ''; // Reset the sun icon color to default
  }
});*/


//-------------- Filter --------------

const filterOptions = document.querySelectorAll('.filter-option');
const skills = document.querySelectorAll('.skill');

filterOptions.forEach(option => {
  option.addEventListener('click', function() {
    const selectedFilters = [];
    const clickedFilter = this.getAttribute('data-filter');
    
    filterOptions.forEach(option => {
      option.classList.remove('active');
    });
    
    this.classList.add('active');
    
    skills.forEach(skill => {
      const skillCategory1 = skill.getAttribute('data-category1');
      const skillCategory2 = skill.getAttribute('data-category2');
      
      if (clickedFilter === 'all' || skillCategory1 === clickedFilter || skillCategory2 === clickedFilter) {
        skill.style.display = 'block';
      } else {
        skill.style.display = 'none';
      }
    });
  });
});



function showPopup(projectName, projectImageSrc, projectDescription, websiteURL, facebookURL, twitterURL, instagramURL, linkedinURL, githubURL) {
  const popup = document.getElementById("popup");
  const projectImage = document.getElementById("projectImage");
  const projectTitle = document.getElementById("projectTitle");
  const projectDescriptionElement = document.getElementById("projectDescription");

  // Set the project details
  projectImage.src = projectImageSrc;
  projectTitle.textContent = projectName;
  projectDescriptionElement.textContent = projectDescription;
  
  document.getElementById("websiteLink").href = websiteURL;
  // Set social media links
  document.getElementById("facebookLink").href = facebookURL;
  document.getElementById("twitterLink").href = twitterURL;
  document.getElementById("instagramLink").href = instagramURL;
  document.getElementById("linkedinLink").href = linkedinURL;
  document.getElementById("githubLink").href = githubURL;

  // Show the popup
  popup.style.display = "block";
}
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}