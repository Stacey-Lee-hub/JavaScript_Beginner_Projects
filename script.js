// Temperature Conversion Program
let textBox = document.getElementById("textBox");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let result = document.getElementById("result");
let temp;

function convert () {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "℉"
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "℃"
    } else {
        result.textContent = "Select a unit"
    }
}