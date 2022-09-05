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
