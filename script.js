document.getElementById('binary-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the binary input value
    const binaryInput = document.getElementById('binary-input').value.trim();

    // Clear previous results and errors
    document.getElementById('result').textContent = '';
    document.getElementById('error').textContent = '';

    // Validate the input
    if (binaryInput.length === 0 || binaryInput.length > 8 || !/^[01]+$/.test(binaryInput)) {
        document.getElementById('error').textContent = 'Please enter a valid binary number (up to 8 digits).';
        return;
    }

    // Convert binary to decimal
    let decimalValue = 0;
    let exponent = binaryInput.length - 1;

    for (let digit of binaryInput) {
        decimalValue += parseInt(digit) * (2 ** exponent);
        exponent--;
    }

    // Display the result
    document.getElementById('result').textContent = `The decimal value of binary ${binaryInput} is ${decimalValue}`;
});