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


    
    while (humanScore < 5 && computerScore < 5){
        let humanSelection= getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if (humanScore === 5){
        alert("Felicitaciones ganaste eljuego!!!");
    } else if (computerScore === 5){alert("El bot a sido mejor que tu!!!")}
}

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let resultado = "";

    if (humanChoice === computerChoice)
            {
            resultado =`Es un empate, el bot y vos escogieron ${humanChoice}`;
            humanScore = humanScore;
            computerScore = computerScore;

            } else if(
            (humanChoice === "piedra" && computerChoice === "tijera")||
            (humanChoice === "papel" && computerChoice === "piedra") ||
            (humanChoice === "tijera" && computerChoice === "papel"))
            {
                resultado = `Tu ganas!! ${humanChoice} vence ${computerChoice}.`;
                humanScore++;
            } else
                {
                resultado = `Tu pierdes!! ${computerChoice} vence ${humanChoice}.`;
                computerScore++;
                }

        return resultado;
    }
/*playGame()*/
 /*la logica de los rounds fue por una mal interpretacion mia, pero me gusto como quedo el trabajo con eso implementado por lo menos ara ir sabiendo cuantas rondas van*/

const btnPiedra = document.querySelector("#piedra");
const btnPapel = document.querySelector("#papel");
const btnTijera = document.querySelector("#tijera");
const resultadoDiv = document.createElement("div");
resultadoDiv.id = "resultado";
document.body.appendChild(resultadoDiv);

btnPiedra.onclick = () => {
    const computerChoice = getComputerChoice();
    let resultado = playRound("piedra", computerChoice);
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.display = "block";
    resultadoDiv.style.margin = "10px";
    resultadoDiv.style.padding = "10px";
    resultadoDiv.style.backgroundColor = resultado.includes("ganas") ? "lightgreen" : "lightcoral";
};
btnPapel.onclick = () => {
    const computerChoice = getComputerChoice();
    let resultado = playRound("papel", computerChoice);
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.display = "block";
    resultadoDiv.style.margin = "10px";
    resultadoDiv.style.padding = "10px";
    resultadoDiv.style.backgroundColor = resultado.includes("ganas") ? "lightgreen" : "lightcoral";
};
btnTijera.onclick = () => {
    const computerChoice = getComputerChoice();
    let resultado = playRound("tijera", computerChoice)
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.display = "block";
    resultadoDiv.style.margin = "10px";
    resultadoDiv.style.padding = "10px";
    resultadoDiv.style.backgroundColor = resultado.includes("ganas") ? "lightgreen" : "lightcoral";
};

