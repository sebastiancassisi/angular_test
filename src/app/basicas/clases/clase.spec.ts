import { Jugador } from "./clase";

describe('Pruebas de Clases', () => {

    let jugador = new Jugador();

    //Antes que todo
    beforeAll(() => {

    });
    //Antes de cada prueba
    beforeEach(() => {
        jugador = new Jugador();
    });
    //Despues que todo
    afterAll(() => {

    });
    //Despues de cada prueba
    afterEach(() => {

    });


    it('Debe retornar 80 de hp si recibe 20 de daño', () => {

        const resp = jugador.danio(20);

        expect(resp).toBe(80);

    });


    it('Debe retornar 50 de hp si recibe 50 de daño', () => {

        const resp = jugador.danio(50);

        expect(resp).toBe(50);

    });


    it('Debe retornar 0 de hp si recibe 100 de daño o mas', () => {

        const resp = jugador.danio(100);

        expect(resp).toBe(0);

    });
});