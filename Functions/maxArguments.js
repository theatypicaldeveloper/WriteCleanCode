// Use max 2 function arguments

// DON'T!

function updateCarParams(
    engineSize, colour, parkingAssistance
    ) {
        // ...
    }

updateCarParams(1.6, 'red, true');

// DO!
function updateCarParams({
    engineSize, colour, parkingAssistance
}) {
    // ...
}

updateCarParams({
    engineSize: 1.6,
    colour: 'red',
    parkingAssistance: true,
})

// To make it more obvious:

// 1) When someone looks at the function signature it's
// immidately clear what properties are being used.

// 2) It can be used to simulate named params.

// 3) Destructuring also clones the specified primitive
// values of the argument object passed into the function.
// This can help prevent side effect.

// 4) Linters can warn you about unused props, which would
// be impossible without destructuring.