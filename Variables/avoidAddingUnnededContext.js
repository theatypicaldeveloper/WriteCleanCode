// WRITE CLEAN CODE #1 Variables

// Avoid adding unneded context

// DON'T
const cars = [
    {
        carBrand: 'Volvo',
        carPrice: 100,
    },
    {
        carBrand: 'Mercedes',
        carPrice: 125,
    },
];

const updatePrice = (price) => {
    return cars.forEach((car) => car.carPrice + price)
}

// DO
const cars = [
    {
        brand: 'Volvo',
        price: 100,
    },
    {
        brand: 'Mercedes',
        price: 125,
    },
];

const updatePrice = (price) => {
    return cars.forEach((car) => car.price + price);
}

