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
