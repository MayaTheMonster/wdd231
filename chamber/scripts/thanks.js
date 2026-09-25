const parameters = new URLSearchParams(window.location.search)
const firstName = parameters.get("first")
const lastName = parameters.get("last")
const email = parameters.get("email")
const phone = parameters.get("phone")
const business = parameters.get("organization")
const times = parameters.get("timestamp")

const firstMessage = document.querySelector("#first")
const secondMessage = document.querySelector("#second")
const thirdMessage = document.querySelector("#third")

firstMessage.textContent = `Thank you ${firstName} ${lastName} for successfully registering ${business}`
secondMessage.textContent = `Using the email ${email} on the phone ${phone}`
thirdMessage.textContent = `registration date: ${times}`
