//Current inventory
var currentStone = 0;
var currentCopper = 0;
var currentTin = 0;
//Current inventory text
var invStone = currentStone + " Stone";
var invCopper = currentCopper + " Copper";
var invTin = currentTin + " Tin";
//Bind to HTML
document.getElementById('userStone').innerHTML = invStone;
document.getElementById('userCopper').innerHTML = invCopper;
document.getElementById('userTin').innerHTML = invTin;