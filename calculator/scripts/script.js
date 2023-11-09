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
    //prevent mutliple operators
    const multipleOperators = isMultipleOperators();
    if(multipleOperators){
        setOperator(a_operator);
        return;
    }
    
    console.log(a_operator);
    setOperator(a_operator);
    console.log("value set for operator is: " + operator);
    //set first_operand since an operator button was pressed
    setFirstOperand();
    console.log("value of first operand after checking if it is set: " + first_operand);
    calculate();
    
}

//TODO: calculate
function calculate(){
    let calculated_value = 0;
    switch(operator){
        case '+':
            calculated_value = second_operand + first_operand;
            calculator_display.textContent = calculated_value;
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