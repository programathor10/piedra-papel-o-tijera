function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("escribe tu eleccion (piedra, papel o tireja):").toLowerCase();
    if (!['piedra', 'papel', 'tijera'].includes(choice)) {
        alert("error opcion incorrecta! por favor ingrese piedra, papel, o tijera.");
        return getHumanChoice();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice){
        alert('Es un empate, el bot y vos escogieron ${humanChoice}');
    } else if(
        (humanChoice === 'piedra' && computerChoice === 'tijera')||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijera' && computerChoice === 'papel')){
            humanScore++;
            alert(`Tu ganas!! ${humanChoice} vence ${computerChoice}.`)
    } else{
        computerScore++;
        alert(`Tu pierdes!! ${computerChoice} vence ${computerChoice}.`)
    }
    alert(`Puntaje : Jugador (${humanScore}) || bot (${computerScore})`)
}


let humanSelection= getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
/*console.log(getComputerChoice());*/
/*
let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        alert(`It's a tie! You both chose ${humanChoice}.`);
        round = 0;
    } else if (
        (humanChoice === 'piedra' && computerChoice === 'scissors') ||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijera' && computerChoice === 'papel')
    ) {
        humanScore++;
        alert(`Tu ganas! ${humanChoice} vence ${computerChoice}.`);
    } else {
        computerScore++;
        alert(`Tu pierdes! ${computerChoice} vence ${humanChoice}.`);
    }
    
    alert(`Puntaje - Jugador: ${humanScore}, Computer: ${computerScore}`);

    round++;
    if (round < 1) {
        playRound();
    } else {
        if (humanScore > computerScore) {
            alert("Felicidades! Has ganado el juego.");
        } else if (humanScore < computerScore) {
            alert("Lo siento, has perdido el juego.");
        } else {
            alert("El juego termina en empate.");
        }
    }    

}

playRound();*/