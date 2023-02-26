const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
    outputEl.textContent = event.target.value;
});

inputEl.addEventListener("input", (event) => {
    if (outputEl.textContent.length === 0)
        outputEl.textContent = "Anonymous";        
});