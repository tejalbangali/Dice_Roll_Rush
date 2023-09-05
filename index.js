let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .getElementsByTagName("img")[0]
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .getElementsByTagName("img")[1]
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("div h1").textContent = "Player 1 Wins! 🎉";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("div h1").textContent = "Player 2 Wins! 🎉";
} else {
  document.querySelector("div h1").textContent = "Draw!";
}
