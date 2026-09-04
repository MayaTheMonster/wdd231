const today = new Date();
const year = today.getFullYear();
const year2 = document.querySelector("#currentyear");
year2.innerHTML = '&copy' + year;

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;