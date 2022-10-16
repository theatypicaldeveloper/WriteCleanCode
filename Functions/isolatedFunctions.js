// Functions should do one thing

// DON'T!
// it has checker & execution functions
function fixCars(cars) {
    cars.forEach((car) => {
        if (car.isBroken()) {
            fix(car);
        }
    })
};

// DO!
// separate execution function
function fixBrokenCars(car) {
    cars.filter((isCarBroken.forEach(fix)))
}

// separate checker function
function isCarBroken(car) {
    return car.isBroken();
}

