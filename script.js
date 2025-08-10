// Dice Roller Program

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; //generate num betwen 1 and 6
        values.push(value);
        images.push(`<img src= "dice imgs/${value}_dice.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("");
}