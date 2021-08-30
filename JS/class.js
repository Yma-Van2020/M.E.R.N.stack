class Vehicle{
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
    }

    drive(){
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`)
    }

    parentFunction(){
        return "this is coming from the parent"
    }
}

const car = new Vehicle("BMW", "M5", "blue")
car.drive()
console.log(car.miles)

class M5 extends Vehicle {
    constructor(color){
        super("BMW", "M5", color)
        this.hp = 616;
    }

printSpecSummary(){
    console.log(
        `BMW with ...... packin${this.hp} HP AND 553lb-ft TQ`
    ) 
}

childFunction(){
    const msg = super.parentFunction() ///use super can call the parent's method
    console.log(msg)
}

}

const car2 = new M5("white")
car2.drive()
car2.childFunction()
