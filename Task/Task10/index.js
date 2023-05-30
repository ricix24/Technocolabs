let userInput = "rock";
userInput = userInput.toLowerCase();
const getUserChoice = (userInput) =>{
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors' )
        return userInput;
    else
        console.log("ERROR! write somthing else");
}

const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber===0)
        return 'rock';
    else if(randomNumber===1)
        return 'paper';
    else
        return 'scissors';
}

// //Step 6:
// for(let i=0;i<15;i++)
// {
//     const computerInput = getComputerChoice();
//     console.log(`Computer choice: ${computerInput}`);
// }

let determineWinner = (userInput, computerInput) =>{
// function determineWinner(userInput, computerInput){
    if(userInput===computerInput)
        return 'Tie';
    else if(userInput==='rock'){
        if(computerInput==='paper')
            return ' computer won';
        else
            return 'user won';
    }
    else if(userInput==='paper'){
        if(computerInput==='scissors')
            return 'computer won';
        else 
            return 'user won';
    }
    else if(userInput==='scissors'){
        if(computerInput=='rock')
            return 'computer won';
        else 
            return 'user won';
    }
}

// const playGame = () =>{
function playGame(){
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log(`userChoice: ${userChoice}`);
    console.log(`computerChoice: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
}
playGame();