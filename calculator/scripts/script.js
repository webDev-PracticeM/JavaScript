const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = -1;
let second_operand = -1;
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

/**set an operand's value */
function setOperand(){
    //set operand since an operator button was pressed
   if(!isOperand(first_operand)){
    setFirstOperand();
    console.log("value of first operand after checking if it is set: " + first_operand);
    setNextOperand(true);
    }
    else{
        //since first operand already set, set the second operand's value
        setSecondOperand();
        console.log("value of second operand " + second_operand);
        setNextOperand(false);
            
    } 
}

/**Set nextOperand flag value 
 * true: if waiting to receive second operand
 * false: otherwise
*/
function setNextOperand(b_value){
    nextOperand = b_value;
}

/**check if an operand value is set 
 * true: if an_operand has a value
 * false: if an_operand does not have a value
*/
function isOperand(an_operand){
    if(an_operand < 0){
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
    setOperand();
    
    console.log(a_operator);
    setOperator(a_operator);
    console.log("value set for operator is: " + operator);
    calculate();
    console.log("first_operand value for continued math expression " + first_operand);
    
}

//TODO: calculate
function calculate(){
    let calculated_value = 0;
    switch(operator){
        case '+':
            calculated_value = second_operand + first_operand;
            calculator_display.textContent = calculated_value;
            first_operand = Number(calculator_display.textContent);
            setNextOperand(true);
            break;

        case '-':
            calculated_value =  first_operand - second_operand;
            calculator_display.textContent = calculated_value;
            first_operand = Number(calculator_display.textContent);
            setNextOperand(true);
    }
}
//TODO: allow decimals

inputBtns.forEach((inputBtn) =>{
    if(Number(inputBtn.value) >= 0 && Number(inputBtn.value) <= 9){
        inputBtn.addEventListener('click', () => displayValue(inputBtn.value));
    }
    else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => checkOperator(inputBtn.value));
    }
    
});