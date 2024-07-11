// HTML DOM ELEMENT SELECTION
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Regex Variables
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i; // the place values are a capture group
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const stockRegex = /(?:\s|^)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\s|$)/i;
const dearRegex = /(?:\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check for SPAM
const isSpam = (msg) => denyList.some((regex) => regex.test(msg)); // this is the test condition

// Event Listeners
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
