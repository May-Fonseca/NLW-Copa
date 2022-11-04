function createGame(player1, hour, player2) {
    return `
<li>
    <img src="./nlw/assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./nlw/assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
</li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay= delay + 0.4;
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
   createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon') + 
     createGame('portugal', '13:00', 'ghana') +
     createGame('brazil', '16:00', 'serbia')) +
   createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia') + createGame('south korea', '10:00', 'ghana') +
     createGame('brazil', '13:00', 'switzerland') +
     createGame('portugal', '16:00', 'uruguay')) +
   createCard("02/12", "sexta", createGame('south korea', '12:00', 'portugal') +
   createGame('ghana', '12:00', 'uruguay') +
     createGame('brazil', '16:00', 'cameroon') + createGame('serbia', '16:00', 'switzerland'))