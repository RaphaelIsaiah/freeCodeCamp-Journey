document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  const calculate = (event) => {
    event.preventDefault();

    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map((el) => Number(el));
    const filtered = numbers.filter();

    console.log(numbers);
  };

  form.addEventListener("submit", calculate);
});
