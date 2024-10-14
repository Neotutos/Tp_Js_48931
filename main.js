
//Ejercicio 2

//variables
let a = 5;
let b = 10;
let c = a + b; // Sumar a y b

// Imprimir el resultado
console.log(`La suma de a y b es = ${c}`); // Salida: La suma de a y b es = 15

//---------------------------------------------------------------------------------------

//Ejercicio 3

// Pedir nombre
let nombre = prompt("Por favor, ingresa tu nombre:");

// Imprimir el saludo en la consola
console.log(`¡Hola, ${nombre}! Bienvenido/a.`); 

//---------------------------------------------------------------------------------------

//Ejercicio 2.1
// Declarar las variables
let x= 25; // Puedes cambiar este valor
let y = 30; // Puedes cambiar este valor
let z; // Variable para almacenar el mayor


// Determinar cuál es el mayor
if (x > y) {
    z = x; 
} else if (y > x) {
    z = y;
} else {
    z = 'Ambos son iguales';
}

// Imprimir el resultado en la consola
console.log(`El mayor es: ${z}`); 

//---------------------------------------------------------------------------------------

//Ejercicio 2.2
// Pedir al suario un número
let numeroIngresado = prompt("Por favor, ingresa un número:");

// Convertir el valor ingresado a un número
numeroIngresado = Number(numeroIngresado);

// Determinar si el número es par o impar
if (numeroIngresado % 2 === 0) {
    console.log(`El número ${numeroIngresado} es par.`);
} else {
    console.log(`El número ${numeroIngresado} es impar.`);
}


//---------------------------------------------------------------------------------------

//Ejercicio 3.1
let numero = 10;

// Usar un bucle while para restar 1 en cada iteración
while (numero > 0) {
    console.log(numero); // Imprimir el valor de la variable
    numero--;
}


console.log(numero); // Imprimir 0 al finalizar

//---------------------------------------------------------------------------------------

//Ejercicio 3.2
let num; 

// Usar un bucle do...while para pedir un número mayor a 100
do {
  num = prompt("Por favor, ingresa un número mayor a 100:"); 
  num = Number(num); // Convertir el valor ingresado a un número
} while (num <= 100); // Repetir hasta que el número sea mayor a 100


console.log(`Ingresaste un numero mayor a 100: ${num}`);

//---------------------------------------------------------------------------------------

//Ejercicio 4.1

function esPar(numero) {
  return numero % 2 === 0; // Retorna true si es par, false si es impar
}

// Probar la función con diferentes números
console.log(`El número 4 es par: ${esPar(4)}`);
console.log(`El número 7 es par: ${esPar(7)}`);
console.log(`El número 10 es par: ${esPar(10)}`);
console.log(`El número 15 es par: ${esPar(15)}`);
console.log(`El número 0 es par: ${esPar(0)}`);

//---------------------------------------------------------------------------------------

//Ejercicio 4.2

// funcion convertir

function convertirCelsiusAFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32; // Convertir Celsius a Fahrenheit
  console.log(`${celsius}°C son equivalentes a ${fahrenheit}°F.`); 
}

// Probar la función con diferentes valores
convertirCelsiusAFahrenheit(0);    // Prueba con 0 grados Celsius
convertirCelsiusAFahrenheit(25);   // Prueba con 25 grados Celsius
convertirCelsiusAFahrenheit(30);   // Prueba con 30 grados Celsius
convertirCelsiusAFahrenheit(100);  // Prueba con 100 grados Celsius

//---------------------------------------------------------------------------------------

//Ejercicio 5.1



const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Buenos Aires",

  // Método para cambiar la ciudad
  cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad; // Actualizar la propiedad ciudad
  }
};

// Mostrar propiedades iniciales en la consola
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

// Cambiar la ciudad utilizando el método
persona.cambiarCiudad("Córdoba");

// Mostrar propiedades actualizadas en la consola
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);


//---------------------------------------------------------------------------------------

//Ejercicio 5.2


const libro = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  año: 1605,

  // Método para determinar si el libro es antiguo
  esAntiguo() {
      const añoActual = new Date().getFullYear(); // Obtener el año actual
      return (añoActual - this.año) > 10; // Retorna true si el libro tiene más de 10 años
  }
};

// Verificar si el libro es antiguo y mostrar el mensaje en la consola
const resultadoAntiguo = libro.esAntiguo();
console.log(`El libro "${libro.titulo}" es antiguo: ${resultadoAntiguo}`);


//---------------------------------------------------------------------------------------

//Ejercicio 6.1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inicializar un nuevo array para almacenar los resultados
const numerosMultiplicados = [];

// Bucle para multiplicar cada número por 2 y almacenar el resultado
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados[i] = numeros[i] * 2; // Multiplicar y almacenar
}

// Mostrar ambos arrays en la consola
console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);

//---------------------------------------------------------------------------------------

//Ejercicio 6.2
// Crear un array vacío llamado pares
const pares = [];

// Bucle para agregar los primeros 10 números pares al array
for (let i = 0; pares.length < 10; i++) {
    if (i % 2 === 0) { // Verificar si el número es par
        pares.push(i); // Agregar el número par al array
    }
}

// Imprimir el array de números pares en la consola
console.log("Array de los primeros 10 números pares:", pares);

//---------------------------------------------------------------------------------------

//Ejercicio 7.1

        // Función para cambiar el color de todos los elementos <p> a azul
        function cambiarColor() {
            const parrafos = document.querySelectorAll('p'); // Seleccionar todos los elementos <p>
            parrafos.forEach(parrafo => {
                parrafo.classList.toggle('azul'); // Alternar la clase azul
            });
        }  
   
//---------------------------------------------------------------------------------------

//Ejercicio 7.2

// Función para mostrar una alerta con el valor ingresado
function mostrarAlerta() {
  const valor = document.getElementById('inputTexto').value; // Obtener el valor del campo de texto
  alert('El valor ingresado es: ' + valor); // Mostrar alerta
}
//---------------------------------------------------------------------------------------

//Ejercicio 8.1

// Función para manejar el evento click
function mostrarTexto(event) {
  console.log(event.target.innerText); // Muestra el texto del elemento clicado en la consola
}

// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
  // Obtener la lista y todos sus elementos li
  const lista = document.getElementById('miLista');
  const elementosLi = lista.getElementsByTagName('li');

  // Asignar el evento click a cada elemento li
  for (let i = 0; i < elementosLi.length; i++) {
      elementosLi[i].addEventListener('click', mostrarTexto);
  }
});


//---------------------------------------------------------------------------------------

//Ejercicio 8.2

document.addEventListener('DOMContentLoaded', function() {
  // Obtener el elemento del input y los botones
  const input = document.getElementById('miInput');
  const deshabilitarBtn = document.getElementById('deshabilitarBtn');
  const habilitarBtn = document.getElementById('habilitarBtn');

  // Función para deshabilitar el campo de texto
  function deshabilitarInput() {
      input.disabled = true; // Deshabilita el input
  }

  // Función para habilitar el campo de texto
  function habilitarInput() {
      input.disabled = false; // Habilita el input
  }

  // Asignar los eventos a los botones
  deshabilitarBtn.addEventListener('click', deshabilitarInput);
  habilitarBtn.addEventListener('click', habilitarInput);
});


//---------------------------------------------------------------------------------------

//Ejercicio 9.1

document.addEventListener('DOMContentLoaded', function() {
  // Función para guardar el correo en localStorage
  function guardarCorreo() {
      const emailInput = document.getElementById('emailInput');
      const correo = emailInput.value;

      // Obtener el array de correos existentes desde localStorage
      let correos = JSON.parse(localStorage.getItem('correos')) || [];

      // Agregar el nuevo correo al array
      correos.push(correo);

      // Guardar el array actualizado en localStorage
      localStorage.setItem('correos', JSON.stringify(correos));

      // Actualizar la visualización del correo guardado
      mostrarCorreosGuardados();
      emailInput.value = ''; // Limpiar el campo de entrada
  }

  // Función para mostrar todos los correos guardados en el DOM
  function mostrarCorreosGuardados() {
      const correosGuardados = JSON.parse(localStorage.getItem('correos')) || [];
      const correoDiv = document.getElementById('correoGuardado');
      const eliminarBtn = document.getElementById('eliminarBtn');

      // Limpiar el contenido anterior
      correoDiv.innerHTML = '';

      if (correosGuardados.length > 0) {
          correosGuardados.forEach((correo, index) => {
              correoDiv.innerHTML += `Correo guardado ${index + 1}: ${correo}<br>`; // Muestra cada correo guardado
          });
          eliminarBtn.style.display = 'inline-block'; // Muestra el botón de eliminar
      } else {
          eliminarBtn.style.display = 'none'; // Oculta el botón si no hay correos guardados
      }
  }

  // Función para eliminar todos los correos guardados
  function eliminarCorreos() {
      localStorage.removeItem('correos'); // Elimina todos los correos de localStorage
      mostrarCorreosGuardados(); // Actualiza la visualización
  }

  // Event listeners
  document.getElementById('emailForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Previene el comportamiento por defecto del formulario
      guardarCorreo(); // Llama a la función para guardar el correo
  });

  document.getElementById('eliminarBtn').addEventListener('click', eliminarCorreos);

  // Mostrar los correos guardados al cargar la página
  mostrarCorreosGuardados();
});
