const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = 0;
let second_operand = 0;
let operator_pressed = false;//flag for operator being pressed


/** Display the value*/
function displayValue(a_value){
    if(calculator_display.textContent === '0'){
        calculator_display.textContent = a_value;
    }
    else{
        calculator_display.textContent += a_value;
    }
}

/**return value of operator_pressed */
function isOperatorPressed(){
    if(operator_pressed){
        return true;
    }
    else{
        return false;
    }
}

/**set operator_pressed to either true or false
 * true: if an operator button was pressed
 * false: no operator button pressed
 */
function setOperatorPressed(is_pressed){
    if(!is_pressed){
        operator_pressed = true;
    }
}

/**Determine which operator is being pressed */
function checkOperator(a_operator){
    const is_pressed = isOperatorPressed();
    console.log("value before an operator pressed: " + is_pressed);
    console.log(a_operator);
    setOperatorPressed(is_pressed);
    console.log(operator_pressed);

}

//TODO: assign first operand (make sure first operand's value is 0)
//TODO: assign second operand, but make sure first operand != 0 && second operand == 0
//TODO: calculate

inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    else if (inputBtn.className === 'operator'){
        inputBtn.addEventListener('click', () => checkOperator(inputBtn.value));
    }
    
});