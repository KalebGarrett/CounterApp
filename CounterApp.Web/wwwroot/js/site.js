let addition = document.querySelector("#add");
let subtraction = document.querySelector("#subtract");
let reset = document.querySelector("#reset");

addition.addEventListener("click", function () {
    let output = document.querySelector("#output")
    let result = Number(output.innerHTML) + 1;
    
    if (result > 9) {
        result = 0;
    }

    output.innerText = result;
});

subtraction.addEventListener("click", function () {
    let output = document.querySelector("#output")
    let result = Number(output.innerHTML) - 1;

    if (result < 0) {
        result = 0;
    }
    
    output.innerText = result;
});

reset.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result;
    result = 0;
    
    output.innerHTML = result;
});