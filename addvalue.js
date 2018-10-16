var userStone = 0;
var currentStone = 0;
var stoneText = 'You have ' + currentStone.toString() + ' stone';

document.getElementById('YourStone').innerHTML = stoneText;
function MinerWork(){
    console.log("Miner sent to work")
    setTimeout(function() {
        userStone += 1;
        currentStone = userStone;
        stoneText = 'You have ' + currentStone.toString() + ' stone'
        document.getElementById('YourStone').innerHTML = stoneText
        console.log("Miner done working");
    }, 5000, console.log("Miner is working..."));
}