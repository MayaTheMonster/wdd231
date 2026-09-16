async function getData(path){
    const response = await fetch(path);
    const data = await response.json();
    showSponsor(data);
}
function pickRandom(max) {
    return Math.floor(Math.random() * max);
}

function createSponsor(list){
    let repeat = 3;
    while (repeat > 0){
        let random = pickRandom(list.length);
        let member = list[random]
        let membership = document.createElement("section")
        let company = document.createElement("h2")
        if(member.membership == 3){
            membership.classList.add("gold")
        }
        else{
            membership.classList.add("silver")
        }
        let joinDate = document.createElement("p")
        let domain = document.createElement("a")
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
        repeat -=1;
        list.splice(random, 1)
    }
};

function showSponsor(data){
    console.log(data);
    let integer = Object.values(data);
    const integer2 = integer.filter(integer => integer.membership >= 2);
    createSponsor(integer2)
}

getData("data/members.json");