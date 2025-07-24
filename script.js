function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("escribe tu eleccion (piedra, papel o tireja):").toLowerCase();
    if (!['piedra', 'papel', 'tijera'].includes(choice)) 
        {
            alert("error opcion incorrecta! por favor ingrese piedra, papel, o tijera.");
            return getHumanChoice();
        }
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice)
            {
            alert(`Es un empate, el bot y vos escogieron ${humanChoice}`)
            round ++;
            humanScore = humanScore;
            computerScore = computerScore;
            } else if(
            (humanChoice === "piedra" && computerChoice === "tijera")||
            (humanChoice === "papel" && computerChoice === "piedra") ||
            (humanChoice === "tijera" && computerChoice === "papel"))
            {
                alert(`Tu ganas!! ${humanChoice} vence ${computerChoice}.`)
                humanScore++;
                round++;
            } else
                {
                alert(`Tu pierdes!! ${computerChoice} vence ${humanChoice}.`)
                computerScore++;
                round++;
                }
        alert(`Puntaje : Jugador (${humanScore}) || bot (${computerScore}). Ronda: ${round}`)
    }
    
    while (humanScore < 5 && computerScore < 5){
        let humanSelection= getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if (humanScore === 5){
        alert("Felicitaciones ganaste eljuego!!!");
    } else if (computerScore === 5){alert("El bot a sido mejor que tu!!!")}
}
playGame()
 /*la logica de los rounds fue por una mal interpretacion mia, pero me gusto como quedo el trabajo con eso implementado por lo menos ara ir sabiendo cuantas rondas van*/