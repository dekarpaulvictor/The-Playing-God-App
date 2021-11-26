# The Playing God App

Just a simple React app showing how to use the `useReducer` hook
to manage a global-ish state object.

### Inspiration

I got the inspiration for this app from [this](https://alligator.io/react/usereducer/)
blog post.

### What this is

This app is basically a combination of an unordered list of people, an input text field
and some buttons for performing various actions.

Each person has the following properties:

  - Name
  - Life status (alive or dead)
  - Life count (a number signifying how many times you can be revived if you're
    dead)
  - Wallet (a number indicating how many coins you have, 1 coin can buy 1 life)

Next to each peson's properties is a row of three `action` buttons: KILL,
REVIVE and BUY LIFE. The roles are self explanatory. Each button's `active`
state is tied to several factors. For example, the KILL button is always active
as long as the person is alive, the REVIVE button is active as long as the
person is either dead or his/her life count is 1 or more, and, as expected, the
BUY LIFE button is always active as long as the person's wallet has 1 or more
coins.

You can create a new life by entering a person's name in the only text field
available and clicking on the CREATE button. And, as expected, the CREATE
button will only be active as long as there is some content in the text field.

### Running

1. Clone this repo: `git clone https://github.com/dekarpaulvictor/The-Playing-God-App.git`
2. Change to app's root directory and run `yarn` or `yarn add` or `npm install`
   to install the app's dependencies
3. Run `yarn start` or `npm run start`
4. Access the app on `http:localhost:3000`, unless port 3000 is occupied

### To do

1. Styling
2. Documentation
3. Serious refactoring
4. Tests
