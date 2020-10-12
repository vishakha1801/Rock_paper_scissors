let userScore = 0;
let computerScore = 0;
let userScore_span =document.getElementById("user-score");
let computerScore_span =document.getElementById("computer-score");
let scoreboard_div =document.querySelector(".score-board");
let result_p=document.querySelector(".result");
let rock_div =document.getElementById("r");
let paper_div =document.getElementById("p");
let scissors_div =document.getElementById("s");
let reset_button = document.getElementById("reset-button");


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
    else return "Scissors"
}

function win(userChoice, computerChoice){
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    const userChoice_div= document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} . You win!` ;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}


function lose(userChoice, computerChoice){
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    const userChoice_div= document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You lost :(` ;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300);

}


function draw(userChoice, computerChoice){
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    const userChoice_div= document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It's a draw!` ;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),300);
    
}

function game(userChoice){
    const computerChoice= getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS.");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES.");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("ITS A DRAW.");
            draw(userChoice, computerChoice);
            break;
    }
    
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissors_div.addEventListener('click',function(){
    game("s");
})
reset_button.addEventListener('click', function() {
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    computerScore = 0;
    userScore = 0;
})
}
main();

