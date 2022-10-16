// Function names should say what they do

// DON'T!

function addToDate(date, month) {
    // ...
}

const date = new Date();

// it's hard to tell from the 
// function what's being added
addToDate(date, 1);


// DO!

function addMonthToDate(month, date) {
    // ...
}

const date = new Date();
addMonthToDate(1, date);
