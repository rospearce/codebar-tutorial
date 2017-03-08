/** Unit Converter **/



function convertFahrenheitToCelsius(fahrenheit) {
  //conversion code
	 var celsius = (fahrenheit - 32)/1.8;
	 return celsius.toFixed(1);
}

function convertCelsiusToFahrenheit(celsius) {
  //conversion code
	 var fahrenheit = celsius * 1.8 + 32;
	 return fahrenheit.toFixed(1);
}

