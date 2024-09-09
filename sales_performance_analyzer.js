//Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    if (salesFigures.length === 0) return 0; // empty array
    let total= salesFigures.reduce((sum, sales) => sum + sales, 0);
    return total / salesFigures.length; 
}

// Task 2: Create a Function to Determine Performance Rating
function  determinePerformanceRating(avgsales){
    if (avgsales > 10000)
        console.log(`Excellent`);
    else if (avgsales>= 7000 && avgsales<= 10000)
        console.log (`Good`);
    else if (avgsales>=4000 && avgsales<7000)
        console.log (`Satisfactory`);
    else console.log(`Needs Improvement`);
}

// Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(data){
    if (data.length === 0 ) return {topPerformer: null, bottomPerformer: null}

    const topPerformer = data.reduce((top, salesPerson) => calculateAverageSales(top.sales) >= calculateAverageSales(salesPerson.sales) ? top : salesPerson  ,data[0])

    const bottomPerformer = data.reduce((bottom, salesPerson) => calculateAverageSales(bottom.sales) <= calculateAverageSales(salesPerson.sales) ? bottom : salesPerson  ,data[0])
    
    return {topPerformer, bottomPerformer}
    
}

