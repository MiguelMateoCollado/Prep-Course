// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop()
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var valor = array[0]
  for (let i = 0; i < array.length; i++) {
   valor = array.shift() + 1
   array.push(valor)
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var valor = palabras[0]
  for (let i = 1; i < palabras.length; i++) {
    var total = valor
    valor = total +  " " + palabras[i]
  }
  return valor
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true
  }else {
    return false
  }
  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = numeros[0]
  for (let i = 1; i < numeros.length; i++) {
    var total = valor
    valor = total + numeros[i]
  }
  return valor
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = resultadosTest[0]
  for (let i = 1; i < resultadosTest.length; i++) {
    total += resultadosTest[i]
    var promedio = total / resultadosTest.length
  }
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: necesito contar cada numero y compararlo con el primero en caso de que el numero contado sea mayor al primero cambiarlo hasta que aparezca otro mas grande
  var numeroactual = numeros[0]
  for (let i = 0; i < numeros.length; i++) {
    if (numeroactual < numeros[i]) {
      numeroactual  = numeros[i]
    }
    
  }
  return numeroactual
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var valorInicial = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    valorInicial *=  arguments[i]

  } 
  if (valorInicial === undefined) {
    return 0
  }else {
    return valorInicial
  }

  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador += 1
    }    
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  

  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana"  
      break;
    case 2:
      return "Es dia Laboral"     
      break;
    case 3:
      return "Es dia Laboral"     
      break;
    case 4:
      return "Es dia Laboral"     
      break;
    case 5:
      return "Es dia Laboral"     
      break;
    case 6:
      return "Es dia Laboral"  
      break;
    case 7:
      return "Es fin de semana"
     break;
  }
  
}
  
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numerocreado = n.toString()
  if (numerocreado[0] == 9) {
    return true
  }else{
    return false
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var comparador = arreglo[0]
    for (let i = 1; i < arreglo.length; i++) {
      if (comparador == arreglo[i]) {
        return true
      }else{
        return false
      }
    }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesBuscados = []
 
  for (let i = 0; i < array.length; i++) {
  if (array[i] === "Enero" || array[i] === "Noviembre" || array[i] === "Marzo") {
   mesesBuscados.push(array[i])
  }
  }
  if (mesesBuscados.length < 3) {
   return "No se encontraron los meses pedidos"
  }
  return mesesBuscados
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var contador = []
  for (let i = 0; i < array.length; i++) {
    
    if (array[i] > 100) {
      contador.push(array[i])
    }
  }
  return contador
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = [];
let num = numero;
for (var i=0; i<10; i++){
  num += 2
  if (num === i) break;
  else array.push(num)
};
if (i<10) {
  return "Se interrumpió la ejecución";
}
else {
  return array; 
}

  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  let array = [];
  let num = numero;
  for (var i=0; i<10; i++){
    if (i === 5)  {
      continue;}else {
        num += 2
        array.push(num)
      }
     
  }
    return array
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
