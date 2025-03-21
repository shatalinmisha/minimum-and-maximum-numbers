const allEl = document.querySelector('.all-elements');
const buttonMinEl = document.querySelector('.min');
const buttonMaxEl = document.querySelector('.max');
const minNumberEl = document.querySelector('.minNumber');
const maxNumberEl = document.querySelector('.maxNumber');

const numbersString = [ 45, 65, 73, 4, 23];
const numbers = [];

for (const element of numbersString) {
    numbers.push(Number(element));
    allEl.textContent = numbers;
}

buttonMinEl.onclick = function () {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    } 
    minNumberEl.append(minNumber);  
}

buttonMaxEl.onclick = function () {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    } 
    maxNumberEl.append(maxNumber);  
}