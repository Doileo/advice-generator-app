"use strict";

// Select DOM elements
const diceButton = document.querySelector(".button-container");
const adviceNumber = document.querySelector(".quote-title");
const adviceText = document.querySelector(".quote-text");

// API endpoint for advice
const apiUrl = "https://api.adviceslip.com/advice";

// Function to handle the dice button click event
const onDiceButtonClick = async () => {
  try {
    const advice = await fetchAdvice();
    updateAdvice(advice);
  } catch (error) {
    console.error("There was an issue with the API:", error);
    displayErrorMessage(
      "Sorry, we couldn't get advice at the moment. Please try again later."
    );
  }
};

// Fetch advice from API
const fetchAdvice = async () => {
  const response = await fetch(apiUrl, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.slip;
};

// Update the UI with the new advice
const updateAdvice = (advice) => {
  adviceNumber.textContent = `Advice #${advice.id}`;
  adviceText.textContent = advice.advice;
};

// Display error message to the user
const displayErrorMessage = (message) => {
  adviceNumber.textContent = "Oops!";
  adviceText.textContent = message;
};

// Add event listener to the dice button
diceButton.addEventListener("click", onDiceButtonClick);

// Add a label to the button for screen readers
diceButton.setAttribute("aria-label", "Get new advice by clicking this button");
