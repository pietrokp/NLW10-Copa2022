function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.5;
function createCard(date, day, games) {
    delay = delay + 0.5;
    return `
        <div class="card" style="animation-delay: ${delay}s">
                    <h2>${date} <span>${day}</span></h2>
                    <ul>
                        ${games}
                    </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon') + createGame('brazil', '16:00', 'serbia')) +
    createCard("28/11", "segunda", createGame('switzerland', '13:00', 'brazil') + createGame('portugal', '16:00', 'uruguay')) +
    createCard("30/11", "quarta", createGame('australia', '12:00', 'denmark') + createGame('poland', '16:00', 'argentina') + createGame('saudiarabia', '16:00', 'mexico')) +
    createCard("02/12", "sexta", createGame('southkorea', '12:00', 'portugal') + createGame('serbia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'cameroon'))
