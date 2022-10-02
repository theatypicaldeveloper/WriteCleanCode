const car = {
    brand: 'Volvo',
    productionYear: 2022,
    config: {
        transmission: 'manual',
        power: 115,
        parkAssist: false,
    },
};

// DON'T
const brand = car.brand;
const productionYear = car['productionYear'];

console.log(brand) // Volvo
console.log(productionYear) // 2022

// DO
const {brand: carBrand, productionYear} = car;

console.log(carBrand) // Volvo
console.log(productionYear) // 2022