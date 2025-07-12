const toast = document.querySelector(".toast");
const showToastBtn = document.querySelector(".showBtn");

showToastBtn.addEventListener('click',() => {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    },3000)
})