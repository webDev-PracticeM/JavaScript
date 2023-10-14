const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = 0;
let second_operand = 0;
let operator_pressed = false;//flag for operator being pressed
let operator = '';
let nextOperand = false;//flag for waiting for the next operand


/** Display the value*/
function displayValue(a_value){
    if(nextOperand){
        calculator_display.textContent = a_value;
        nextOperand = false;
    }
    else{
        if(calculator_display.textContent === '0'){
            calculator_display.textContent = a_value;
        }
        else{
            calculator_display.textContent += a_value;
        }
    } 
}

/**return value of operator_pressed */
function isOperatorPressed(){
    return operator_pressed;
}

/**set operator_pressed
 * true: if an operator button was pressed
 * false: to reset operator_pressed flag
 */
function setOperatorPressed(is_pressed){
    if(!is_pressed){
        operator_pressed = true;
    }
    else{
        operator_pressed = false;
    }
}

/**set operator's value to operator pressed*/
function setOperator(a_operator){
    operator = a_operator;
}

/**set first operand's value */
function setFirstOperand(){
    if(!isOperand(first_operand)){
        first_operand = Number(calculator_display.textContent);
        nextOperand = true;
    }
}

/**set second operand's value */
function setSecondOperand(){
    if(!isOperand(second_operand)){
        second_operand = Number(calculator_display.textContent);
        nextOperand = false;
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
    setFirstOperand();
    console.log("value of operand after checking if it is set: " + first_operand);
    
}

//TODO: assign second operand, but make sure first operand != 0 && second operand == 0
//TODO: if an expresson with 2 numbers, assign second operand when needing to do calculation
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