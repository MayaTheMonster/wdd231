import { information } from "../data/Interests.mjs";

const modal = document.querySelector("#modal")
const title = document.querySelector("#modTitle")
const text = document.querySelector("#modParag")

function showGrid(data){
    document.querySelector("#filterPoints").innerHTML = "";
    console.log(data);
    let integer = Object.values(data);
    integer.forEach(member => {    
        let point = document.createElement("section")
        let name = document.createElement("h2")
        let address = document.createElement("p")
        address.classList.add("address")
        let cost = document.createElement("p")
        cost.classList.add("cost")
        let image = document.createElement("img")
        let button = document.createElement("button")

        name.textContent = member.name
        address.textContent = `Address: ${member.address}`
        cost.textContent = `Cost: ${member.cost}`
        button.textContent = "Learn More"
            
        let fulltext = `images/${member.imageUrl}.webp`

        button.addEventListener("click", () =>{
            modal.showModal();
            title.textContent = 
            text.textContent = member.description
            displayPop.innerHTML = member.name
            let report = createWeather(5)
            displayPop.appendChild(report)

            closeMod.addEventListener("click", () =>{
                modal.close();
            })
        })

        image.setAttribute("src", fulltext);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");

        point.appendChild(name)

        point.appendChild(address)
        point.appendChild(cost)
        point.appendChild(image)
        point.appendChild(button)

        point.classList.add("block")
        point.classList.add("namedGrid")
        document.querySelector("#filterPoints").appendChild(point)
    })
}

showGrid(information);