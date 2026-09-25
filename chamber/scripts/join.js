const time = document.querySelector("#timestamp")
const stillToday = new Date();
time.value = stillToday.toString();

const bronze = document.querySelector("#infoBronze")
const silver = document.querySelector("#infoSilver")
const nonProf = document.querySelector("#infoNP")
const gold = document.querySelector("#infoGold")
const show = document.querySelector("#show1")
const closeMod =  document.querySelector("#closeMode")
const title =  document.querySelector("#titleMode")
const thing1 = document.querySelector("#thing1")
const thing2 = document.querySelector("#thing2")
const thing3 = document.querySelector("#thing3")

bronze.addEventListener("click", () =>{
    show.showModal();
    show.classList.add("bronze")
    title.textContent = "Bronze Tier"
    thing1.textContent = "Cost: free"
    thing2.textContent = "Requirements: own a business in the area, make money, have a live representative in the area"
    thing3.textContent = "Benefits: Joining the chamber, being able to vote, being able to participape of group meetings"
    closeMod.addEventListener("click", () =>{
        show.classList.remove("bronze")
        show.close();
    })
})
silver.addEventListener("click", () =>{
    show.showModal();
    show.classList.add("silver")
    title.textContent = "Silver Tier"
    thing1.textContent = "Cost: 10"
    thing2.textContent = "Requirements: own a business in the area, make lots of money, have a live representative in the area"
    thing3.textContent = "Benefits: Joining the chamber, being able to vote, being able to participape of group meetings, recieve sponsorships, be featured, being able to be choosen as business of the month"
    closeMod.addEventListener("click", () =>{
        show.classList.remove("silver")
        show.close();
    })
})
nonProf.addEventListener("click", () =>{
    show.showModal();
    title.textContent = "Non-Profit Tier"
    thing1.textContent = "Cost: free"
    thing2.textContent = "Requirements: own a business in the area, make money, have a live representative in the area, make 0 money"
    thing3.textContent = "Benefits: Joining the chamber, being able to vote, being able to participape of group meetings, recieve sponsorships, be featured"
    closeMod.addEventListener("click", () =>{
        show.close();
    })
})
gold.addEventListener("click", () =>{
    show.showModal();
    show.classList.add("gold")
    title.textContent = "Gold Tier"
    thing1.textContent = "Cost: free"
    thing2.textContent = "Requirements: own a business in the area, make money, have a live representative in the area"
    thing3.textContent = "Benefits: Benefits: Joining the chamber, being able to vote, being able to participape of group meetings, recieve sponsorships, be featured, being able to be choosen as business of the month, looking really cool, exclusive events"
    closeMod.addEventListener("click", () =>{
        show.classList.remove("gold")
        show.close();
    })
})