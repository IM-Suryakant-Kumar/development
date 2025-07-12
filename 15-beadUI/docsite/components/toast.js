var toastBtn = document.querySelector("#toast-btn")
        var toast = document.querySelector("#toast")
        toastBtn.addEventListener("click",()=>{
            toast.classList.add("show")
            setTimeout(()=>{
                toast.classList.remove("show")
            },3000)
        })