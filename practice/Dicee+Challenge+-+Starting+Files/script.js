const randomDice1 = Math.floor(Math.random() * 6) + 1;
const randomDice2 = Math.floor(Math.random() * 6) + 1;
const h1 = document.querySelector("h1");

if (randomDice1 > randomDice2) {
	h1.textContent = "Player 1 win.";
} else if (randomDice1 === randomDice2) {
	h1.textContent = "Tie Match.";
} else {
	h1.textContent = "Player 2 win.";
}

// dice 1
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomDice1 + ".png");
// dice 2
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomDice2 + ".png");
