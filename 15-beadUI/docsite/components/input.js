var passInput = document.querySelector("#pass-input");
var eyeBtn = document.querySelector("#eye-btn");

eyeBtn.addEventListener("click", () => {
  const type =
    passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);
  if (eyeBtn.classList.contains("fa-eye-slash")) {
    eyeBtn.classList.remove("fa-eye-slash");
    eyeBtn.classList.add("fa-eye");
  } else {
    eyeBtn.classList.remove("fa-eye");
    eyeBtn.classList.add("fa-eye-slash");
  }
});
