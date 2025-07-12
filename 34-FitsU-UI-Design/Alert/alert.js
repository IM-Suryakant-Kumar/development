const dismissAlertIcons = document.querySelectorAll(".dismiss");
dismissAlertIcons.forEach(icon => {
    icon.addEventListener('click',() => {
        var div = icon.parentNode;
        div.style.display = "none";
    })
})


const showAlertBtn = document.querySelector(".show-alert-btn");
const divToShowAlert = document.querySelector(".live")
showAlertBtn.addEventListener('click',() => {
    var div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add('success-lg');
    div.innerHTML= `<i class="fas fa-check-circle"></i><strong>Success !</strong><p>Successful or positive action</p> 
    <i class="fas fa-times dismiss"></i>`;

    divToShowAlert.append(div);


})