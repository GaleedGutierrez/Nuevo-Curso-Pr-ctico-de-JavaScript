export {};
const h1 = document.querySelector('h1') as HTMLHeadElement;
const p = document.querySelector('p') as HTMLParagraphElement;
const parrafito = document.querySelector('.parrafito') as HTMLParagraphElement;
const pid = document.querySelector('#pid') as HTMLParagraphElement;
const input = document.querySelector('input') as HTMLInputElement;
const figure = document.querySelector('#figure') as HTMLElement;

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.log(input.value);

// h1.innerText = 'Patito <br /> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');

input.value = 'Hola';

const img: HTMLImageElement = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
// img.src = 'https://static.platzi.com/static/images/conf/logo_black@2x.png';

figure.appendChild(img);
// pid.innerText = '';
// pid.innerHTML = '';
