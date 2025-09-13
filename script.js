// console.log('Hello, World!');
function getComputerChoice(){
    let v=Math.floor(Math.random() * 3);
    let choice;
    if(v==0){
        choice="rock";
    }
    else if(v==1){
        choice="paper";
    }      
    else{
        choice="scissors";
    }
  return choice;
}
console.log(getComputerChoice());
function getHumanChoice(){
    let user =prompt("Enter your choice (rock, paper, scissors): ");
    let Hchoice;
    if(user=='rock'){
        Hchoice="rock";
    }
    else if(user=='paper'){
        Hchoice="paper";
    }      
    else{
        Hchoice="scissors";
    }
  return Hchoice;
}
console.log(getHumanChoice());
let humanscore=0;
let computerscore=0;
function playRound(humanChoice,computerChoice){
     let result;

    if ((humanChoice == 'rock' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'paper') || (humanChoice == 'scissors' && computerChoice == 'scissors')) {
        result = "Draw";
    }

    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        result = "Human wins !";
    }

    else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        result = "computer wins !";
    }

    else {
        result = "invalid choice !";
    }

    return result;

}
function playGame(){
    for(let i=0;i<5;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        let result=playRound(humanChoice,computerChoice);
        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(result);
    }
}
playGame();
