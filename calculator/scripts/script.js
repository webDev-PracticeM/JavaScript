const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

function displayValue(btn_value){
    calculator_display.textContent = btn_value;
}
inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    
});