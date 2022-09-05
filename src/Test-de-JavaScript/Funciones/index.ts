const sayMyName = (name: string, lastName: string, nickname: string) => {
    const completeName = `${name} ${lastName}`;
    (nickname === '')
        ? console.log(`Mi nombre es ${completeName} y no tengo nickname.`)
        : console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
};

(() => {
    let name = '';
    let lastName = '';
    while (name === '') name = prompt('Nombre: ') as string;
    while (lastName === '') lastName = prompt('Apellido: ') as string;
    const nickname = prompt('Nickname: ') as string;
    sayMyName(name, lastName, nickname);
})();
