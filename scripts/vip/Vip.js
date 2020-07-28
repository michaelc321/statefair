const rides = document.querySelector(".rides")
const food = document.querySelector(".food")
const games = document.querySelector(".games")
const show = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const VipTicketHolders = () => {
    eventHub.addEventListener("vipTicketPurchased", (customEvent) => {
        rides.innerHTML += `
            <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("vipTicketPurchased", (customEvent) => {
        food.innerHTML += `
            <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("vipTicketPurchased", (customEvent) => {
        games.innerHTML += `
            <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("vipTicketPurchased", (customEvent) => {
        show.innerHTML += `
            <div class="person bigSpender"></div>
        `
    })
}

