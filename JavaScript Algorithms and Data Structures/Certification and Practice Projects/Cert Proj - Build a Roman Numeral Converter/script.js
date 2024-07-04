// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");
const resultDiv = document.getElementById("result-div");


// Input Error Handling
const inputError = () => {
    // if input is empty
    if (number.value === "") {
        resultDiv.classList.remove("hidden");
        output.innerText = "Please enter a valid number";
    }
};

convertBtn.addEventListener("click", inputError);