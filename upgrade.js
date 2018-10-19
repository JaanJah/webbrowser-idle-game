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

        upgradeManager.upgrades.push(this);
        this.isUpgradable();
    }

    // Checks if all needed upgrades are bought
    // if true, then displays this upgrade
    isUpgradable() {
        for (var i = 0; i < this.neededUpgrades.length; i++) {
			var upgrade = this.neededUpgrades.at(i);
            if (upgrade in upgradeManager.upgrades ||
				!upgrade.bought) {
				return false;
            }
        }

        this.displayUpgrade();

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
			upgradeManager.upgrades.splice(index, 1);
            upgradeManager.upgrades.push(this);
            document.getElementById(this.id).remove();

            var ul = document.getElementById("upgrades-bought-list");
            var li = document.createElement("li");

            li.setAttribute("id", this.id);

            li.appendChild(document.createTextNode(this.name));
            ul.appendChild(li);
        }
    }

    // Displays this upgrade on page
    // https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
    displayUpgrade() {
        var ul = document.getElementById("upgrades-available-list");
        var li = document.createElement("li");

        li.setAttribute("id", this.id);
        li.onclick = function() {
			var upgrade = upgradeManager.getUpgrade(this.id);
			if (upgrade == null) {
				console.log("Error: Failed to get upgrade: '" + this.id + "'");
				return;
			}
			
			upgrade.buyUpgrade();
		}

		name = this.name + " - " + this.cost + "€";
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);
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
    }
}
