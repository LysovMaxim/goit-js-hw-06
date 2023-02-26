
const buttonMinusEl = document.querySelector(`button[data-action="decrement"]`);
const valueEl = document.querySelector("#value");
const buttonPlusEl = document.querySelector(`button[data-action="increment"]`);
   
buttonMinusEl.addEventListener("click", () => {
    valueEl.textContent -= 1; 
}) 

buttonPlusEl.addEventListener("click", () => {
    let velue = parseInt(valueEl.textContent);
    valueEl.textContent = velue + 1;
})