var btnsmallModal = document.querySelector("#modal-sm-popup-btn");
var smallModal = document.querySelector("#sm-modal");
var cancelbtnsm = document.querySelector("#cancel-btn-sm");
var bodyWrapper = document.querySelector("#body-closure");
btnsmallModal.addEventListener("click", () => {
  smallModal.style.display = "block";
  bodyWrapper.style.opacity = ".4";
});
cancelbtnsm.addEventListener("click", () => {
  smallModal.style.display = "none";
  bodyWrapper.style.opacity = "1";
});

var btnLoginModal = document.querySelector("#modal-lg-popup-btn");
var loginModal = document.querySelector("#login-modal");

btnLoginModal.addEventListener("click", () => {
  loginModal.style.display = "block";
  bodyWrapper.style.opacity = ".4";
});
var signupCloseBtn = document.querySelector("#signup-close-btn");
var signupCloseBtn2 = document.querySelector("#signup-close-btn2");
signupCloseBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  bodyWrapper.style.opacity = "1";
});
signupCloseBtn2.addEventListener("click", () => {
  loginModal.style.display = "none";
  bodyWrapper.style.opacity = "1";
});
