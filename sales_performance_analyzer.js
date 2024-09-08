//Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(sales) {
    if (salesfigures.length === 0) return 0; // empty array
    let total= sales.reduce((sum, sales) => sum + sales, 0);
    return total / salesfigures.length; 
}

// Task 2: Create a Function to Determine Performance Rating
function  determinePerformanceRating(avgsales){
    if (avgsales > 10000)
        console.log(`Excellent`);
    else if (avgsales>= 7000 && avgsales<= 10000)
        console.log (`Good`);
    else if (avgsales>=4000 && avgsales<7000)
        console.log (`Satisfactory`);
    else (avgsales<4000)
    console.log (`Needs Improvement`);
}

