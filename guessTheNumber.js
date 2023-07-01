let winningNumber=19;
let userGuess=+prompt("guess a number");
console.log(typeof userGuess,userGuess);
if(winningNumber===userGuess){
    console.log("your guess is right!!");
}
else if(winningNumber>userGuess){
    console.log("too low!!!");

}
else{
    console.log("too high!!");
}