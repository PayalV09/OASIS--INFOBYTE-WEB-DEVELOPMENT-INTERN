document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const unitInput = document.getElementById("unitInput").value;
    const outputDiv = document.getElementById("output");
    
    if (isNaN(tempInput)) {
        outputDiv.innerHTML = "⚠️ Please enter a valid temperature!";
        outputDiv.classList.add("show");
        return;
    }

    let convertedTemp;
    let conversionDetails;

    switch (unitInput) {
        case "Celsius":
            convertedTemp = `Fahrenheit: ${(tempInput * 9 / 5 + 32).toFixed(2)}°F | Kelvin: ${(tempInput + 273.15).toFixed(2)}K`;
            conversionDetails = `Converted from ${tempInput}°C`;
            break;
        case "Fahrenheit":
            convertedTemp = `Celsius: ${((tempInput - 32) * 5 / 9).toFixed(2)}°C | Kelvin: ${(((tempInput - 32) * 5 / 9) + 273.15).toFixed(2)}K`;
            conversionDetails = `Converted from ${tempInput}°F`;
            break;
        case "Kelvin":
            convertedTemp = `Celsius: ${(tempInput - 273.15).toFixed(2)}°C | Fahrenheit: ${((tempInput - 273.15) * 9 / 5 + 32).toFixed(2)}°F`;
            conversionDetails = `Converted from ${tempInput}K`;
            break;
    }

    outputDiv.innerHTML = `<strong>${convertedTemp}</strong><br>${conversionDetails}`;
    outputDiv.classList.add("show");
});
