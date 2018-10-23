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
        var buttonMiner = document.getElementById("sendMinerBtn");
        
		buttonMiner.disabled = true;
        buttonMiner.style.display = "none";
		
        displayProgressbar();
    }
}

function displayProgressbar() {
	var element = document.getElementById("progressbar-bar");
	var width = 1;

	var widthToAdd = 100 * 10 / curMinerTime; //TODO: figure out how to actually calculate this
	var id = setInterval(frame, 10);
	
	document.getElementById("progressbar").style.display = "block";
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		}
		else {
			width += widthToAdd;
			element.style.width = width + '%';
		}
	}
}

function EnableSendMiner(){
    if(minerSent){
        minerSent= false;
        var buttonMiner = document.getElementById("sendMinerBtn");
        buttonMiner.disabled = false;
        buttonMiner.style.display = "block";
        document.getElementById("progressbar").style.display = "none";
    }
}

function SellOres(){
    userMoney += currentStone * stonePrice;
    currentStone = 0;
    invStone = 0;
}
