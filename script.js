// Number between 1-6 
let randoNum = Math.floor(Math.random() * 6) + 1;
console.log(randoNum);

// Number between 50 and 100
const minEx = 50;
const maxEx = 100;
let randNum = Math.floor(Math.random() * (maxEx - minEx)) + minEx;
console.log(randNum)

// Random number generator
const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
