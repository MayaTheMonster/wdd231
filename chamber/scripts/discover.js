import { information } from "../data/Interests.mjs";

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
        let description = document.createElement("p")
        description.classList.add("description")
        let image = document.createElement("img")

        name.textContent = member.name
        address.textContent = `Address: ${member.address}`
        cost.textContent = `Cost: ${member.cost}`
        description.textContent = `Description: ${member.description}`;
            
        let fulltext = `images/${member.imageUrl}.webp`

        image.setAttribute("src", fulltext);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");

        point.appendChild(name)

        point.appendChild(address)
        point.appendChild(cost)
        point.appendChild(image)
        point.appendChild(description)

        point.classList.add("block")
        point.classList.add("namedGrid")
        document.querySelector("#filterPoints").appendChild(point)
    })
}

showGrid(information);