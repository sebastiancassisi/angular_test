import { Jugador2 } from './jugador2';
describe('Jugador 2 emit', () => {

    let jugador: Jugador2;

    beforeEach(() => {
        jugador = new Jugador2();
    });


    it('Debe emitir un evento cuando recibe daño', () => {

        let nuevoHp = 0;

        jugador.hpCambia.subscribe(hp => {
            nuevoHp = hp;
        });

        jugador.danio(100);

        expect(nuevoHp).toBe(0);

    });

});