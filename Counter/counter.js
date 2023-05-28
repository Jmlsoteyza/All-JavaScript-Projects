let value = 0;

const number = document.querySelector("#number");
const myButtons = document.querySelectorAll(".buttons");

myButtons.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    const clickButtons = e.currentTarget.classList;
    if (clickButtons.contains("minus")) {
      value--;
    } else if (clickButtons.contains("add")) {
      value++;
    } else {
      value = 0;
    }
    if (value > 0) {
      number.style.color = "green";
    }
    if (value < 0) {
      number.style.color = "red";
    }
    if (value === 0) {
      number.style.color = "black";
    }
    number.textContent = value;
  });
});
