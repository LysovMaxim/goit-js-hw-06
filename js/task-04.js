
const buttonMinusEl = document.querySelector(`button[data-action="decrement"]`);
console.log(buttonMinusEl);
const valueEl = document.querySelector("#value");
console.log(valueEl);
const buttonPlusEl = document.querySelector(`button[data-action="increment"]`);
console.log(buttonPlusEl);

   
buttonMinusEl.addEventListener("click", () => {
    valueEl.textContent -= 1; 
}) 

buttonPlusEl.addEventListener("click", () => {
    let velue = parseInt(valueEl.textContent);
    valueEl.textContent = velue + 1;
})