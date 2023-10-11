const inputBtns = document.querySelectorAll('button');
const calculator_display = document.querySelector('h1');

let first_operand = 0;
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
    // console.log("value before an operator pressed: " + operator_pressed);
    setOperatorPressed(isOperatorPressed());
    console.log(a_operator);
    console.log("value for operater_pressed after user pressed an operator: " + operator_pressed);

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