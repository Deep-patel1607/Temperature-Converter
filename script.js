const input = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const result = document.getElementById('result');
const error = document.getElementById('error');
const button = document.getElementById('convertBtn');

button.addEventListener('click', () => {
  const temp = parseFloat(input.value);
  const unit = fromUnit.value;

  // Reset messages
  result.textContent = '';
  error.textContent = '';

  if (isNaN(temp)) {
    error.textContent = 'Please enter a valid number!';
    return;
  }

  let conversions = {};

  switch (unit) {
    case 'C':
      conversions = {
        Fahrenheit: (temp * 9/5 + 32).toFixed(2),
        Kelvin: (temp + 273.15).toFixed(2)
      };
      break;
    case 'F':
      conversions = {
        Celsius: ((temp - 32) * 5/9).toFixed(2),
        Kelvin: (((temp - 32) * 5/9) + 273.15).toFixed(2)
      };
      break;
    case 'K':
      conversions = {
        Celsius: (temp - 273.15).toFixed(2),
        Fahrenheit: ((temp - 273.15) * 9/5 + 32).toFixed(2)
      };
      break;
  }

  result.innerHTML = `
    Converted Temperatures:<br>
    ${Object.entries(conversions)
      .map(([unit, value]) => `${value} °${unit[0]}`)
      .join('<br>')}
  `;
});
