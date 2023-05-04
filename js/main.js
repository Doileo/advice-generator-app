'use strict';

// Get elements from the DOM
const diceButton = document.querySelector(".button-container");
const adviceNumber = document.querySelector(".quote-title");
const adviceText = document.querySelector(".quote-text");

// API endpoint for advice
const apiUrl = "https://api.adviceslip.com/advice";

// Handle button click event
diceButton.addEventListener("click", () => {

  // Send request to the advice API
  fetch(apiUrl, { cache: "no-cache" })
    .then((response) => {

      // Check for errors and handle them
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON response
      return response.json();
    })
    .then((response) => {
      // Extract the advice data from the response
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      // Update the advice number and text in the DOM
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    })
    .catch((error) => {
      // Handle errors from the API request
      console.error("There was an issue with the API:", error);
      // display an error message to the user and give them the option to try again
    });
});

