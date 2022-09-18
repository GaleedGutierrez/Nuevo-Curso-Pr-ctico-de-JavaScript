// Opción 1
(() => {
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

})();

// Opción 2
(() => {
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
})();

