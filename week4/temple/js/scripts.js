import { temples } from "../data/temples.js";
import { url } from "../data/temples.js";


let images  = document.querySelector("#showHere")

let dialog  = document.querySelector("#mydialog")
let name  = document.querySelector("#mydialog div h2")
let closeButton  = document.querySelector("#mydialog div button")
let text  = document.querySelector("#mydialog p")

closeButton.addEventListener("click", () => {
    dialog.close();
})


function displayItems(data){
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img")
        photo.setAttribute("src", `${url}${x.path}`)
        photo.setAttribute("alt", "x.name")

        photo.addEventListener("click", () => showStuff(x))
        images.appendChild(photo)
    });
}
function showStuff(data){
    name.innerHTML = data.name
    text.innerHTML = `${data.dedicated} by ${data.name} as temple number ${data.number}`
    dialog.showModal();
}

displayItems(temples)
