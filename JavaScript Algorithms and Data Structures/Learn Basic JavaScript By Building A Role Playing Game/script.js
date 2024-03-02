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

// Functions are special tools that allow you to run sections of code at specific times. You can declare functions using the function keyword. Here is an example of a function called functionName - note the opening and closing curly braces. This indicate the section of code that is within the function.
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
 * const ourStr = "Hello, our name is " + ourName + "."
 */
/**
 * Arrays have a length property that returns the number of items in the array.
 * An example of checking the length of an array myArray would look like myArray.length
 */
/**
 * Scope is the term used to describe where a variable can be accessed. If a variable is declared inside a block of code, it is only accessible to the code inside that block. This is called block scope.
 * let num = 1;
if (num === 1) {
  let num = 2; // this num is scoped to the if statement
  console.log(num); // expected output: 2
}
console.log(num); // expected output: 1 (the global variable)
 */
/**
 * The shift() method on an array removes the first element in the array and returns it.
 * const number = [1, 2, 3];
 * const firstNumber = numbers.shift(); //returns 1
 * The remaining values in the array will be [2, 3]
 */
/**
 * By default, the HTML element that shows the monster's stats has been hidden with CSS.
 *  When the player clicks the "Fight dragon" button, the monster's stats should be displayed.
 * You can accomplish this by using the style and display properties on the monsterStats element.
 * The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.
 * Here is an example of how to update the display for a paragraph element:
 * const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
 */
/**
 * The Math object in JavaScript contains static properties and methods for mathematical constants and functions.
 * One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive).
 *  Another is Math.floor(), which rounds a given number down to the nearest integer.
 * Using these, you can generate a random number within a range.
 * For example, this generates a random number between 1 and 5:
 * Math.floor(Math.random() * 5) + 1;
 */
/**
 * You can make an else statement conditional by using else if. Here is an example:
 * if (num > 10) {
 * } else if (num < 5) {
 * }
 */
/**
 * The innerHTML property allows you to access or modify the content inside an HTML element using JavaScript.
 * Here is an example of updating the content for this paragraph element using the innnerHTML property.
 * <p id="demo">This ia a paragraph.</p>
 * document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
 * In order for the &#x2620; emoticon text to properly display on the page, you will need to use the innerHTML property.
 * To ensure that the emoticon text displays properly, we change the text.innerText to text.innerHTML in the declarations.
 */
// Functions run specific blocks of code when they are called, but they can also return a value. This value can be assigned to a variable and used elsewhere in your code.
// This is applied in the functions getMonsterAttackValue(level) and isMonsterHit()
/**
 * The ternary operator is a conditional operator and can be used as a one-line if-else statement
 * The syntax is: condition ? expressionIfTrue : expressionIfFalse
 * Here is an example returning a value using an if-else statement and a refactored example using a ternary operator:
 * if (num > 5) {
  return 'num is greater than 5';
} else {
  return 'num is smaller than or equal to 5';
}

return num > 5 ? 'num is greater than 5' : 'num is smaller than or equal to 5';
 */
/**
 * Remember that the increment operator ++ can be used to increase a variable's value by 1. There is also a decrement operator -- that can be used to decrease a variable's value by 1. For example :
 * let num = 10;
num--;
console.log(num); // Output: 9
 */
/**
 * A while loop accepts a condition, and will run the code in the block until the condition is no longer true.
 * Here is an example of a while loop that runs while i is less than 5.
 * while (i < 5) {
 * }
 *
 * A for loop runs for a specific number of times.
 * for loops are declared with three expressions seperated by semicolons.
 * for (a; b; c), where a is the initialization expression, b is the condition, and c is the final expression.
 * The initialization expression is executed only once, before the loop starts, and is often used to define and set up the loop variable. Think of it like declaring a counter to use in your loop.
 * Many for loops use i as the counter and start from 0.
 * The second statement in a for loop, the condition statement, is evaluated at the beginning of every loop iteration. The loop will continue as long as the condition evaluates to be true.
 * The last statement in a for loop, the final expression, is executed at the end of each loop iteration.
 * E.g i++; this will increment the initializer i by 1 after each loop
 */
/**
 * The .includes() method determines if an array contains an element and will return either true or false.
 * Here is an example of the .includes() syntax:
 * const numbersArray = [1, 2, 3, 4, 5]
const number = 3

if (numbersArray.includes(number)) {
  console.log("The number is in the array.")
}
 */
/**
 * I have realized that to break a string text into 2 lines
 * in innerText you would use \n
 * but for innerHTML you would use <br>
 * Note the method used to change the content of #text
 * text.innerHTML = location.text;
 * So when writing the text in the location object and you need to break the sentence into 2 lines you would need to use <br>
 * But when using text.innerText to change the content of the location.text string and we want to break the sentence into 2 lines then you would need to use \n
 */

//  Declaration of Variables.

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let weapon = inventory[currentWeapon];

//  Use of the Document Object Models to access the HTML elements.
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const weaponText = document.querySelector("#weaponText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

/**
 * Declaring variables using an array of objects.
 * These different objects will be used to change the display on the screen based on the user's interaction.
 */
const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: " dagger",
    power: 30,
  },
  {
    name: " claw hammer",
    power: 50,
  },
  {
    name: " sword",
    power: 100,
  },
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
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
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  },
];

// Initialize buttons
// This allows us to define what each button should do. What function will be ran when clicked.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// This function is used to update the location (display) when a button is clicked.
// Note that button text is an array which is why bracket notation is added to specify the particular element in its array.
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

// The use of bracket notation here is used to define which object in the location array is specified.
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
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
  /**
   * Note, currentWeapon is the index of the weapons array
   * let newWeapon = weapons[currentWeapon].name;
   * where the value of currentWeapon here is 1 as it had undergone an increment
   * And array indexing starts at zero, the index of the last element in an array is one less than the length of the array.
   * So using currentWeapon < weapons.length for the if statement condition would cause an error.
   * Instead currentWeapon < weapons.length - 1 is used to get the correct value of the last element in the weapons array.
   */
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      // This is used to add the new weapon to the inventory array that was created at the top.
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
      weaponText.innerText = newWeapon;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    // Note the use of block scope in the declaration of currentWeapon.
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  // 0 is the index of slime in the monsters array.
  fighting = 0;
  goFight();
}

function fightBeast() {
  // 1 is the index of beast in the monsters array.
  fighting = 1;
  goFight();
}

function fightDragon() {
  // 2 is the index of dragon in the monsters array.
  fighting = 2;
  goFight();
}

//Since fighting each type of monster will use similar logic, we will use this function to manage the logic.
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsters[fighting].health;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";

  health -= getMonsterAttackValue(monsters[fighting].level);

  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " \nYou miss.";
  }

  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    // The strict equality === operator checks if the values are equal and if they are the same data type.
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  // The logical AND operator checks if two statements are true.
  /**
   * Here is an example of an if statement with two conditions:
   * if (firstName ==="Quincy" && lastName === "Larson"){
   * }
   */
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    // If there is only one weapon in the inventory array, i.e inventory.length === 1 that weapon won't break as inventory will always be false in that condition (inventory.length !== 1)
    // This pop() will remove the last item in the array and return it so it appears in your string.
    text.innerText += " \nYour " + inventory.pop() + " breaks.";
    currentWeapon--;
    weapon = weapons[currentWeapon].name;
    weaponText.innerText = weapon;
  }
}

function getMonsterAttackValue(level) {
  // The attack of the monster will be based on the monster'slevel and the player's xp.
  // This sets the monster's attack to five times their level minus a random number between 0 and the player's xp.
  const hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  // This ternary operator returns hit if hit is > 0 or returns 0 if it is not.
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  // This will return a boolean i.e either true or false.
  // || is the logical OR operator.
  // The code below means: the player should hit if either Math.random() > .2 or if the player's health is less than 20.
  /**
   * The logical OR operator will use the first value if it is truthy
   * that is, anything apart from NaN, null, undefined, 0, -0, 0n, "", and false.
   * Otherwise, it will use the second value.
   * For example,
   * num < 10 || num > 20
   */
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  // Math.floor is used here to round the result down to the nearest integer.
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  weaponText.innerText = inventory[0];
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    // This Math function will create a random number between 0 and 10
    // Note how the push method is used to push the random numbers to the end of the numbers array.
    // That is, while the length of the array is less than 10 the random numbers will be generated and pushed into the array.
    numbers.push(Math.floor(Math.random() * 11));
  }
  // \n is the new line escape character. Which will make the next part of the text appear on a new line (much like the <br/> in HTML)
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

  // This for loop is used to list out the random numbers that were added to the numbers array until i = 10.
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
