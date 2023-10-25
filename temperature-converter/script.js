/* 
celsius to fahrenheit
F = ( ( 9 / 5) * c ) + 32

fahrenheit to celsius
c = ( 5 / 9) x ( f - 32 )
*/

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

celsius.addEventListener("keyup", function (e) {
  let value = parseFloat(this.value);
  let f = (9 / 5) * value + 32;
  fahrenheit.value = f.toFixed(2);
});

fahrenheit.addEventListener("keyup", function (e) {
  let value = parseFloat(this.value);
  let c = (5 / 9) * (value - 32);
  celsius.value = c.toFixed(2);
});
