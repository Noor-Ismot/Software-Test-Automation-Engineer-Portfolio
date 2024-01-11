/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
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
  strings: ["Software Tester", "Traveler", "Aspire Developer"],
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


/* ----- DOWNLOAD CV BUTTON FUNCTIONALITY ----- */
const downloadCVButtons = document.querySelectorAll('.btn[aria-label="Download CV"]');

downloadCVButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const cvFilePath = '/assets/images/Noor-Ismot-Ara-CV.pdf';

    // Create a temporary link element
    const downloadLink = document.createElement('a');

    // Set the href attribute to the path of your CV file
    downloadLink.href = cvFilePath;

    // Set the download attribute with the desired file name
    downloadLink.download = 'Noor-Ismot-Ara-CV.pdf';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the link to start the download
    downloadLink.click();

    // Remove the link from the body after download starts
    document.body.removeChild(downloadLink);
  });
});

/*Tester Journal Button */
function redirectToExternalLink() {
  window.open("https://medium.com/@ara.noor.ismot", "_blank")
}

// Event listener for the button click
document.getElementById("testerJournalBtn").addEventListener("click", redirectToExternalLink);


/* ----- HIRE ME BUTTON FUNCTIONALITY ----- */
const hireMeButton = document.getElementById('hireMeBtn');

hireMeButton.addEventListener('click', function () {
  // Add my email address
  const email = 'ara.noor.ismot@gmail.com';

  // Create the mailto link
  const mailtoLink = `mailto:${email}`;

  // Open the user's email client
  window.location.href = mailtoLink;
});

// Add an event listener to each project-box
const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach((box) => {
  box.addEventListener('click', function () {
    // Retrieve the external link from the data-href attribute
    const externalLink = this.getAttribute('data-href');

    // Open the external link in a new tab
    window.open(externalLink, '_blank');
  });
});

// Send Message function
function sendMessage() {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  // Validate input (you may want to add more robust validation)
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Prepare the data to be sent to the server
  const data = {
    name,
    email,
    message
  };

  // Send a POST request to the server
  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      alert('Message sent successfully!');
      // You can add more logic here if needed
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    });
}

// Add an event listener for the Send Message button
document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);
