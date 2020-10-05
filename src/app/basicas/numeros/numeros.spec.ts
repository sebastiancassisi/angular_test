import { incrementar } from './numeros';

describe('Pruebas de Numeros', () => {

    it('Debe de retornar 100 si el numero ingresado es mayor a 100', () => {

        const resp = incrementar(300);
        expect(resp).toBe(100);
    });

    it('Debe de retornar el numero ingresado +1, si no es mayor a 100', () => {
        const numero = 50;
        const resp = incrementar(numero);
        expect(resp).toBe(numero + 1);
    });


});
