/* ----- NAVIGATION BAR FUNCTION ----- */

function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
    menuIcon.style.display = "none"; // Hide hamburger menu icon
    closeIcon.style.display = "inline-block"; // Display close icon
  } else {
    menuBtn.className = "nav-menu";
    menuIcon.style.display = "inline-block"; // Display hamburger menu icon
    closeIcon.style.display = "none"; // Hide close icon
  }

  // Close the menu when a navigation item is clicked
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuBtn.className = "nav-menu";
      menuIcon.style.display = "inline-block"; // Display hamburger menu icon
      closeIcon.style.display = "none"; // Hide close icon
    });
  });
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["A Software Tester", "ISTQB-Certified", "A Traveler"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

/* ----- Hire Me button functionality ----- */
document.getElementById("hire-me-btn").addEventListener("click", function () {
  window.location.href = "mailto:ara.noor.ismot@gmail.com";
});



/*-------------Download-CV button Functionality -------- */

function initiateDownloadCV() {
  // Create an anchor element
  var downloadLink = document.createElement("a");

  // Set the download link attributes
  downloadLink.href = "https://docs.google.com/document/d/1zVBqTxLEx1RwMyx-QKshXYky1hyJbpkQn0yfGgcGVyU/edit?usp=sharing";
  downloadLink.target = "_blank";

  /*
  downloadLink.href = "assets/images/Noor-Ismot-Ara-CV.pdf"
  downloadLink.download = 'Noor-Ismot-Ara-CV.pdf';
  */

  // Trigger a click on the anchor element
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Add event listeners for all buttons with the "download-cv" class
var downloadButtons = document.querySelectorAll(".download-cv");
downloadButtons.forEach(function (button) {
  button.addEventListener("click", initiateDownloadCV);
});




// Add event listeners to each project box for opening a new link
document.getElementById("project-box-1").addEventListener("click", function () {
  openInNewTab("https://docs.google.com/document/d/1Y3g8g8plAe_jgeoWJAlmU7hRVC5h3YOB0K7vXYkJzQk/edit?usp=sharing");
});

document.getElementById("project-box-2").addEventListener("click", function () {
  openInNewTab("https://github.com/Noor-Ismot/Cypress-Ecommerce-TestSuite");
});

document.getElementById("project-box-3").addEventListener("click", function () {
  openInNewTab("https://docs.google.com/document/d/1vDeUN2Rwj_f4HuRLONr0qLcu_GnbgB91WRZ3fcBjCyg/edit?usp=sharing");
});


document.getElementById("project-box-4").addEventListener("click", function () {
  openInNewTab("https://docs.google.com/document/d/1habiC2CES6TadaVkji-rfXaKGjltJ381VU8QSsh6-80/edit?usp=sharing");
});

document.getElementById("project-box-5").addEventListener("click", function () {
  openInNewTab("https://docs.google.com/spreadsheets/d/1V0HZ9YdITMSXec1P4KG510F-wUmz1moJCvjIHPnPS6I/edit?usp=sharing");
});

document.getElementById("project-box-6").addEventListener("click", function () {
  openInNewTab("https://miro.com/app/board/uXjVNuGtFCI=/?share_link_id=908629907219");
});

// Define function to open URL in new tab
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}




// Back to top button
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 300) {
    scrolltop.classList.add("scrolltop--show");
  } else {
    scrolltop.classList.remove("scrolltop--show");
  }
});



// Form Submission 
document.getElementById("contact-form").addEventListener("submit", function (event) {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageTextarea = document.getElementById('message');
  var requiredMessage = document.getElementById('required-message');

  if (!nameInput.value || !emailInput.value || !messageTextarea.value) {
    requiredMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission
  } else {
    requiredMessage.style.display = 'none';
    // If all fields are filled, form submission proceeds (default behavior)
  }
});

emailjs.init("mXUCOBIqnXQmniEnZ");
/*------------Form Functions -------*/

function initiateEmail(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs.send('service_5ic9y38', 'template_1uxonls', formData)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      // Show success message
      document.getElementById("success-message").style.display = 'block';
      document.getElementById("required-message").style.display = 'none';

      // Reset the form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }, function (error) {
      console.log('FAILED...', error);
      alert('Oops! Something went wrong. Please try again later.');
    });
}

document.getElementById("submit-btn").addEventListener("click", initiateEmail)