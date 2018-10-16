var userStone = 0;
var currentStone = 0;
var stoneText = 'You have ' + currentStone.toString() + ' stone';
var minerSent = false;

document.getElementById('YourStone').innerHTML = stoneText;
function MinerWork(){
    DisableSendMiner();
    console.log("Miner sent to work")
    setTimeout(function() {
        userStone += 1;
        currentStone = userStone;
        stoneText = 'You have ' + currentStone.toString() + ' stone'
        document.getElementById('YourStone').innerHTML = stoneText
        console.log("Miner done working");
        EnableSendMiner();
    }, 5000, console.log("Miner is working..."));
}

function DisableSendMiner(){
    if(!minerSent){
        minerSent= true;
        document.getElementById("sendMinerBtn").disabled = true;
    }
}

function EnableSendMiner(){
    if(minerSent){
        minerSent= false;
        document.getElementById("sendMinerBtn").disabled = false;
    }
}