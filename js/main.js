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