const Weapon = require ('./Weapon.js')
const Shield = require ('./Shield.js')

const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = null;
        this.shield = null;
    }

    getDefense() {
        return this.shield ? this.strength+this.shield.protection : this.strength;
    }

    getDamage() {
        return this.weapon ? this.strength+this.weapon.protection : this.strength;
    }

    // Launch a fight
    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - (this.getDamage()), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }

    
}


module.exports = Fighter;
