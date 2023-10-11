const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = 32;
let second_operand = 0;
let operator_pressed = false;//flag for operator being pressed
let operator = '';


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
    return operator_pressed;
}

/**set operator_pressed
 * true: if an operator button was pressed
 * return it's default value: if no operator was pressed
 */
function setOperatorPressed(is_pressed){
    if(!is_pressed){
        operator_pressed = true;
    }
    else{
        return operator_pressed;
    }
}

/**set operator's value to operator pressed*/
function setOperator(a_operator){
    operator = a_operator;
}

/**set first operand's value */
function setFirstOperand(){
    if(!isOperand(first_operand)){
        first_operand = calculator_display.textContent;
    }
    else{
        return;
    }
}

/**check if an operand value is set */
function isOperand(an_operand){
    if(!an_operand){
        return false;
    }
    else{
        return true;
    }
}


/**Determine which operator is being pressed */
function checkOperator(a_operator){
    // console.log("value before an operator pressed: " + operator_pressed);
    setOperatorPressed(isOperatorPressed());
    console.log(a_operator);
    console.log("value for operater_pressed after user pressed an operator: " + operator_pressed);
    setOperator(a_operator);
    console.log("value set for operator is: " + operator);
    //set first_operand since an operator button was pressed
    setFirstOperand(first_operand);
    console.log("value of operand after checking if it is set: " + first_operand);
}

//TODO: assign second operand, but make sure first operand != 0 && second operand == 0
//TODO: calculate
//TODO: allow decimals

inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    else if (inputBtn.className === 'operator'){
        inputBtn.addEventListener('click', () => checkOperator(inputBtn.value));
    }
    
});