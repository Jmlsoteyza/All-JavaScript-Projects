const buttonsContainer = document.querySelectorAll(".buttons button");
const firstContainer = document.getElementsByClassName("text")[0];
const submit = document.getElementsByClassName("submit-button")[0];
const secondContainer = document.getElementsByClassName("text-back")[0];
const submitBack = document.getElementById("Submit-back");
const number = document.getElementById("number");
const buttonsNumber = document.querySelectorAll("#buttons-number");

buttonsNumber.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    number.innerHTML = buttons.innerHTML;

    buttonsNumber.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    buttons.style.backgroundColor = "#fff";
    buttons.style.color = "#111";
  });
});

submit.addEventListener("click", (e) => {
  secondContainer.classList.remove("hidden");
  firstContainer.style.display = "none";
});

submitBack.addEventListener("click", (e) => {
  secondContainer.classList.add("hidden");
  firstContainer.style.display = "block";
});
