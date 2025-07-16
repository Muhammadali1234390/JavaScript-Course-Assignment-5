let number = +prompt("Enter your number")

if(number % 2 == 0){
    alert("Your number is even")
}
else if(number % 2 !==0 && !isNaN(number) && number !== ''){
    alert("Your number is odd")
}
else if(isNaN(number) && number == ''){
alert("Plz enter a valid number")
}
else{
    alert("Plz enter a valid number")
}