const Kelvin = 0; //The forecast today is 293 kelvin
let Celsius = (Kelvin-273);//The forecast in celsius is
let fahrenheit = Celsius * (9/5) + 32;//The forecast in fahrenheit is
fahrenheit = Math.floor(fahrenheit);//The fahrenheit with accurate value
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let Newton = Celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton`);