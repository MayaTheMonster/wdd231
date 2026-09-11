const listSetting = document.querySelector("#listDisplay")
const gridSetting = document.querySelector("#gridDisplay")

async function getData(path, grid){
    if (grid == true){
        //add stuff here
    }
    const response = await fetch(path);
    const data = await response.json();
    showGrid(data, grid);
}

let grid = true;
gridSetting.addEventListener("click", function(){
    grid = true;
    getData("data/members.json", grid)
});
listSetting.addEventListener("click", function(){
    grid = false;
    getData("data/members.json", grid)
});

function showGrid(data, grid){
    document.querySelector("#filterBusiness").innerHTML = "";
    document.querySelector("#filterBusinessList").innerHTML = "";
    console.log(data);
    let integer = Object.values(data);
    integer.forEach(member => {    
        let membership = document.createElement("section")
        let company = document.createElement("h2")

        if(member.membership == 3){
            membership.classList.add("gold")
        }
        else if(member.membership == 2){
            membership.classList.add("silver")
        }
        else{
            membership.classList.add("bronze")
        }
        let joinDate = document.createElement("p")
        let domain = document.createElement("a")

        if (grid == true){
            let owner = document.createElement("span")
            owner.classList.add("subtitle")
            let address = document.createElement("p")
            let phone = document.createElement("p")
            let image = document.createElement("img")
            owner.textContent = member.owner
            address.textContent = `Address: ${member.companyAddress}`
            phone.textContent = `Phone: ${member.phoneNumber}`
            domain.textContent = `URL: ${member.url}`;
            company.textContent = member.companyName;
            joinDate.textContent = `Joined: ${member.joinDate}`;
            
            let fulltext = `images/${member.image}.webp`

            image.setAttribute("src", fulltext);
            image.setAttribute("alt", member.image);
            image.setAttribute("loading", "lazy");

            membership.appendChild(company)
            membership.appendChild(owner)
            membership.appendChild(address)
            membership.appendChild(phone)
            membership.appendChild(image)
            membership.appendChild(domain)
            membership.appendChild(joinDate)
            membership.appendChild(domain)

            membership.classList.add("block")
            membership.classList.add("card2")
            document.querySelector("#filterBusiness").appendChild(membership)
        }
        else{
            membership.classList.add("listDirectory")
            domain.textContent = member.companyName;
            domain.setAttribute("href", member.url);
            company.textContent = member.companyName;
            joinDate.textContent = member.joinDate;
            
            membership.appendChild(company)
            membership.appendChild(joinDate)
            membership.appendChild(domain)

            membership.classList.add("block")
            membership.classList.add("card3")
            document.querySelector("#filterBusinessList").appendChild(membership)
        }
    });
}

getData("data/members.json", grid);