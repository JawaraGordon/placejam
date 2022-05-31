# PlaceJam

Locate and rate basketball courts in your local area.

## Description

A React app that allows users to find basketball courts in their local area.

You can search by name, click on an address to open a google maps link, “like” your favorite locations add your own courts to the list. You can also check the weather using an Open Weather API widget. Play the "PlaceJam" theme song by using the audio player.

PlaceJam uses a local json server to host a local db.json file that stores it's data. This app also uses react router to navigate between components using a navbar and navlink.

- Finding a way to hide my API key from a public GitHub effectively was one is the biggest challenges of this project. My commit history had to be completely deleted to remove any record of the key. (Thanks for the warning GitGuardian!!) Learning to use the correct naming convention for routes was another takeaway from this experience.

- In the future I hope to add a backend server to allow users to login to the app. This will allow them to save changes to their data along with allowing them access to social functions like chat and finding a pick-up game.

### How to Install and Run the Project

- fork and clone the repo

- install dependencies

- use the navbar to move between areas of the app

- “Home” takes you to the main screen. This component includes a search field that will filter the displayed courts by name as you type.

- “About” loads a component that displays a graphic with information about the purpose of the app
- “Sign Up” brings you to an area that allows you to join as a member. The form asks for your name, email and level of expertise.

- “Add” loads a component that shows a controlled form. This allows users to add their own court to the list of available options shown on the home page.

## Setup

`src` folder contains the following files:

```txt
src/
├── index.css
├── index.js
└── components/
    ├── About.js
    ├── App.js
    ├── CourtCard.js
    ├── CourtContainer.js
    ├── Header.js
    ├── Hero.js
    ├── NavBar.js
    ├── NewCourtForm.js
    ├── Search.js
    ├── SignUp.js
    ├── Weather.js
    └── WeatherCard.js
```

### index.js

`index.js` loads the `BrowserRouter` component from React Router, as well as `App` as the top level component.

# Dependencies

run $npm install

run $npm install -g concurrently (runs multiple commands concurrently)

$npm install react-router-dom@5.3.0

run $npm install -g json-server

## Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Opens [http://localhost:3000] in your browser with json server running on port 4004 in the background.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Resources

- [React Router](https://v5.reactrouter.com/web/guides/quick-start)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
