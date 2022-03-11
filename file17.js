// Nested IF else


let winningNum=19;
// let userGuess=prompt("Guess a number");//This is in the form of string
// console.log(typeof userGuess,userGuess );


let userGuess= +prompt("Guess a number");//This is in the form of Number
console.log(typeof userGuess,userGuess );


if (userGuess===winningNum)
{ console.log("Your guess is right" );
}
else{
    if(userGuess < winningNum)
    {    console.log("too low !!!" );
    }
    else{
        console.log("too high !!!" );
        }
}