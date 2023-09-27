const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

/** Display the value*/
function displayValue(a_value){
    calculator_display.textContent = a_value;
}

inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    
});