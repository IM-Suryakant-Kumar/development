// alert

var removeBtn = document.querySelector("#btn-remove-alert");
var removableAlert = document.querySelector("#removable-alert");

removeBtn.addEventListener("click", () => {
  removableAlert.style.display = "none";
});
