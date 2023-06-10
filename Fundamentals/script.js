let age = prompt("age?", 18);

let message =
  age < 10
    ? "You're too young!"
    : age < 18
    ? "Hello still young..."
    : age < 100
    ? "Greets!!"
    : "What an unsual age!";

alert(message);
