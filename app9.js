let temperature = prompt("Enter your temperature in celsius (no need to include the celsius ° sign)")

if(temperature>40){
    alert("It is too hot outside!")
}
else if(temperature>30 && temperature<40){
    alert("The weather today is normal!")
}
else if(temperature>20 && temperature<30){
    alert("Today's weather is cool!")
}
else if(temperature>10 && temperature<20){
    alert("OMG! Today's weather is so cool!")
}