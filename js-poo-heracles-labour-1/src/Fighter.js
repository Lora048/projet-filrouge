/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    }
    fight(anotherFighter) {
        // console.log(`Dexterity : ${anotherFighter.dexterity}`)
        // console.log(`Strength : ${this.strength}`)
        // console.log(`Points de vie de ${anotherFighter.name} : ${anotherFighter.life}`)
        console.log(`${this.name} attacks ${anotherFighter.name}`)
        const damagePoints = Math.ceil(Math.random() * this.strength);
        const damagePointsMitigate = (damagePoints - anotherFighter.dexterity) < 0 ? 0 : damagePoints - anotherFighter.dexterity;
        // console.log(`Attaque avant défense: ${damagePoints}`)
        // console.log(`Attaque finale: ${damagePointsMitigate}`)
        anotherFighter.life = (anotherFighter.life - damagePointsMitigate) < 0 ? 0 : anotherFighter.life - damagePointsMitigate;
        console.log(`${anotherFighter.name} : ${anotherFighter.life}`)
      }

    isAlive() {
        if (this.life > 0){
            return true;
        } else {
            return false;
        }
    }
}


export { Fighter, MAX_LIFE };