class Upgrade {
    constructor(neededUpgrades, name, cost, action) {
        // Upgrades needed to be displayed
        this.neededUpgrades = neededUpgrades;
        this.name = name;
        this.cost = cost;
        this.id = "upgrades-" + name;
        // Function executed when bought
        this.action = action;
        this.bought = false;
        this.displayed = false;

        upgradeManager.upgrades.push(this);
        this.isUpgradable();
    }

    // Checks if all needed upgrades are bought
    // if true, then displays this upgrade
    isUpgradable() {
		if (this.bought ||
			this.displayed) {
			return false;
		}
		
        for (var i = 0; i < this.neededUpgrades.length; i++) {
			var upgrade = upgradeManager.getUpgrade(this.neededUpgrades[i]);
			
			if (!upgrade.bought) {
				return false;
			}
        }

        return true;
    }

    // Adds this class from available upgrades
    // and adds it to boughtUpgrades
    // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    removeFromAvailableUpgrades() {
        var index = upgradeManager.upgrades.indexOf(this);
        
        if (index == -1) {
            console.log('Error: Failed to find index of', this);
        }
        else {
            document.getElementById(this.id).remove();
            this.createElement(true);
        }
    }
    
    createElement(bought) {
		var ul;
        var li = document.createElement("li");
        var name = this.name;
        
        if (bought) {
			li.setAttribute("class", "upgrade-bought");
			ul = document.getElementById("upgrades-bought-list");
			
		}
		else {
			ul = document.getElementById("upgrades-available-list");
			li.setAttribute("class", "upgrade-available");
			li.style.cursor = "pointer"; //TODO: load from css
			
			li.onclick = function() {
				var upgrade = upgradeManager.getUpgrade(this.id);
				if (upgrade == null) {
					console.log("Error: Failed to get upgrade: '" + this.id + "'");
					return;
				}
			
				upgrade.buyUpgrade();
			}
			
			name += " - " + this.cost + "€";
		}
		
		li.setAttribute("id", this.id);
		
		li.appendChild(document.createTextNode(name));
        ul.appendChild(li);
        
        return li;
	}

    // Displays this upgrade on page
    // https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
    displayUpgrade() {
        this.createElement(false);
        this.displayed = true;
        upgradeManager.updateText();
    }

    // buy this upgrade
    buyUpgrade() {
        if (userMoney < this.cost) {
            return false;
        }

        setMoney(userMoney - this.cost);
        this.bought = true;

        this.removeFromAvailableUpgrades();
        this.action();
        
        upgradeManager.updateAvailable();
    }
}
