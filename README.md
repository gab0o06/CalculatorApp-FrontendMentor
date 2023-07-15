# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Calculator app solution](#frontend-mentor---calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `local storage` and have any additional changes saved in the browser

### Screenshot

![imageChallengeSolution](https://i.imgur.com/Z4Muni7.png)

### Links

- Solution URL: [Add solution URL here](https://frabjous-faun-d3edec.netlify.app/)
- Live Site URL: [Github](https://github.com/gab0o06)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript

### What I learned

I've reinforce the concepts of Reactjs, because it's one of my firsts projects using this tecnology. For example, a challenge that I had was to change the themes colors with the inputs. 

```ts
  const toggleTheme = (themeChange: string) => {
    const actualTheme = document.getElementById(document.body.classList[0]);
    const nextTheme = document.getElementById(themeChange);
    document.body.classList.replace(document.body.classList[0], themeChange);

    actualTheme?.classList.add("opacity");
    nextTheme?.classList.remove("opacity");
    localStorage.setItem("theme", themeChange);
  };

```

### Continued development

I want to learn more about React hooks and some astro or nextjs estructure, cause they are very usefull tecnologies for development nowadays.

## Author

- Website - [gab0o06](https://github.com/gab0o06)
- Frontend Mentor - [@gab0o06](https://www.frontendmentor.io/profile/gab0o06)