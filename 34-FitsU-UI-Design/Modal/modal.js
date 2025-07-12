const modal = document.querySelector(".modal");
const showModalBtn = document.querySelector(".showBtn");
const closeModalButtons = document.querySelectorAll(".close-modal");


showModalBtn.addEventListener('click',() => {
    modal.style.display = "block";
})

closeModalButtons.forEach(closeModalButton => {
    closeModalButton.addEventListener('click',() => {
        // console.log(closeModalButton)
        modal.style.display = "none";
    })
} )

window.addEventListener('click',(e) => {
    console.log(e.target)
    if(e.target == modal){
        modal.style.display = "none";
    }
})