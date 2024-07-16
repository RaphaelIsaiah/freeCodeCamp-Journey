document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const numbersInput = document.querySelector("#numbers");

  if (form && numbersInput) {
    form.addEventListener("submit", calculate);
  } else {
    console.error("Form or input element not found.");
  }

  function calculate(event) {
    event.preventDefault();
    const value = numbersInput.value;
    const array = value.split(/,\s*/g);
    const numbers = array.map((e1) => Number(e1));
    console.log(numbers);
  }
});
