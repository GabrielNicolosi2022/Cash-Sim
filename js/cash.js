let pin = 1111;
let miDinero = 150000;

const intentosPin = 3;
let pinIngresado;
let intentos = 0;
do {
  pinIngresado = prompt("Ingrese su PIN de cuatro dígitos");

  if (checkIsNumber() === true && check4Digits(Number(pinIngresado)) === true) {
    intentos++;
    console.log(intentos);

    if (intentos == 3) {
      alert("Le retuvimos la tarjeta por varios intentos de PIN");
    }
  } else {
    console.log("Debe ingresar solo 4 números.");
  }
} while (pinIngresado != pin);

do {
  opcionIngresada = prompt(
    "Hola, usted ha ingresado.\n0: Consulta de saldo.\n1: Retiro\n2: Depósito\n3: Cambio de Pin\n4: Salir"
  );
  mainMenu();
} while (opcionIngresada != 4);

// fUNCTIONS
function checkIsNumber() {
  return !isNaN(pinIngresado);
}
function check4Digits(numero) {
  if (numero.toString().length === 4) {
    return true;
  } else {
    return false;
  }
}
function mainMenu() {
  switch (Number(opcionIngresada)) {
    case 0:
      alert("Su cuenta tiene: " + Number(miDinero));
      break;

    case 1:
      dineroARetirar = prompt("Ingreses el monto a retirar");
      alert(
        "Su cuenta ahora tiene: " + (Number(miDinero) - Number(dineroARetirar))
      );
      break;

    case 2:
      dineroADepositar = prompt("Ingreses el monto a depositar");
      alert(
        "Su cuenta ahora tiene: " +
          (Number(miDinero) + Number(dineroADepositar))
      );
      break;

    case 3:
      pinOriginal = Number(prompt("Ingrese su PIN de cuatro dígitos"));
      // VALIDACIONES
      if (
        checkIsNumber() === true &&
        check4Digits(Number(pinOriginal)) === true
      ) {
        if (pinOriginal === pin) {
          changePin();
        }
      }
      break;

    default:
      console.log("Elija del 0 al 5 como opción");
      break;
  }
}

function changePin() {
  nuevoPin1 = Number(prompt("Ingrese su NUEVO PIN de cuatro dígitos"));
  console.log(nuevoPin1);
  nuevoPin2 = Number(
    prompt("Vuelva a ingresar su NUEVO PIN de cuatro dígitos")
  );
  console.log(nuevoPin2);

  if (nuevoPin1 === nuevoPin2) {
    pin = nuevoPin2;
    console.log(pin);
  } else if (nuevoPin1 !== nuevoPin2) {
    nuevoPin2 = Number(
      prompt("Vuelva a ingresar su NUEVO PIN de cuatro dígitos")
    );
    if (nuevoPin1 === nuevoPin2) {
      pin = nuevoPin2;
    } else {
      mainMenu();
    }
  }
}
