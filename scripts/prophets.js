const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);  
    const data = await response.json();
    
    displayProphets(data.prophets);
}
getProphetData(url);

function displayProphets(prophets){
    prophets.forEach((entry) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate =  document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${entry.name} ${entry.lastname}`;
        birthDate.textContent = `Date of Birth: ${entry.birthdate}`
        birthPlace.textContent = `Place of Birth: ${entry.birthplace}`
        portrait.setAttribute('src', entry.imageurl);
        portrait.setAttribute('alt', `Portrait of ${entry.name} ${entry.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        document.querySelector('#cards').appendChild(card);
    });
}