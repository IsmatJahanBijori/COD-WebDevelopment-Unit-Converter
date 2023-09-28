
function convertLength() {
    // get the values
    const leftValue = parseFloat(document.getElementById('leftValue').value);
    const leftUnit = document.getElementById('leftUnit').value;
    const rightUnit = document.getElementById('rightUnit').value;

    const conversionFactors = {
        Meter: 1,
        Centimeter: 0.01,
        Kilometre: 1000,
        Millimetre: 0.001
    };

    // conversion
    const result = (leftValue * conversionFactors[leftUnit]) / conversionFactors[rightUnit];

    // Display the result on the right side
    document.getElementById('rightValue').value = result.toFixed(2); 
}

//  conversion function to the input change event
document.getElementById('leftValue').addEventListener('input', convertLength);
document.getElementById('leftUnit').addEventListener('change', convertLength);
document.getElementById('rightUnit').addEventListener('change', convertLength);

convertLength();
