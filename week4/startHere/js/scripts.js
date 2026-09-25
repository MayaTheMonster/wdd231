const results = document.querySelector("#results")

const myInfo = new URLSearchParams(window.location.search)

results.innerHTML = `
<p>test message: ${myInfo.get("first")}</p>
<p>test message: ${myInfo.get("last")}</p>
<p>test message: ${myInfo.get("location")}</p>
<p>test message: ${myInfo.get("date")}</p>
`