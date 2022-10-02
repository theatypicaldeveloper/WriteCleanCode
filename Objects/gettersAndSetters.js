// DON'T

function updateMileage(){
    // ...
    return {
        mileage: 0
    }
}

const car = updateMileage();
car.mileage = 100;

console.log(car.mileage) // 100

// DO
function updateMileage(){
    let mileage = 0;

    function getMileage(){
        return mileage;
    }

    function setMileage(value){
        mileage = value;
    }

    return {
        getMileage,
        setMileage
    }
}

const car = updateMileage();
car.setMileage(100);
console.log(car.getMileage()) // 100;