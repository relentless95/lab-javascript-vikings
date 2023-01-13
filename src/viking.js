// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength= strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health-= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        } else{
            return `A Saxon has died in combat`
        }

    }

    // attack(){
    //     return this.strength

    // }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }

    addViking(vObject){
        this.vikingArmy.push(vObject)
        // return this.vikingArmy
    }
    addSaxon(sObject){
        this.saxonArmy.push(sObject)
        // return this.saxonArmy
    }
    vikingAttack(){
    
        let saxDamageReceiver =this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let damage = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].attack()
        let output = saxDamageReceiver.receiveDamage(damage);
        for(let i=0;i<this.saxonArmy.length;i++){
            if(this.saxonArmy[i].health<=0){
                this.saxonArmy.splice(i, 1);
                i--;
            }
        }

        return output
    }

    saxonAttack(){
        let vikDamageReceiver = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let damage = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].attack()
        let result = vikDamageReceiver.receiveDamage(damage)

        for(let i=0;i<this.vikingArmy.length;i++){
            if(this.vikingArmy[i].health<=0){
                this.vikingArmy.splice(i, 1);
                i--;
            }
        }
        return result
    }

    showStatus(){
        if(this.saxonArmy.length==0){
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length==0){
            return 'Saxons have fought for their lives and survived another day...'
        } else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >=1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

// const Aviking = new Viking("bjorn", 10, 5)
// console.log(Aviking)
// const Asaxon = new Saxon(9, 3)
// console.log(Asaxon)
// const theWar= new War()
// console.log(theWar)
// console.log(theWar.addSaxon(Asaxon))
// console.log(theWar.addViking(Aviking))
// console.log(theWar.saxonArmy[0])
// console.log(theWar.addViking(Aviking))
// console.log(theWar.addViking(Aviking))
// console.log(theWar.addSaxon(Asaxon))
