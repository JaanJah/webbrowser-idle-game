var minerSent = false;
var minerTime = 5000;
var curMinerTime = minerTime;

function MinerWork(){
    DisableSendMiner();
    document.getElementById("sendMinerBtn").textContent = "Miner is working...";
    console.log("Miner sent to work")
    setTimeout(function() {
        currentStone += 1;
        invStone = currentStone + ' Stone';
        document.getElementById('userStone').innerHTML = invStone;
        console.log("Miner done working");
        EnableSendMiner();
        document.getElementById("sendMinerBtn").textContent = "Send miner to work";
    }, curMinerTime, console.log("Miner is working..."));
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

function SellOres(){
    userMoney += currentStone * stonePrice;
    currentStone = 0;
    invStone = 0;
}