const rowDivs = document.querySelectorAll('.row button');

function applyAttributes() {

  rowDivs.forEach((element) => {

    if (element.id == "clear") {
      element.setAttribute('onclick','clearValue()');
    }
    else if (element.id == "calculate") {
      element.setAttribute('onclick','calculate()');
    }
    else if (element.id == "deleter") {
      element.setAttribute('onclick','deleter()');
    }
    else {
      element.setAttribute('onclick','getValue(this.innerHTML)');
    }
    
  })
  
}

applyAttributes();


function getValue(num) {

  let displayValue = document.calculator.display.value;
  document.calculator.display.value = displayValue + num;
  console.log(typeof displayValue);
}


function clearValue() {

  document.calculator.display.value = "";
  
}

function deleter() {

  let currentValue = document.calculator.display.value;
  let currentValueArr = currentValue.split("");
  currentValueArr.pop();
  let newValue = currentValueArr.join('');
  
  document.calculator.display.value = newValue;

}


function calculate() {
  
  result = eval(document.calculator.display.value);
  document.calculator.display.value = result;

}