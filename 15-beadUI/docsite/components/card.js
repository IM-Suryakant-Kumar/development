// card

var cardDismissed = document.querySelector(".card-dismiss");
var removeCard = document.querySelector(".dismiss-card-btn");
removeCard.addEventListener("click", () => {
  cardDismissed.style.display = "none";
});
