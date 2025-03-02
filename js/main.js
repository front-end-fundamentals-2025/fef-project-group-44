/* Navigation icons scaling */

//Marquee
const marquee = document.querySelector(".marquee");
marquee.addEventListener("mouseover", function () {
  //animationPlayState was taken from this website and transformed into js format: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
  this.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", function () {
  this.style.animationPlayState = "running";
});

const navigationElements = document.getElementsByClassName(
  "navigation-user-options"
);

const socialElements = document.getElementsByClassName("social-links");

// Loop through the navigation menus (in case there's more than one like now)
for (let i = 0; i < navigationElements.length; i++) {
  // Get all icons inside the current navigation menu
  const navigationIcons = navigationElements[i].getElementsByTagName("i");

  // Scale when the mouse is over
  for (let j = 0; j < navigationIcons.length; j++) {
    navigationIcons[j].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)";
    });

    // Unscale back to the initial size when the mouse leaves
    navigationIcons[j].addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}

/* Social media icons scaling*/

for (let i = 0; i < socialElements.length; i++) {
  // Get all icons inside the current navigation menu
  const socialIcons = socialElements[i].getElementsByTagName("i");

  // Scale when the mouse is over
  for (let j = 0; j < socialIcons.length; j++) {
    socialIcons[j].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)";
    });

    // Unscale back to the initial size when the mouse leaves
    socialIcons[j].addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}

/* Countdown timer*/

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("May 2, 2025 23:59:59").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  Days.innerHTML = days < 10 ? "0" + days : days;
  Hours.innerHTML = hours < 10 ? "0" + hours : hours;
  Minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  Seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

const countdownInterval = setInterval(timer, 1000);
timer();
