const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
	drums[i].addEventListener("click", function () {
		const buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

document.addEventListener("keydown", function (e) {
	let key = e.key;
	makeSound(key);
	buttonAnimation(key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			const top1 = new Audio("./sounds/tom-1.mp3");
			top1.play();
			break;
		case "a":
			const top2 = new Audio("./sounds/tom-2.mp3");
			top2.play();
			break;
		case "s":
			const top3 = new Audio("./sounds/tom-3.mp3");
			top3.play();
			break;
		case "d":
			const top4 = new Audio("./sounds/tom-4.mp3");
			top4.play();
			break;
		case "j":
			const crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;
		case "k":
			const snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;
		case "l":
			const kick = new Audio("./sounds/kick-bass.mp3");
			kick.play();
			break;
		default:
			console.log(key);
	}
}

function buttonAnimation(key) {
	const activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100)
}
