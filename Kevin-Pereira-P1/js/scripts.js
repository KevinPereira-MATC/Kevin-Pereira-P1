var user = 'Kevin';
var salutation = 'Hello, '
var greeting = salutation + user + ' Here is Brazils favorite dish.'

var greetingEl = document.getElementById('greeting')

greetingEl.textContent = greeting;


var price = 20;
var priceEl = document.getElementById('price');
 priceEl.textContent = price.toFixed(1)
