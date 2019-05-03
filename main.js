// Constante que armazena a NodeList dos butões:
const btns = document.querySelectorAll('.row button');

// Função que aplica os atributos com os eventos/funções especiais:
function applyAttributes() {

  btns.forEach((element) => {

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

// Chamada da função acima:
applyAttributes();

// Função que pega o valor innerHTML do botão clicado e o exibe no display da calculadora:
function getValue(num) {

  // Seleção do valor do elemento display:
  let displayValue = document.calculator.display.value;

  // Concatena o valor atual do display com o valor do botão clicado e atribui o resultado no documento:
  document.calculator.display.value = displayValue + num;

  // Obs: para relembrar que é a manipulação de string - console.log(typeof displayValue).
}

// Função do botão CLEAR:
function clearValue() {

  document.calculator.display.value = "";
  
}

// Função do botão DELETE:
function deleter() {

  // Valor atual do display:
  let currentValue = document.calculator.display.value;

  // Array por dígito da string do valor do display:
  let currentValueArr = currentValue.split("");

  // Função para retirar o último elemento do array:
  currentValueArr.pop();

  // Junção do array em string e atribuição do novo valor sem o elemento retirado:
  let newValue = currentValueArr.join('');
  document.calculator.display.value = newValue;

}

// Função do botão CALCULAR:
function calculate() {
  
  // Uso do método EVAL para efetuar a operação:
  result = eval(document.calculator.display.value);
  
  // Mensagem divertida para não exibir "undefined":
  if (result == undefined) {
    result = "Faça uma conta :)";
  }

  // Atribuição do resultado:
  document.calculator.display.value = result;
}