const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = 0;
let second_operand = 0;
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

/**set operator's value to operator pressed*/
function setOperator(a_operator){
    //only assign operator when it is not '='
    if(!(a_operator == '=')){
        operator = a_operator;
    }
    else{
        return;
    }
    
}

/**set first operand's value */
function setFirstOperand(){
    first_operand = Number(calculator_display.textContent);
}

/**set second operand's value */
function setSecondOperand(){
    second_operand = Number(calculator_display.textContent);
}

/**Set nextOperand's value */
function setNextOperand(b_value){
    nextOperand = b_value;
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

/** check if multiple operators were pressed at once
 * true: if multiple operators were pressed
 * false: no operator was pressed yet
*/
function isMultipleOperators(){
    if(operator && nextOperand){
        return true;
    }
    else{
        return false;
    }
}

/**Determine which operator is being pressed */
function checkOperator(a_operator){
    //prevent from assigning the last operand to the next b/c of pressing mutliple operators
    const multipleOperators = isMultipleOperators();
    if(multipleOperators){
        setOperator(a_operator);
        return;
    }
    //set operand since an operator button was pressed
    if(!isOperand(first_operand)){
        setFirstOperand();
        console.log("value of first operand after checking if it is set: " + first_operand);
        setNextOperand(true);
    }
    else{
        setNextOperand(true);
        setSecondOperand();
        console.log("value of second operand " + second_operand);
        setNextOperand(false);
            
    }
    
    
    // console.log("value before an operator pressed: " + operator_pressed);
    
    console.log(a_operator);
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