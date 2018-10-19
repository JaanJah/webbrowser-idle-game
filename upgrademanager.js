class UpgradeManager {
	constructor() {
		this.upgrades = [];
		
		this.loadUpgrades();
	}
	
	// Loads all upgrades
	// https://api.jquery.com/jquery.getjson/
	loadUpgrades() {
		$.getJSON("https://cdn.glitch.com/d9abad30-d89e-4a5f-9be1-2c9dbc8b45f1%2Fupgrades.json?1539980974468", function(data) {
			$.each(data["upgrades"], function(key, value) {
				var upgrade = new Upgrade(value["requiredUpgrades"],
										  value["name"],
										  value["cost"],
										  new Function(value["function"]));
			});
			
			upgradeManager.updateText();
		});
	}
	
	getUpgrade(id) {
		for (var i in this.upgrades) {
			var upgrade = this.upgrades[i];
			
			if (upgrade.id == id ||
				upgrade.name == id) {
				return upgrade;
			}
		}
		
		return null;
	}
	
	// Checks if any upgrades have been bought
	// and displays this upgrade
	updateAvailable() {
		for (var i = 0; i < this.upgrades.length; i++) {
			var upgrade = this.upgrades[i];
			upgrade.isUpgradable();
		}
	}
	
	// Changes available upgrade text colors
	// based on userMoney
	updateText() {
		for (var i in this.upgrades) {
			var upgrade = this.upgrades[i];
			var element = document.getElementById(upgrade.id);

			if (element == null) {
				continue;
			}

			if (upgrade.bought) {
				continue;
			}

			if (userMoney < upgrade.cost) {
				element.style.color = "red";
			}
			else {
				element.style.color = "green";
			}
		}
	}
}

var upgradeManager;

window.onload = function() {
	upgradeManager = new UpgradeManager();
}
