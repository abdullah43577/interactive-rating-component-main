"use strict";

const ratings = document.querySelectorAll(".ratingnumb");
const btn = document.querySelector("button");
const ratingMessage = document.querySelector(".ratingMessage");
const mainPage = document.querySelector(".mainPage");
const reviewMessage = document.querySelector(".reviewMessage");
const warningMessage = document.querySelector(".warningMessage");

// console.log(btn.textContent);
// console.log(ratings);
let rated = "";
for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    rated = ratings[i].textContent;
    //console.log(rated);
    ratingMessage.textContent = `You selected ${rated} out of ${ratings.length}`;

    //ratings[i].style.backgroundColor = "white";
    ratings[i].classList.toggle("rating--active");
  });
}

btn.addEventListener("click", () => {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].classList.contains("rating--active")) {
      mainPage.classList.add("hidden");
      reviewMessage.classList.remove("hidden");
    } else {
      warningMessage.textContent = `Please select the appropriate rating, then try again`;

      setTimeout(() => {
        warningMessage.textContent = "";
      }, 3000);
    }
  }
});
