var boughtUpgrades = [];
var availableUpgrades = [];

class Upgrade {
    constructor(neededUpgrades, name, action) {
        // Upgrades needed to be displayed
        this.neededUpgrades = neededUpgrades;
        this.name = name;
        this.id = "upgrades-" + name;
        this.action = action;


        this.addToAvailableUpgrades();
        this.isUpgradable();
    }

    // Checks if all needed upgrades are bought
    // if true, then displays this upgrade
    isUpgradable() {
        for (var i = 0; i < this.neededUpgrades.length; i++) {
            if (this.neededUpgrades.at(i) in availableUpgrades) {
                return false;
            }
        }

        this.displayUpgrade();

        return true;
    }

    // Adds this class to available upgrades
    addToAvailableUpgrades() {
        availableUpgrades.push(this);
    }

    // Adds this class from available upgrades
    // and adds it to boughtUpgrades
    // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    removeFromAvailableUpgrades() {
        var index = availableUpgrades.indexOf(this);
        
        if (index == -1) {
            console.log('Error: Failed to find index of', this);
        }
        else {
            availableUpgrades.splice(index, 1);
            boughtUpgrades.push(this);
            document.getElementById(this.id).remove();

            var ul = document.getElementById("bought-upgrades");
            var li = document.createElement("li");

            li.setAttribute("id", this.id);

            li.appendChild(document.createTextNode(this.name));
            ul.appendChild(li);
        }
    }

    // Displays this upgrade on page
    // https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
    displayUpgrade() {
        var ul = document.getElementById("available-upgrades");
        var li = document.createElement("li");

        li.setAttribute("id", this.id);
        li.setAttribute("onclick", "availableUpgrades[0].upgrade()");

        li.appendChild(document.createTextNode(this.name));
        ul.appendChild(li);
    }

    // Upgrades this upgrade
    upgrade() {
        this.removeFromAvailableUpgrades();
    }
}

// Loads all upgrades
function loadUpgrades() {
    const betterDrill = new Upgrade([], "betterDrill");
}

loadUpgrades();