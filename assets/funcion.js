// Variables globales
let operando1 = '';
let operando2 = '';
let operador = '';
let historial = '';

// Función para mostrar el resultado en la calculadora
function mostrarResultado(resultado) {
  const datosElement = document.querySelector('.datos');
  datosElement.value = resultado;
}

// Función para mostrar la operación en el historial
function mostrarOperacion() {
  const historialElement = document.getElementById('historial');
  historialElement.value = historial;
}

// Función para realizar la operación matemática
function calcular() {
  let resultado = '';
  const num1 = parseFloat(operando1);
  const num2 = parseFloat(operando2);

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      return;
  }

  mostrarResultado(resultado);
  historial = `${operando1} ${operador} ${operando2} = ${resultado}`;
  mostrarOperacion();
  operando1 = resultado.toString();
  operando2 = '';
  operador = '';
}

// Función para manejar los eventos de los botones numéricos y el punto decimal
function manejarNumero(valor) {
  if (operador === '') {
    operando1 += valor;
    mostrarResultado(operando1);
  } else {
    operando2 += valor;
    mostrarResultado(operando2);
  }
}

// Función para manejar el evento del botón AC (borrar todo)
function manejarAC() {
  operando1 = '';
  operando2 = '';
  operador = '';
  historial = '';
  mostrarResultado('');
  mostrarOperacion();
}

// Función para manejar el evento de los botones de operador (+, -, *, /)
function manejarOperador(valor) {
  if (operando1 !== '') {
    operador = valor;
    historial = `${operando1} ${operador}`;
    mostrarOperacion();
  }
}

// Función para manejar el evento del botón igual (=)
function manejarIgual() {
  if (operando1 !== '' && operando2 !== '' && operador !== '') {
    calcular();
  }
}

// Obtener todos los elementos numéricos y el botón AC
const numeros = document.querySelectorAll('.num');
const botonAC = document.getElementById('AC');

// Agregar el evento click a los botones numéricos
numeros.forEach((numero) => {
  numero.addEventListener('click', () => {
    manejarNumero(numero.textContent.trim());
  });
});

// Agregar el evento click al botón AC
botonAC.addEventListener('click', manejarAC);

// Obtener todos los elementos de operador (+, -, *, /) y el botón igual (=)
const operadores = document.querySelectorAll('.tecla');
const botonIgual = document.getElementById('=');

// Agregar el evento click a los botones de operador (+, -, *, /)
operadores.forEach((operador) => {
  operador.addEventListener('click', () => {
    manejarOperador(operador.id);
  });
});

// Agregar el evento click al botón igual (=)
botonIgual.addEventListener('click', manejarIgual);
