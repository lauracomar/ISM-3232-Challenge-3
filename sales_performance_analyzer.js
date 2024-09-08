//Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(sales) {
    if (salesfigures.length === 0) return 0; // empty array
    let total= sales.reduce((sum, sales) => sum + sales, 0);
    return total / salesfigures.length; 
}
