// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var array=['pedro', 'daniela', 'sophie', 2720] 
    return array[0];
}
devolverPrimerElemento(0);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array =['pedro', 'daniela', 'sophie', 2720]
  return array[3];
}
devolverUltimoElemento(3);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array =['pedro', 'daniela', 'sophie', 2720, 'clara'];
  return array.length;
}
console.log(obtenerLargoDelArray(array));


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array=[1,2,3,4,5,6];
  array.push(array.length + 1);
  return array;
}
console.log(incrementarPorUno(array));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = ['pedro', 'daniela', 'gizeh', 'clara']
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray(array, elemento));


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array=['Jesús', 'gizeh', 'jeremias', 'amelie'];
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray(array, elemento));

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras = [ 'yo', 'soy', 'pedro', 'sanchez'];
  return palabras.join(' ');
  
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array=['centro', 'tiendas', 'municipalidad', 'absa']
  for (let i=0 ; i<array.length; i++){
    if (array[i]=== elemento){
      return true
    }
  }
  return false
}
console.log(arrayContiene(array, elemento));

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numeros = [15, 20, 17, 13, 09, 18, 05, 19];
  var suma= 0
  for(let i=0 ; i< numeros.length; i++){
    suma = suma + numeros[i];

  }
  return suma;
}
console.log(agregarNumeros());

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTest= [15, 20, 17, 13, 09, 18, 05, 19];
  return agregarNumeros(resultadosTest)/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros = [15, 20, 17, 13, 09, 18, 05, 19];
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var arguments = [2, 3, 4, 5]
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
