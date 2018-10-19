

class UpgradeManager {
	constructor() {
		this.upgrades = [];
		
		this.loadUpgrades();
	}
	
	// Loads all upgrades
	// https://api.jquery.com/jquery.getjson/
	loadUpgrades() {
		$.getJSON("https://cdn.glitch.com/d9abad30-d89e-4a5f-9be1-2c9dbc8b45f1%2Fupgrades.json?1539860103225", function(data) {
			$.each(data["upgrades"], function(key, value) {
				var upgrade = new Upgrade(value[0]["requiredUpgrades"],
										  value[0]["name"],
										  value[0]["cost"],
										  new Function(value[0]["function"]));
			});
		});
	}
	
	getUpgrade(id) {
		for (var i in this.upgrades) {
			var upgrade = this.upgrades[i];
			
			if (upgrade.id == id) {
				return upgrade;
			}
		}
		
		return null;
	}
	
}

var upgradeManager = new UpgradeManager();
