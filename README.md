## Amazon clone created with ReactJS!

Live at: https://clone-with-login-stripe.web.app/

- Flexbox for styling
- Context API for data layer
- Checkout page (payment page)
- Cloud function to process Stripe payment (serverless)
- Firebase for real-time database (firestore)
- MERN stack

Used packages:

- npm install @material-ui/core
- npm install @material-ui/icons
- npm i react-router-dom
- npm i react-currency-format
- npm i firebase
- npm i @stripe/stripe-js
- npm i @stripe/react-stripe-js
- npm i axios

Used packages BACKEND:

- firebase cloud functions setup to host backend
- npm i express
- npm i cors
- npm i stripe

To emulate the backend via Firebase Functions write:

- firebase emulators:start

### Website hosted at:

Website hosted via Firebase Hosting at: [https://clone-with-login-stripe.web.app/]

### Code explenation

Hooks used:

- useHistory() from react-router-dom to get the Browser's history, but also used to navigate. F.e.:
  history.push("/payment") navigatesto the payment page.
- difference between <Link to"/"> and history.push("/") is that with history you do it **programatically** without using the styling of <Link>, while with Link you wrap an clickable element that when clicked navigates to it.

==================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
