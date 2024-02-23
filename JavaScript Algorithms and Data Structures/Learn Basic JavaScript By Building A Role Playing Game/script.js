// In JS a variable is used to hold a value. To use a variable, you must first declare it. E.g a variable called 'xp' let xp;
// Variables can be assigned a value. When you do this while you declare it, this is called initialization. E.g let xp = 0;
// When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase. The first word is lowercase, and the first letter of every following word is uppercase.

// JS has multiple data types, the ones used above were Numbers. Next you will use is the String. Strings are used to store things like words or text. Strings are surrounded with double quotes, single quotes or backticks. E.g
// let developer = "Naomi";

// The player's inventory in your game will be able to hold multiple items. You will need to use a data type that can do this. An array can be used to hold multiple values. For example:
// let order = ["first", "second", "third"];
// This is an array which holds three values. Notice how the values are separated by commas.

// JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.
// One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:
// let h1 = document.querySelector("h1");
// Note that h1 is a string and matches the CSS selector you would use.

// If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

// Functions are special tools that allow you to run sections of code at specific times. You can declare functions using the function keyword. Here is an example of a function called functionName - note the opening and closing curly braces. Thes indicate the section of code that is within the function.
// function functionName() { }

/*
 * button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.
 * You can access properties in JavaScript a couple of different ways. The first is with dot notation. Here is an example of using dot notation to set the onclick property of a button to a function reference.
 * button.onclick = myFunction;
 * In this example, button is the button element, and myFunction is a reference to a function. When the button is clicked, myFunction will be called.
 */

/**
 * The innerText property controls the text that appears in an HTML element. For example:
 * <p id="info">Demo content</p>
 * const info = document.querySelector("#info");
 * info.innerText = "Hello World";
 * The following example would change the text of the p element from Demo content to Hello World.
 */

/**
 * You need to wrap the text Store in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash \. Here is an example:
 * const escapedString = "Naomi likes to play \"Zelda\" sometimes."
 */

/**
 * When you have repetition in your code, this is a sign that you need another function. Functions can take parameters, which are values that are given to the function each time it is run. Here is a function that takes a parameter called param:
 * function myFunction(param) {
    console.log(param);
}
 */

/**
 * You  previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
 * Objects are indicated by curly braces. An empty object would like {}
 */

/**
 * Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds. For example, here is an object with a key of name set to "Quincy Larson".
 * {
 *  name: "Quincy Larson"
 * }
 * Just like array values, object properties are separated by a comma. Note that, when the property name has more than one word, you'll need to surround it in quotes. For example:
 * {
  name: "Naomi",
  "favorite color": "purple"
}
 */

/**
 * You pass arguments by including them within the parentheses of the function call.
 * For example, calling myFunction with an arg argument would look like:
 * myFunction(arg);
 */

/**
 * To pass in only the first element of an array, you add [0] at the end of the variable. Example
 * myFunction(arg[0]);
 * This is called bracket notation.
 * Values in an array are accessed by index.
 * Indices are numerical values and start at 0 - this is called zero-based indexing.
 * arg[0] would be the first element in the arg array.
 */

/**
 * There is a shorthand way to add or subtract from a variable called compound assignment. For example, changing num = num + 5 to compound assignment would look like num += 5.
 */

/**
 * When you want to run code conditionally, you can use the if statement.
 * An if statement is used to make decisions in code. The keyword if is followed by a condition in paratheses ().
 * If the condition is true, the code inside the curly braces {} is executed.
 * If the condition is false, the code inside the curly braces is skipped. Example:
 * const num = 5;
 if (num >= 3) {
  console.log("This code will run because num is greater than or equal to 3.");
}
 */
/**
 * When you use a variable in bracket notation, you are accessing the property or index by the value of that variable.
 * For example, this code uses the index variable to access a value of array
 * let value = array[index];
 */
/**
 * You can insert variables into a string with the concatenation operator +. 
 * Here is an example that creates the string "Hello, our name is freeCodeCamp."
 * const ourName = "freeCodeCamp";
 * const ourStr = "Hello, our name is " + "."
 */

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a " + newWeapon + ".";
  }
}
function fightSlime() {}
function fightBeast() {}
