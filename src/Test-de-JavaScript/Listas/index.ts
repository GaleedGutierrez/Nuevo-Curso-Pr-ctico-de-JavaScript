interface Person {
    name: string;
    lastName: string;
    age: number;
    favoriteFood: string[];
}

function function1 (array: unknown[]) {
    console.log(`El primer elemento es: ${array[0]}`);
}

function function2 (array: unknown[]) {
    for (let i = 0; i < array.length; i++) {
        console.log(`La posición ${i} del array contiene: ${array[i]}`);
    }
}

function function3 (obj: Person) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key as keyof Person]}`);
    }
}



const array = ['Hola', 1, 2, 3, true, false];

const obj: Person = {
    name: 'Galeed',
    lastName: 'Gutierrez',
    age: 21,
    favoriteFood: ['asado', 'guiso', 'locro', 'anchi']
};

function1(array);
function2(array);
function3(obj);


