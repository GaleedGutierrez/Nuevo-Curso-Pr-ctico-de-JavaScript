let respuestaUsuario = prompt('¿Cúal es el resultado de 2 + 2?') ?? '0';
while (respuestaUsuario != '4') {
    respuestaUsuario = prompt(`
    Hubo un error, intentalo de nuevo.
    ¿Cúal es el resultado de 2 + 2?
    `) ?? '0';
}
