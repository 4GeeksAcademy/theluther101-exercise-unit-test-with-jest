let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// fromDollarToYen
test("3.50 dollar should be 511.91 yen", () => {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 / 1.07 * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// fromYenToPound
test("3.5 Yen should be 1.07 pound", () => {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 / 156.5 * .87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
// // Import the function sum from the app.js file
// const { sum } = require('./app.js');

// // Start your first test
// test('adds 14 + 9 to equal 23', () => {
//     // Inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // We expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });