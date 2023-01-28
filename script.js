"use strict";

const ratings = document.querySelectorAll(".ratingnumb");
const btn = document.querySelector("button");
const ratingMessage = document.querySelector(".ratingMessage");
const mainPage = document.querySelector(".mainPage");
const reviewMessage = document.querySelector(".reviewMessage");
const warningMessage = document.querySelector(".warningMessage");

let rated = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    // check for active rating
    (() => {
      ratings.forEach((rating) => {
        if (rating.classList.contains("rating--active"))
          rating.classList.remove("rating--active");
      });
    })();

    rating.classList.add("rating--active");

    rated = rating.textContent;
    ratingMessage.textContent = `You selected ${rated} out of ${ratings.length}`;
  });
});

btn.addEventListener("click", () => {
  ratings.forEach((rating) => {
    if (rating.classList.contains("rating--active")) {
      mainPage.classList.add("hidden");
      reviewMessage.classList.remove("hidden");
    } else {
      warningMessage.textContent = `Please select the appropriate rating, then try again`;

      setTimeout(() => {
        warningMessage.textContent = "";
      }, 3000);
    }
  });
});
