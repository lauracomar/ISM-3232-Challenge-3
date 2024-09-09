//Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    if (salesFigures.length === 0) return 0; // empty array
    let total= salesFigures.reduce((sum, sales) => sum + sales, 0);
    return total / salesFigures.length; 
}

// Task 2: Create a Function to Determine Performance Rating
function  determinePerformanceRating(avgsales){
    if (avgsales > 10000)
        return (`Excellent `);
    else if (avgsales>= 7000 && avgsales<= 10000)
        return  (`Good`);
    else if (avgsales>=4000 && avgsales<7000)
        return  ('Satisfactory');
    else return (`Needs Improvement`);
}

// Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(data){
    if (data.length === 0 ) return {topPerformer: null, bottomPerformer: null}

    const topPerformer = data.reduce((top, salesPerson) => calculateAverageSales(top.sales) >= calculateAverageSales(salesPerson.sales) ? top : salesPerson  ,data[0])

    const bottomPerformer = data.reduce((bottom, salesPerson) => calculateAverageSales(bottom.sales) <= calculateAverageSales(salesPerson.sales) ? bottom : salesPerson  ,data[0])
    
    return {topPerformer, bottomPerformer}
    
}

// Task 4: Combine Functions to Generate a Performance Report
function generatePerformanceReport(data){
    const report = data.map((salesPerson) => ({
        name: salesPerson.name, 
        avgSales: calculateAverageSales(salesPerson.sales), 
        rating: determinePerformanceRating(calculateAverageSales(salesPerson.sales)),
    }))

    const topPerformer = findTopAndBottomPerformers(data).topPerformer.name
    const bottomPerformer = findTopAndBottomPerformers(data).bottomPerformer

    return {report, topPerformer, bottomPerformer}
}

