const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", () => {
	menuBar.classList.toggle("active");
	document.querySelector("aside").classList.toggle("show");
});
