const cambioElInput = () => {
    console.log('Cambió el input');
};

const clickDelButton = () => {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const suma = value1 + value2;
    pResult.innerText = `Resultado: ${suma}`;
};

const h1 = document.querySelector('h1') as HTMLHeadElement;
const input1 = document.querySelector('#calculo1') as HTMLInputElement;
const input2 = document.querySelector('#calculo2') as HTMLInputElement;
const button = document.querySelector('#btnCalcular') as HTMLInputElement;
const pResult = document.querySelector('#resultado') as HTMLParagraphElement;

// Hay que comentar eso para en el archivo JS compilado.
export{};



// alert('xd');
