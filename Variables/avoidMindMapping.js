// WRITE CLEAN CODE #1 Variables

// Avoid mind mapping

// DON'T
const car = [
    {
        brand: 'Volvo',
        price: 100,
    },
    {
        brand: 'Mercedes',
        price: 125,
    },
]

cars.map((car) => car.price * 20);

// DO
const car = [
    {
        brand: 'Volvo',
        price: 100,
    },
    {
        brand: 'Mercedes',
        price: 125,
    },
]

const CURRENT_TAX = 20;

cars.map((car) => car.price + CURRENT_TAX);