// HTML/DOM Element selection
// I am using the conditional statement here to wrap the entire code so that it does not throw the error "ReferenceError: document is not defined" when trying to run the code here in the console instead of a browser console.
if (typeof document !== "undefined") {
  const numberInput = document.getElementById("number-input");
  const convertBtn = document.getElementById("convert-btn");
  const result = document.getElementById("result");
  const animationContainer = document.getElementById("animation-container");
  const animationData = [
    {
      inputVal: 5,
      marginTop: 300,
      addElDelay: 1000,
      msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
      showMsgDelay: 15000,
      removeElDelay: 20000,
    },
    {
      inputVal: 2,
      marginTop: -200,
      addElDelay: 1500,
      msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
      showMsgDelay: 10000,
      removeElDelay: 15000,
    },
    {
      inputVal: 1,
      marginTop: -200,
      addElDelay: 2000,
      msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
      showMsgDelay: 5000,
      removeElDelay: 10000,
    },
  ];

  // Functionality to handle the conversion from decimal to binary.
  const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
      return String(input);
    } else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
      // The recursive call decimalToBinary(Math.floor(input / 2)) generates the binary representation of the quotient.The remainder (input % 2) is appended to the end of that binary representation.
      // In summary, this expression recursively divides the input by 2, constructing the binary representation digit by digit.
    }
  };

  // Animation of what happens under the hood during a conversion.
  const showAnimation = () => {
    result.innerText = "Call Stack Animation";

    animationData.forEach((obj) => {
      // First phase of the animation
      setTimeout(() => {
        animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
        decimalToBinary(${obj.inputVal})
        </p>
        `;
      }, obj.addElDelay);

      // Second phase - updating the paragraphs with the msg text.
      setTimeout(() => {
        // Changes the text content of the targeted element
        document.getElementById(obj.inputVal).textContent = obj.msg;
      }, obj.showMsgDelay);

      // Third phase - removing the <p> elements from #show-animation element at the end of the animation.
      setTimeout(() => {
        document.getElementById(obj.inputVal).remove();
      }, obj.removeElDelay);
    });

    // Displaying the result of the conversion after the animation.
    setTimeout(() => {
      result.textContent = decimalToBinary(5);
    }, 20000);
  };

  // Initialization of Functionality to check user input value.
  const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    // If statement to check if userinput is valid and not empty, or is not a number.
    if (!numberInput.value || isNaN(inputInt)) {
      alert("Please provide a decimal number");
      return;
    }

    // Condition to show Animation when input is 5.
    if (inputInt === 5) {
      showAnimation();
      return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = ""; // Clears the number input after conversion
  };

  // Implementation of functionality to check user input value.
  convertBtn.addEventListener("click", checkUserInput);

  // Implementatiion of functionality to check user input value with the enter key.
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
}
