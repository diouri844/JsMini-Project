// numberAnalyzer.js


// add ur coder after commented lines : 


function analyzeNumbers(numbers) {
    let sum = 0;
    let largest = numbers[0];
    let smallest = numbers[0];
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        // Calculate sum
        
        // Find largest number
        i

        // Find smallest number
        

        // Count even and odd numbers : 
        
    }

    // Calculate average
    const average = (sum / numbers.length).toFixed(2);

    // Return results as an object
    return {
        sum,
        average: parseFloat(average), // Convert back to number
        largest,
        smallest,
        evenCount,
        oddCount,
    };
}

module.exports =  analyzeNumbers;