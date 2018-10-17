var userMoney = 0;
//Current inventory
var currentStone = 0;
var currentCopper = 0;
var currentTin = 0;
//Current inventory text
var invStone = currentStone + " Stone";
var invCopper = currentCopper + " Copper";
var invTin = currentTin + " Tin";
//Ore prices
var stonePrice = 10;
var copperPrice = 50;
var tinPrice = 100;
//Bind to HTML
document.getElementById('userStone').innerHTML = invStone;
document.getElementById('userCopper').innerHTML = invCopper;
document.getElementById('userTin').innerHTML = invTin;
document.getElementById('userMoneyText').innerHTML = 'You have ' + userMoney + '€';

function SellOres(){
    userMoney += (currentStone * stonePrice)
        + (currentCopper * copperPrice)
        + (currentTin * tinPrice);
    SoldOres();
    document.getElementById('userMoneyText').innerHTML = 'You have ' + userMoney + '€';
    document.getElementById('userStone').innerHTML = invStone;
}

function SoldOres(){
    currentStone = 0;
    currentCopper = 0;
    currentTin = 0;
    invStone = currentStone + " Stone";
    invCopper = currentCopper + " Copper";
    invTin = currentTin + " Tin";
    console.log("Sold all your ores");
}