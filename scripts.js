const display = document.querySelector(".display");
const increaseButton = document.querySelector(".increaseButton");
const resetButton = document.querySelector(".resetButton");

savedCount = localStorage.getItem('counter');

let currentCount = savedCount ? parseInt(savedCount) : 0;
display.textContent = currentCount;

increaseButton.addEventListener("click", () =>{
    currentCount++;
    display.textContent = currentCount;
    localStorage.setItem('counter', currentCount);
})

resetButton.addEventListener("click", () =>{
    currentCount = 0;
    display.textContent = currentCount;
    localStorage.removeItem('counter');
})