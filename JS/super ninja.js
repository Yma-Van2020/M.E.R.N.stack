
class Ninja{
    constructor(name, health=100,speed=3,strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
        
    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`The ninja's name is ${this.name}.Health is ${this.health}. Strength is ${this.strength}. Speed is ${this.speed}`)
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("a wise msg")
    }

    showSuperStats(){
        super.showStats()
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom()
superSensei.showStats()