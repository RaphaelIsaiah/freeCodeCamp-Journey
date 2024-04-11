// HTML (DOM) element selection
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Data structure that will hold all the information of the football team
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam); //Locks or freezes the attributes of myFavoriteFootballTeam, to ensure no modifications occur.

// Using Object destructuring instead of dot notation to unpack/access the properties.
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// For the display of the team information on the screen.
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Functionality for filtering the teammates
const setPlayerCards = (arr = players) => {
  // Adding player info to the page.
  playerCards.innerHTML += arr
    .map(
      // Use of object destructuring to unpack properties.
      ({ name, position, number, isCaptain, nickname }) =>
        `
      <div class="player-card">
        <h2>${name} ${isCaptain === true ? "(Captain)" : ""}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
        `
    )
    .join("");
};

// Filter selection functionality. Initializes and implements the setPlayerCards()
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = ""; // Resets the content of the playerCards element before rendering the new cards.

  // switch statement to filter out cards based on the user's selection.
  switch (e.target.value) {
    case "nickname":
      // use of implicit return in the callback statement.
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;

    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;

    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;

    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;

    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

    default:
      setPlayerCards();
      break;
  }
});

/**
 * In this project, you will build a set of football team cards and learn about nested objects, object destructuring, default parameters, event listeners, and switch statements.
 * NOTE: The numbers for the team are organized alphabetically by last name. This differs from conventional numbering where the numbers correspond with what is on the player's jerseys.
 * To ensure that you can't modify this object by adding or removing any properties, we are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.
 * You have been accessing properties from the myFavoriteFootballTeam object using dot notation and assigning them to new const variables. But in JavaScript, there is an easier way to accomplish the same goal.
 * The object destructuring syntax allows you to unpack values from arrays and objects:
 * const developerObj = {
 *   name: "Jessica Wilkins",
 *   isDeveloper: true
 * };
 * // Object destructuring
 * const { name, isDeveloper } = developerObj;
 * Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:
 * const greeting = (name = "Anonymous") => {return "Hello" + name;}
 * console.log(greeting("John")); // Hello John
 * console.log(greeting()); // Hello Anonymous
 * "change" in the event listener checks for when there is a change in the playersDropdownList element.
 * e represents an object which contains the information for that event.
 * e.target.value represents the value property from the playersDropdownList element. In future steps, you will use this value to show player cards based on the position they play.
 */
