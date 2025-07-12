const hamburger = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-content-mobile");
const mainContent = document.querySelector(".main-container");

const themeIcon = document.querySelector(".theme");

//mobile side bar
hamburger.addEventListener('click',() => {
    sideBar.classList.add("show")
})

mainContent.addEventListener('click',() =>{
    sideBar.classList.remove("show")
})


//theme

const darkMode = () => {
        //icon toggle
        themeIcon.childNodes[0].classList.remove('fa-moon')
        themeIcon.childNodes[0].classList.add('fa-sun')

        //theme set
        document.documentElement.setAttribute('data-theme', 'dark');
}
const lightMode = () => {
        themeIcon.childNodes[0].classList.add('fa-moon')
        themeIcon.childNodes[0].classList.remove('fa-sun')

        document.documentElement.setAttribute('data-theme', 'light');
}

window.addEventListener('DOMContentLoaded', () => {

    const currenetTheme = localStorage.getItem('theme')
	if (currenetTheme === 'light') {
		lightMode()
	} else {
        darkMode()
	}
});

themeIcon.addEventListener('click' , () => {
    if(themeIcon.childNodes[0].classList.contains('fa-moon')){
        darkMode()
        localStorage.setItem('theme', 'dark');
    }
    else{  
        lightMode()
        localStorage.setItem('theme', 'light');
    }
})

