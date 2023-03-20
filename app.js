const switcher = document.querySelector("#switch")
const basicPrice = document.querySelector("#basicPrice")
const professionalPrice = document.querySelector("#professionalPrice")
const masterPrice = document.querySelector("#masterPrice")

switcher.addEventListener("change", ()=>{
    if(switcher.checked){
        basicPrice.innerText = 19.99
        professionalPrice.innerText = 24.99
        masterPrice.innerText = 39.99
    } else if(switcher.checked == false){
        basicPrice.innerText = 199.99
        professionalPrice.innerText = 249.99
        masterPrice.innerText = 399.99
    }
})
