const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// ---------------- RIDES
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "rideTicket" ) {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
              detail: {
                  ticketId: clickEvent.target.value
              }
          })
          eventHub.dispatchEvent(rideEvent)

    }
})
// ---------------- FOOD
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "foodTicket" ) {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
              detail: {
                  ticketId: clickEvent.target.value
              }
          })
          eventHub.dispatchEvent(foodEvent)

    }
})
// ---------------- GAMES
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "gamesTicket" ) {
        const gamesEvent = new CustomEvent("gamesTicketPurchased", {
              detail: {
                  ticketId: clickEvent.target.value
              }
          })
          eventHub.dispatchEvent(gamesEvent)

    }
})
// ----------------- SHOWS
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "showTicket" ) {
        const showEvent = new CustomEvent("showTicketPurchased", {
              detail: {
                  ticketId: clickEvent.target.value
              }
          })
          eventHub.dispatchEvent(showEvent)

    }
})
// ----------------- VIP
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "vipTicket" ) {
        const vipEvent = new CustomEvent("vipTicketPurchased", {
              detail: {
                  ticketId: clickEvent.target.value
              }
          })
          eventHub.dispatchEvent(vipEvent)

    }
})
// ------------------ BUTTONS
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gamesTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="showTicket">Show Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="vipTicket">Full Package Ticket</button>
        </div>
    `
}
// -------------------------------------------------------

