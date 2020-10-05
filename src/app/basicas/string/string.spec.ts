import { mensaje } from './string';
describe('Pruebas de Strings', () => {

    it('Debe de regresar un string', () => {

        const resp = mensaje('Sebastian');

        expect(typeof resp).toBe('string');
    });


    it('Debe de regresar un Saludo con el nombre enviado', () => {
        const nombre = 'Sebastian';
        const resp = mensaje(nombre);

        expect(resp).toContain(nombre);
    });

});
