# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
The advice generator app generates a new piece of advice by clicking the dice icon.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/app-screenshot.png)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/advice-generator-app-PwuHpA1QoP)
- Live Site URL: [Live Site URL](https://doileo.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties, Flexbox for styling
- Mobile-first workflow
- JavaScript

### What I learned

Here are some of the code snippets I used from the resources I listed in the Useful Resources section below:

```css
@media (hover: hover) {
  .dice-image:hover {
    box-shadow: -1px 1px 88px 12px rgba(82, 255, 168, 1);
    transition: all ease-in-out 0.3s;
  }
}
```
In the CSS snippet above, I used the @media (hover: hover) query to apply a box shadow and transition effect to the dice image when it is hovered over. This ensures that the hover styles are only applied on devices that support hover.

```js
'use strict'

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
```
In the JavaScript snippet above, it's showed how to send a request to an API, parse the response, and handle any errors that may occur. I learned how to handle errors and display error messages to users, as well as how to extract data from a JSON response and update the DOM with that data.


### Continued development

After finishing this project, I'd like to continue practicing with the fetch() method and working with external APIs. I also plan to build more apps that generate random content, as I find this type of interactivity to be both fun and challenging.

### Useful resources

- [Resource 1](https://www.udemy.com/course/the-complete-javascript-course/) - These days I'm learning the JavaScript stuff from Jonas's course. One of the new things I've learned is how to use "use strict" mode. It's basically used at the top of the script and it works the "modern way".
- [Resource 2](https://www.youtube.com/watch?v=2AfzKmgqWUE) - This is a great video which helped me understand how to use fetch() nethod.


## Author

- Website - [Doina](https://doileo.github.io/portfolio/)
- Frontend Mentor - [@Doileo](https://www.frontendmentor.io/profile/Doileo)
- LinkedIn - [Doina Leovchin](https://www.linkedin.com/in/doinaleovchindeveloper/)

