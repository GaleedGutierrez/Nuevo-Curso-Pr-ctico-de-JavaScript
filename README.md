# Test de JavaScript
## Variables y operaciones
### :one:  Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve?
**Respuesta: Una variable es un espacio en memoria que nos permite almacenar varios tipos de datos.**
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
**Respuesta: Al declarar una variable estamos conservando o guardando un espacio en memoria para posteriormente colocar un tipo de dato. Al inicializar una variable estamos asignando un tipo de dato a ese espacio en memoria que ya hemos guardado.**
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
**Respuesta: Al sumar números estamos realizando una operación matemática, mientras que al concatenar strings estamos juntando caracteres.**
¿Cuál operador me permite sumar o concatenar?
**Respuesta: El operador es `+`.**

### :two: Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
- Nombre
- Apellido
- Nombre de usuario en Platzi
- Edad
- Correo electrónico
- Mayor de edad
- Dinero ahorrado
- Deudas
**Repuesta:**
**- Nombre: *string***
**- Apellido: *string***
**- Nombre de usuario en Platzi: *string***
**- Edad: number**
**- Correo electrónico: *string***
**- Mayor de edad: *boolean***
**- Dinero ahorrado: *number***
**- Deudas: *number***

### :three: Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
**Respuesta: Yo lo haré en Typescript**
```typescript
const nombre: string;
const apellido: string;
const nombreUsuarioPlatzi: string;
let edad: number;
let correoElectronico: string;
let mayorDeEdad: boolean;
let dineroAhorrado: number;
let deudas: number;
```
### :four: Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
**Respuesta**
```typescript
const nombreCompleto = prompt('Escribe tu nombre completo.') ?? 'Desconocido';
const dineroAhorrado = parseFloat(prompt('Escribe tu dinero ahorrado.') ?? '0');
const deudas = parseFloat(prompt('Escribe tu dinero ahorrado.') ?? '0');

const dineroNeto = (dineroAhorrado - deudas).toFixed(2);
const dineroNetoRespuesta = parseFloat(dineroNeto);
const respuesta = { nombreCompleto, dineroNetoRespuesta };
alert(`
    Tu nombre completo es: ${respuesta.nombreCompleto}
    Tu dinero neto es: ${respuesta.dineroNetoRespuesta}
`);
```
## Funciones
### :one: Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función?
**Respesta: Una función es un bloque de código que nos permite reutilizarlo las veces que sea necesario y que devuelve siempre un único valor. En caso de no devolver un valor estaríamos hablando de un procedimiento.**
- ¿Cuándo me sirve usar una función en mi código?
**Respesta: Vamos a usar una función cuando la tarea que tenemos que realizar es repetidamente utilizada.**
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
**Respesta: Los parámetros son los datos que recibe la función y son empleadas dentro de la misma, mientras que los argumentos son los datos que le mandamos a la función cuando esta es llamada.**
### :two: Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
**Respuesta**
```typescript
const sayMyName = (name: string, lastName: string, nickname: string) => {
    const completeName = `${name} ${lastName}`;
    (nickname === '')
        ? console.log(`Mi nombre es ${completeName} y no tengo nickname.`)
        : console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
};

let name = '';
let lastName = '';
while (name === '') name = prompt('Nombre: ') as string;
while (lastName === '') lastName = prompt('Apellido: ') as string;
const nickname = prompt('Nickname: ') as string;
sayMyName(name, lastName, nickname);
```


## Condicionales
### Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional?
**Respuesta: Un condicional es un bloque de código que se ejecutará en el caso de que se cumpla cierta condición.**
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
**Respuesta: En JavaScript tenemos a los condicionales `if else`, `switch` y `operador condicionar ternario`.**
- ¿Puedo combinar funciones y condicionales?
**Respuesta: Podemos usar combinar ambas.**

### :two: Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```javascript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

**Respuesta**
**Comparto las dos opciones con la que logre solucionar el ejercicio.**
```typescript
// Opción 1
const tipoDeSuscripcion = "Expert";
const suscripcion = {
    free: 'Free',
    basic: 'Basic',
    expert: 'Expert',
    expertPlus: 'Expert Plus'
};


if (tipoDeSuscripcion === suscripcion.free) {
    console.log("Solo puedes tomar los cursos gratis.");
} else if (tipoDeSuscripcion === suscripcion.basic) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
} else if (tipoDeSuscripcion === suscripcion.expert) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
} else if (tipoDeSuscripcion === suscripcion.expertPlus) {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.");
}

// Opción 2
class Estudiante {
    #type: string;
    #message: string;

    constructor (type: string, message: string) {
        this.#type = type;
        this.#message = message;
    }

    get type (): string {
        return this.#type;
    }

    sayMessage (): void {
        console.log(this.#message);
    }
}

const tipoDeSuscripcion = "Expert";

const free = new Estudiante('Free', 'Solo puedes tomar los cursos gratis.');
const basic = new Estudiante('Basic', 'Puedes tomar casi todos los cursos de Platzi durante un mes.');
const expert = new Estudiante('Expert', 'Puedes tomar casi todos los cursos de Platzi durante un año.');
const expertPlus = new Estudiante('Expert Plus', 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.');

const suscripciones = [free, basic, expert, expertPlus];

for (const suscripcion of suscripciones) {
    if (suscripcion.type === tipoDeSuscripcion) {
        suscripcion.sayMessage();
        break;
    }
}
```
## Ciclos
### :one: Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un ciclo?
**Respuesta: Un ciclo es un bloque de código que es ejecutado repetidamente hasta que se deje de cumplir cierta condición.**
- ¿Qué tipos de ciclos existen en JavaScript?
**Respuesta: Los ciclos que podemos encontrar en JavaScript con `while`, `do...while`, `for`, `for of` y `for in`.**
- ¿Qué es un ciclo infinito y por qué es un problema?
**Respuesta: Un ciclo infinito sucede cuando no establecemos bien la condición que permite la finalización del ciclo. Un loop infinito es un problema, ya que rompe nuestro programa y en el peor de los casos daña a nuestro hardware.**
- ¿Puedo mezclar ciclos y condicionales?
**Respuesta: Si, puedo mezcar ciclos y condicionales.**
### :two: Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
**Respuesta**
```typescript
let i = 0;
console.log('Primero:');
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
i = 10;
console.log('Segundo:');
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```
## :three: Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
**Respuesta**
```typescript
let respuestaUsuario = prompt('¿Cúal es el resultado de 2 + 2?') ?? '0';
while (respuestaUsuario != '4') {
    respuestaUsuario = prompt(`
    Hubo un error, intentalo de nuevo.
    ¿Cúal es el resultado de 2 + 2?
    `) ?? '0';
}
```
## Listas
### :one: Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
**Respuesta: Es una estrucutra de datos en donde podemos almacenar datos del mismo o distinto tipo, incluso podemos guardar otros arrays.**
- ¿Qué es un objeto?
**Respuesta: Es una colección de datos y/o funcionalidades relacionadas.**
- ¿Cuándo es mejor usar objetos o arrays?
**Respuesta:**
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
**Respuesta:**
### :two: Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```typescript
function function1 (array: unknown[]) {
    console.log(`El primer elemento es: ${array[0]}`);
}
```
### :three: Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```typescript
function function2 (array: unknown[]) {
    for (let i = 0; i < array.length; i++) {
        console.log(`La posición ${i} del array contiene: ${array[i]}`);
    }
}
```
### :four: Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```typescript
interface Person {
    name: string;
    lastName: string;
    age: number;
    favoriteFood: string[];
}
function function3 (obj: Person) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key as keyof Person]}`);
    }
}
```
