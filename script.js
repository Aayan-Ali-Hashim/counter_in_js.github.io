const mainTitle = document.querySelector('#title');
let currValue = 0;
const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#Reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
    currValue++;
    mainTitle.textContent = currValue;
});
btnDecrement.addEventListener('click', () => {
    currValue--;
    mainTitle.textContent = currValue;
});
btnReset.addEventListener('click',() => {
    currValue = 0;
    mainTitle.textContent = currValue;
})