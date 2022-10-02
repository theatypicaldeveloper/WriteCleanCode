// DON'T

class Car {
    constructor(transmission, mileage, color) {
        this.transmission = transmission;
        this.mileage = mileage;
        this.color = color;
    }

    setTransmission(transmission) {
        this.transmission = transmission;
    }
    setMileage(mileage) {
        this.mileage = mileage;
    }
    setColor(color) {
        this.color = color;
    }

    save() {
        console.log(this.transmission, this.mileage, this.color);
    }
}

const car = new Car('automatic', 150, 'yellow');
car.setColor('red');
car.save();

// DO

class Car {
    constructor(transmission, mileage, color) {
        this.transmission = transmission;
        this.mileage = mileage;
        this.color = color;
    }

    setTransmission(transmission) {
        this.transmission = transmission;
        // Returning this for chaining
        return this;
    }
    setMileage(mileage) {
        this.mileage = mileage;
        // Returning this for chaining
        return this;
    }
    setColor(color) {
        this.color = color;
        // Returning this for chaining
        return this;
    }

    save() {
        console.log(this.transmission, this.mileage, this.color);
        // Returning this for chaining
        return this;
    }
}

const car = newCar('automatic', 150, 'yellow').setColor('red').save();