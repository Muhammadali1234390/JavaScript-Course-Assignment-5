let traffic = prompt("Enter your traffic colour")

if (traffic == "Red" || traffic == "red"){
    alert("Must Stop!")
}
else if(traffic == "Yellow" || traffic == "yellow"){
    alert("Ready to move!")
}
else if(traffic == "Green" || traffic == "green"){
    alert("Move Now!")
}
else{
    alert("Please enter a valid colour!")
}