/**
 * Next, you'll learn about the Web Audio API and how to use it to play songs.
 * All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.
 * const audio = new Audio(); // This will create a new HTML5 audio element.
 * Since users will be able to shuffle and delete songs from the playlist, you will need to create a copy of the allSongs array without mutating the original. This is where the spread operator comes in handy.
 * The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. In the example below, both arr1 and arr2 have been spread into combinedArr:
 * const arr1 = [1, 2, 3];
 * const arr2 = [4, 5, 6];
 * const combinedArr = [...arr1, ...arr2];
 * console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
 * An arrow function is a shorter and more concise way to write functions in JavaScript. It's a function expression, which is a function that's assigned to a variable.
 * Here is an example of an arrow function with a single parameter and a single expression in the function body:
 * const exampleArrowFunction = (param) => {
 *   return param
 * };
 * If the function body consists of a single expression, you can omit the curly braces and the return keyword. This is called an implicit return:
 * const exampleArrowFunction = (param) => param;
 * you will learn how to add new HTML for each song using the map() method.
 * The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. For example:
 * const numbers = [1, 2, 3];
 * const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
 * Notice that the map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument.
 * In the example above, the callback function is (number) => number * 2, and it's run on each element in the numbers array. The map() method then returns a new array with the results.
 */

// Declaring Variables
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  },
];

// This will create a new HTML5 audio element
const audio = new Audio();

// This enables the music player keep track of the songs, the current song playing, and the time of the current song.
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

// This will display the songs in the User Interface (UI)
const renderSongs = (array) => {
  const songsHTML = array.map((song) => {
    return `
    <li id = "song-${song.id}" class="playlist-song">
        <button class="playlist-song-info">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
    </li>
    `;
  });
};
