# React and Redux sample #

This is a sample to show how I personally use React and Redux inside a real word application.

<img src="https://david-dm.org/ematipico/react-redux-sample.svg" />

## Description of the project ##

The sample is an attempt of a small eCommerce where you have a list of items that you can browse. You can add them to the cart and make your purchase through a checkout form. There's nothing fancy behind it but this is the list of the main concepts used inside the sample:

1. Every screen is inside a container, a react component that wraps other components and that is connected to the redux store.
   Every container is configured inside react router;
2. There are no props type checks. Everything is done using Flow. Props type checks will be dropped off eventually, so better start using a type check tool and I ended up using flow, which looked like quicker to implement;
3. Selectors everywhere. The containers access to the store using selectors;
4. Every container has a dedicated sass file;
5. The testing suite that I use is [Ava](https://github.com/avajs/ava). Ava uses [Tape](https://github.com/substack/tape) under the hoods, which is my primary testing tool; react components are tested using [enzyme](https://github.com/airbnb/enzyme)
6. Main sub libraries used
   - redux-saga
   - react-router-dom
   - redux-form


## How to run it ##

```sh
git clone https://github.com/ematipico/react-redux-smaple.git
cd react-redux-smaple
npm install
npm start
```
If you wish to check the production version you can run the command

```sh
npm run deploy
```
Webpack will create the bundle and the css files inside the dist folder and a new instance of broser sync will be launched. I will need to open a browser and nativate to [http://localhost:3000](http://localhost:3000)

This will kick off browser sync and it will run the application using Webpack. If you want run the test suite, execute the following command

```sh
npm run test
```
