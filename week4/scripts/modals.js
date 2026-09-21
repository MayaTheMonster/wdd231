const openButton1 = document.querySelector("#openButton1")
const openButton2 = document.querySelector("#openButton2")
const openButton3 = document.querySelector("#openButton3")

const dialog = document.querySelector("#dialog")
const dialogText = document.querySelector("#dialog div")
const closeButton = document.querySelector("#closeButton")

openButton1.addEventListener("click", () => {
    dialogText.innerHTML="there's extra text here"
    dialog.showModal();
})

openButton2.addEventListener("click", () => {
    dialogText.innerHTML="there's more extra text here"
    dialog.showModal();
})

openButton3.addEventListener("click", () => {
    dialogText.innerHTML="there's extra extra text here"
    dialog.showModal();
})

closeButton.addEventListener("click", () =>{
    dialog.close();
})