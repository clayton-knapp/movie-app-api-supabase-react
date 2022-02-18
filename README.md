# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

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




In order to get searched movies to display as "in watchlist"
Everytime you render a searched movie item, you fetch the watchlist and map through the watchlist and see if any of the watchlist items ids match the searched movie item id
If they don't just render the movie item
If they DO render the watchlist movie item OR render the movie with styling that says IN WATCHLIST