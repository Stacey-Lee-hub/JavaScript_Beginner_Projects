const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// Increase
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

// Decrease
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

// Reset
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}