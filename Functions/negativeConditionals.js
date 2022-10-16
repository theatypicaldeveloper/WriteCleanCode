// Avoid using negative conditionals

// DON'T

function isCarDamaged(car) {
    // ...
}

if (!isCarDamaged(car)) {
    // ...
}


// DO!

function isCarDamaged(car) {
    // ...
}

if (isCarDamaged(car)) {
    // ...
}