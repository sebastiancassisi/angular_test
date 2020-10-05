import { obtenerRobots } from './arreglos';

describe('Pruebas de Arreglos', () => {
    it('Debe retornar 3 robots', () => {
        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);

    });

    xit('Debo existir meganan y ultron', () => {
        const resp = obtenerRobots();
        expect(resp).toContain('megaman');
        expect(resp).toContain('jarvis');

    });
});

