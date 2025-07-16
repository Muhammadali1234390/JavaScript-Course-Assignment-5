let secretNumber = 7
let guessNumber = +prompt("Enter your guess below:")

if(guessNumber + 1 == secretNumber || secretNumber + 1 == guessNumber){
    alert("Close enough to the answer. Try again!")
}
else if(guessNumber > 0 && guessNumber <10 && guessNumber !== 7){
    alert("Try again!")
}
else if(guessNumber == secretNumber){
    alert("Congratulations! You got the number right!")
}
else{
    alert("Plz enter a valid number or a number between 1 and 10")
}