# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Personal Notes

- SASS
  - [Intro to SASS](https://youtu.be/Zz6eOVaaelI)
  - replacing `@import` with `@use` & `@forward` [source](https://youtu.be/CR-a8upNjJ0)
  - watch on terminal with `sass --watch .\src\styles\sass:.\src\styles\css`
- [React Scroll Motion](https://www.npmjs.com/package/react-scroll-motion)
- [React Router in Typescript](https://www.pluralsight.com/guides/react-router-typescript)
- Illustration [source](https://themeisle.com/illustrations/)
- Sticky navbar. Issue with not being able to click the links after scroll is the `z-index`

  - Before that, found default method to make a sticky-navbar using `position: fixed`, and translated the syntax for typescript

  ```
  /* --- JavaScript --- */
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  /* --- TypeScript --- */
  window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementById("navbar");
  var element = document.querySelector("#navbar");
  if (element !== null) {
    if (element instanceof HTMLElement) var sticky = element.offsetTop;
  }
  function myFunction() {
    if (navbar !== null) {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        console.log("added");
      } else {
        navbar.classList.remove("sticky");
        console.log("removed");
      }
    }
  }
  ```

  Sources: [Using fixed](https://www.w3schools.com/howto/howto_js_navbar_sticky.asp), [TypeScript for .offsetTop](https://github.com/microsoft/TypeScript/issues/34694)
