// Select the toggle button and the ingredients content
const plusButton = document.querySelector(".plus-button");
const ingredientsContent = document.querySelector(".ingredients-content");

plusButton.addEventListener("click", function () {
  // Toggle the "hidden" class
  // This was taken from previous work on profile assignment and modified to fit the current assignment: https://github.com/front-end-fundamentals-2025/fef-portfolio-elinaasratyan/blob/main/js/main.js
  ingredientsContent.classList.toggle("hidden");

  // Change the button text from "+" to "-" or vice versa
  if (ingredientsContent.classList.contains("hidden")) {
    plusButton.textContent = "+";
  } else {
    plusButton.textContent = "-";
  }
});
