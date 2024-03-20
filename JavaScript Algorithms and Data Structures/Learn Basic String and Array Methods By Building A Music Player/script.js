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
 * Right now the songsHTML is an array. If you tried to display this as is, you would see the songs separated by commas. This is not the desired outcome because you want to display the songs as a list. To fix this, you will need to join the array into a single string by using the join() method.
 * The join() method is used to concatenate all the elements of an array into a single string. It takes an optional parameter called a separator which is used to separate each element of the array. For example:
 * const exampleArr = ["This", "is", "a", "sentence"];
 * const sentence = exampleArr.join(" "); // Separator takes a space character
 * console.log(sentence); // Output: "This is a sentence"
 * Chain the join() method to your map() method and pass in an empty string for the separator.
 * To chain multiple methods together, you can call the join() method on the result of the map() method. For example:
 * array.map().join();
 * Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. For example:
 * const user = {
 * name: "Quincy",
 * address: {
 * city: "San Francisco",
 * state: "CA",
 * country: "USA"
 * },
 * };
 * // Accessing nested properties without optional chaining
 * const state = user.address.state; // CA
 * // Accessing a non-existent nested property with optional chaining
 * const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
 * Now that you have the list of songs displayed on the screen, it would be nice to sort them in alphabetical order by title. You could manually update the allSongs array, but JavaScript has an array method you can use called sort().
 * The sort() method converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding.
 * const names = ["Tom", "Jessica", "Quincy", "Naomi"];
 * names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]
 * To sort the songs in alphabetical order by title, you will need to pass in a compare callback function into your sort() method.
 * Here is an example of sorting a list of fruits by name.
 * const fruits = [
 *   { name: "Apples", price: 0.99 },
 *   { name: "Blueberries", price: 1.49 },
 *   { name: "Grapes", price: 2.99 },
 * ];
 * fruits.sort((a, b) => {
 *   if (a.name < b.name) {
 *     return -1;
 *   }
 *   if (a.name > b.name) {
 *     return 1;
 *   }
 *   return 0;
 * });
 * The sort() method accepts a compare callback function that defines the sort order.
 * In this example, the first condition (a.name < b.name) checks if the name of the first fruit is less than the name of the second fruit. If so, the first fruit is sorted before the second fruit.
 * Strings are compared lexicographically which means they are compared character by character. For example, "Apples" is less than "Bananas" because "A" comes before "B" in the alphabet.
 * The reason why this example is returning numbers is because the sort() method is expecting a number to be returned. If you return a negative number, the first item is sorted before the second item.
 * The second condition in this example checks if a.name > b.name. If so, the function returns 1, which sorts the first fruit after the second fruit.
 * In the example, if a.name is equal to b.name, then the function returns 0. This means that nothing changes and the order of a and b remains the same.
 * For the songs to appear in alphabetical order, the renderSongs function should be changed to call the sortSongs function:
 * renderSongs(sortSongs());
 * It's time to begin implementing the functionality for playing the displayed songs.
 * The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function.
 * If no element satisfies the condition, the method returns undefined.
 * In the example below, the find() method is used to find the first number greater than 25:
 * const numbers = [10, 20, 30, 40, 50];
 * // Find the first number greater than 25
 * const foundNumber = numbers.find((number) => number > 25);
 * console.log(foundNumber); // Output: 30
 * Before playing the song, you need to make sure it starts from the beginning. This can be achieved by the use of the currentTime property of the audio object.
 * Next, use the classList property and the add() method to add the "playing" class to the playButton element. This will look for the class "playing" in the CSS file and add it to the playButton element.
 * play() is a method from the web audio API for playing an mp3 file.
 * pause() is a method of the Web Audio API for pausing music files.
 * Before you start working on playing the next and previous song, you need to get the index of each song in the songs property of userData.
 * To get the index for the current song, you can use the indexOf() method.
 * The indexOf() array method returns the first index at which a given element can be found in the array, or -1 if the element is not present.
 * const animals = ["dog", "cat", "horse"];
 * animals.indexOf("cat") // 1
 * Next, you will need to retrieve the next song in the playlist.
 * For that, you will need to get the index of the current song and then add 1 to it.
 * The forEach method is used to loop through an array and perform a function on each element of the array.
 * For example, suppose you have an array of numbers and you want to log each number to the console.
 * const numbers = [1, 2, 3, 4, 5];
 * // Using forEach to iterate through the array
 * numbers.forEach((number) => {
 * console.log(number); // 1, 2, 3, 4, 5
 * });
 * textContent sets the text of a node and allows you to set or retrieve the text content of an HTML element.
 * <div id="example">This is some text content</div>
 * const element = document.getElementById('example');
 * console.log(element.textContent); // Output: This is some text content
 * Use const and arrow syntax to define a function called setPlayButtonAccessibleText.
 * This function will set the aria-label attribute to the current song, or to the first song in the playlist. And if the playlist is empty, it sets the aria-label to "Play".
 * Use the setAttribute method on the playButton element to set an attribute named "aria-label". For the value, use a ternary to set song?.title to Play ${song.title} or "Play" if there's no song.title available.
 * In earlier steps, you learned how to work with the sort() method to sort the songs in alphabetical order. Another use case for the callback function is to randomize an array.
 * One way to randomize an array of items would be to subtract 0.5 from Math.random() which produces random values that are either positive or negative.
 * This makes the comparison result a mix of positive and negative values, leading to a random ordering of elements.
 * const names = ["Tom", "Jessica", "Quincy", "Naomi"];
 * names.sort(() => Math.random() - 0.5);
 * It's time to implement a delete functionality for the playlist. This would manage the removal of a song from the playlist, handle other related actions when a song is deleted, and create a Reset Playlist button.
 * Use the filter() method to remove the song object that matches the id parameter from the userData?.songs array
 * The filter method keeps only the elements of an array that satisfy the callback function passed to it:
 * const numArr = [1, 10, 8, 3, 4, 5]
 * const numsGreaterThanThree = numArr.filter((num) => num > 3);
 * console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]
 * Note: You should not use optional chaining when you assign the result of userData?.songs.filter to userData.songs because the allSongs array will not be undefined or null at that point.
 * Before deleting a song, you need to check if the song is currently playing. If it is, you need to pause the song and play the next song in the playlist.
 * Use an if statement to check if the userData?.currentSong?.id is equal to the id of the song you want to delete.
 * If the playlist is empty, you need to create a resetButton element and a text for it. This button will only show up if the playlist is empty.
 * createElement() is a DOM method you can use to dynamically create an element using JavaScript. To use createElement(), you call it, then pass in the tag name as a string:
 * // syntax
 * document.createElement(tagName)
 * // example
 * document.createElement("div")
 * You can also assign it to a variable:
 * const divElement = document.createElement("div")
 * Now that you've created the button, you need to assign it a text. To do this, you need to use the createTextNode() method of DOM.
 * The createTextNode() method is used to create a text node. To use it, you call it and pass in the text as a string:
 * document.createTextNode("your text")
 * You can also assign it to a variable:
 * const myText = document.createTextNode("your text")
 * Now that you've created the resetButton, you need to assign it an id and aria-label attributes. JavaScript provides the id and ariaLabel properties you need to use for this.
 * For example, element.id would set an id attribute, and element.ariaLabel would set an aria-label attribute. Both of them accept their values as a string.
 * You need to add the resetText to the resetButton element as a child, and also the resetButton to the playlistSongs element as a child. For this, there is an appendChild() method to use.
 * appendChild() lets you add a node or an element as the child of another element. In the example below, the text "Click me" would be attached to the button:
 * const parentElement = document.createElement("button")
 * const parentElementText = document.createTextNode("Click me")
 * // attach the text "Click me" to the button
 * parentElement.appendChild(parentElementText)
 * Finally, you should render the songs again, update the play button's accessible text, and remove the reset button from the playlist. You also need to remove the resetButton from the DOM.
 * All the core functionalities are now in place. The only issue now is that the next song does not automatically play when the currently playing song ends.
 * To fix that, you can set up an event listener which will detect when the currently playing song ends. The "ended" event listener is appropriate for this. It is fired when the playback of a media reaches the end.
 * Add an event listener to the audio element which listens for the "ended" event. Pass in a callback using arrow syntax with empty curly braces.
 * you need to check if there is a next song to play. Retrieve the current song index by calling the getCurrentSongIndex() function, and save it in a currentSongIndex constant.
 * After that, create a nextSongExists constant that contains the boolean value true or false depending on if the next song exists.
 * To do that: check if a next song exists comparing userData.songs.length and currentSongIndex and set it to a nextSongExists constant. If the last index of the songs array (userData.songs.length - 1) is bigger than the currentSongIndex that means there is a next song.
 * const nextSongExists = currentSongIndex < userData.songs.length - 1;
 * This line calculates whether a next song exists based on the current song index (currentSongIndex) and the total number of songs in the userData.songs array.
 * It checks if the current song index is less than the length of the songs array minus 1.
 * If the condition is true, it means there is a next song available.
 * const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
 * This line uses optional chaining (?.) to access the song at the next index (currentSongIndex + 1) in the userData.songs array.
 * If the next song exists (i.e., the value is not undefined), the condition evaluates to true.
 * Otherwise, it evaluates to false.
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

// Song list to test the app quickly
// const allSongs = [
//   {
//     id: 0,
//     title: "Hello World",
//     artist: "Rafael",
//     duration: "0:23",
//     src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/hello-world.mp3",
//   },
//   {
//     id: 1,
//     title: "In the Zone",
//     artist: "Rafael",
//     duration: "0:11",
//     src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/in-the-zone.mp3",
//   },
//   {
//     id: 2,
//     title: "Camper Cat",
//     artist: "Rafael",
//     duration: "0:21",
//     src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/camper-cat.mp3",
//   },
//   {
//     id: 3,
//     title: "Electronic",
//     artist: "Rafael",
//     duration: "0:15",
//     src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/electronic.mp3",
//   },
//   {
//     id: 4,
//     title: "Sailing Away",
//     artist: "Rafael",
//     duration: "0:22",
//     src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/sailing-away.mp3",
//   },
// ];

// This will create a new HTML5 audio element
const audio = new Audio();

// This enables the music player keep track of the songs, the current song playing, and the time of the current song.
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

// Functionality to play displayed songs.
const playSong = (id) => {
  // This will iterate through the userData?.songs array, searching for a song that corresponds to the id passed in the playsong function.
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src; // this tells the audio element where to find the audio data for the selected song.
  audio.title = song.title; // this tells the audio element what to display as the title of the song.

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  // The optional chaining ?. method is not used here because userData.currentSong will not be null or undefined at this point.
  userData.currentSong = song;
  playButton.classList.add("playing");

  // Implementation of the song highlight functionality.
  highlightCurrentSong();

  // Implementation of the Player Display functionality.
  setPlayerDisplay();

  // Implementation of the aria-label attribute functionality.
  setPlayButtonAccessibleText();

  audio.play();
};

// Initialization of Pause Functionality.
const pauseSong = () => {
  // The current time of the song when it is paused is set to the current time of the audio variable.
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");

  audio.pause();
};

// Initialization of the Next functionality.
const playNextSong = () => {
  // This checks if there is no current song playing in the userData object.
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);
  }
};

// Initialization of the Previous functionality.
const playPreviousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    playSong(previousSong.id);
  }
};

// Initialization of the shuffle functionality.
// This function is responsible for shuffling the songs in the playlist and performing necessary state management updates after the shuffling.
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  // When the shuffle button is pressed, you want to set the currentSong to nothing and the songCurrentTime to 0.
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  // optional chaining is not used here because we are explicitly setting the properties of currentSong and songCurrentTime to null and 0 respectively.

  // We also should re-render the songs, pause the currently playing song, set the player display, and set the play button accessible text again.
  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

// Initialization for Delete functionality.
const deleteSong = (id) => {
  //This condition checks if a song is currently playing before deleting it.
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }
  // This deletes the selected song from the playlist.
  userData.songs = userData?.songs.filter((song) => song.id !== id);
  // You need to re-render the songs, highlight it and set the play button's accessible text since the song list will change.
  renderSongs(userData?.songs); // This displays the modified playlist.
  highlightCurrentSong(); // This highlights the current song if there is any.
  setPlayButtonAccessibleText(); // This update's the play button's accessible text.

  // This checks if the playlist is empty, if yes, it resets the userData to its original state --Reset Functionality
  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    // Adding the reset functionality to the reset button.
    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];
      // This resets the playlist to its original state.
      // optional chaining is not used here because the song will not be null or undefined at this point.

      renderSongs(sortSongs()); // Renders the songs again in alphabetical order.
      setPlayButtonAccessibleText(); // Updates the play button's accesssible text.
      resetButton.remove();
    });
  }
};

// Initialization of Player Display functionality.
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  // Using ternary operator to determine if currentTitle and currentArtist are truthy and then setting specific values to them based on the outcome.
  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

// Initialization of highlighting current playing song.
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    // This will remove the attribute for each of the songs.
    songEl.removeAttribute("aria-current");
  });

  // This adds the aria attribute to the currently playing song
  if (songToHighlight) {
    songToHighlight.setAttribute("aria-current", "true");
  }
};

// This will display the songs in the User Interface (UI)
const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
        <li id="song-${song.id}" class="playlist-song">
          <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
          </button>
          <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
            </svg>
          </button>
        </li>
      `;
    })
    .join("");

  // This will display songsHTML into the <ul> in the index.html
  playlistSongs.innerHTML = songsHTML;
};

// Initialization for aria-label attribute functionality.
const setPlayButtonAccessibleText = () => {
  // This enables us to get the currently playing song or the first song in the playlist.
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

// This will give the index of each song in the songs property of userData.
const getCurrentSongIndex = () =>
  userData?.songs.indexOf(userData?.currentSong);

// Adding the song playing functionality to the play button so it will play the current song when clicked on.
playButton.addEventListener("click", () => {
  // The condition here checks if userData?.currentSong is falsey.
  if (!userData?.currentSong) {
    playSong(userData?.songs[0].id);
    // This will ensure that the first song in the playlist is played first.
  } else {
    playSong(userData?.currentSong.id);
  }
});

// Implementation of Pause Functionality.
pauseButton.addEventListener("click", pauseSong);

// Implementation of the Next functionality.
nextButton.addEventListener("click", playNextSong);

// Implementation of the Previous functionality.
previousButton.addEventListener("click", playPreviousSong);

// Implementation of the Shuffle functionality.
shuffleButton.addEventListener("click", shuffle);

// Initialization and implementation for automatically playing the next song or...
audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  // const nextSongExists = currentSongIndex < userData.songs.length - 1;
  // this checks the index directly against the array length minus 1.

  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
  // this uses optional chaining to access the next song and checks if it’s defined.
  // Both approaches achieve the same goal of determining whether a next song exists, but they use slightly different techniques.

  // This will make the next song play automatically when the current song ends else...
  if (nextSongExists) {
    playNextSong();
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    // Calling these functions ensures the player is correctly updated.
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

// Functionality to alphabetically sort songs.
const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

// Calling the renderSongs here renders the songs in the playlist on the page.
renderSongs(sortSongs());
