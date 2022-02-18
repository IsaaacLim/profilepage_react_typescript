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

- Customized styling for element in array [example](https://stackoverflow.com/questions/56859756/reactjs-styling-each-element-of-array-with-different-styles)
- Programmatically Navigate with React Router, using [useNavigate](https://stackoverflow.com/questions/69868956/how-to-redirect-in-react-router-v6#:~:text=I%20found%20another%20way%20to%20do%20this%3A), also a good read about [other methods](https://www.telerik.com/blogs/programmatically-navigate-with-react-router)
- Hints that helped figure out how to pass props to functional components [main](https://stackoverflow.com/questions/39963565/react-passing-down-props-to-functional-components#:~:text=You%20would%20need%20to%20pass%20down%20each%20prop%20individually%20for%20each%20function%20that%20you%20needed%20to%20call), [getting the basics](https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/)
- Finding Window width to be used as a dynamic variable [stackoverflow](https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs#:~:text=Using%20Hooks%20(React,a%20useWindowDimensions%20hook.)
- Inline styling with returned styles

  ```
  const functionStyle = useSpring({ ....returns dynamic style.... });

  return (
    <div style={{width: "10", height: "10"}} />
    <div style={functionStyle} />
    <div style={{width: "10", ...functionStyle}}>
  )
  ```

### Checklist

- components
  - ImgCard:
  - NavBar:
  - NavSlider:
  - SocialsBar: Completed
- data (others are Completed)
  - works: Add in image
- images
  - removed unused images
- interfaces (Completed)
- pages
  - About_old: Delete
  - About:
    - no text, image highlight
    - modularize padding/margin values
  - Home:
  - Test: Give a "no testing in progress sign"
  - Works:
    - complete data
    - maybe change background color
    - split Deck as cardDeck component
- styles:
  - remove unused chinese character
  - organize styles
  - `vh` to `vw`
  - kebab case or camel case
- Others
  - Remove extra default files?
  - Clean this README
  - test on other browsers, eg: -webkit-user-select & user-select
  - have Home & about render with slight animation
