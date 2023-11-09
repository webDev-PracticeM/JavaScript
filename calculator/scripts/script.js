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
 */
function setOperatorPressed(is_pressed){
    if(!is_pressed){
        operator_pressed = true;
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
    else{
        setSecondOperand();
        console.log("value of second_operand " + second_operand);
    }
}

/**set second operand's value */
function setSecondOperand(){
    if(!isOperand(second_operand)){
        second_operand = Number(calculator_display.textContent);
        nextOperand = false;
    }
}

/**check if an operand value is set 
 * true: if an_operand has a value
 * false: if an_operand does not have a value
*/
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
    //set first_operand since an operator button was pressed
    setFirstOperand();
    console.log("value of first operand after checking if it is set: " + first_operand);
    //prevent mutliple operators
    if(operator && nextOperand){
        operator = a_operator;
        return;
    }
    // console.log("value before an operator pressed: " + operator_pressed);
    setOperatorPressed(isOperatorPressed());
    console.log(a_operator);
    console.log("value for operater_pressed after user pressed an operator: " + operator_pressed);
    setOperator(a_operator);
    console.log("value set for operator is: " + operator);
    
    
}

//TODO: calculate
//TODO: allow decimals

inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => checkOperator(inputBtn.value));
    }
    
});