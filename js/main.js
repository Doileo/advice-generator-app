'use strict';

const diceButton = document.querySelector(".button-container");
const adviceNumber = document.querySelector(".advice");
const adviceText = document.querySelector(".quote");
const apiUrl = "https://api.adviceslip.com/advice";

//Event of button click
diceButton.addEventListener("click", () => {
  //Request Data
  fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      //Inject to DOM
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});