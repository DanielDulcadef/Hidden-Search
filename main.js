let inp = document.querySelector(".input")
let bt = document.querySelector(".btn")
let srch = document.querySelector(".search")


bt.addEventListener("click", ()=> {
    inp.classList.toggle("active")
    bt.classList.toggle("active")
    // inp.focus()
})